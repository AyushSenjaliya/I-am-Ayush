const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

export interface StreamChatParams {
  message: string;
  sessionId?: string;
  onToken: (token: string) => void;
  onMeta?: (meta: { intent?: string; visitorType?: string; salesStage?: string; recommendations?: any[] }) => void;
  onDone?: () => void;
  onError?: (error: string) => void;
}

export async function streamAgentChat({
  message,
  sessionId = "session_" + Date.now(),
  onToken,
  onMeta,
  onDone,
  onError,
}: StreamChatParams): Promise<void> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/agent/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, sessionId }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    if (!response.body) {
      throw new Error("No response body received from chat stream.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n\n");
      // Keep last incomplete chunk in buffer
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("data:")) {
          const jsonStr = trimmed.replace(/^data:\s*/, "");
          try {
            const data = JSON.parse(jsonStr);
            if (data.type === "token" && data.content) {
              onToken(data.content);
            } else if (data.type === "intent") {
              if (onMeta) {
                onMeta({
                  intent: data.intent,
                  visitorType: data.visitorType,
                  salesStage: data.salesStage,
                  recommendations: data.recommendations,
                });
              }
            } else if (data.type === "done") {
              if (onDone) onDone();
            } else if (data.type === "error") {
              if (onError) onError(data.message || "An error occurred during response generation.");
            }
          } catch (e) {
            console.error("Failed to parse SSE data packet:", jsonStr, e);
          }
        }
      }
    }


    if (onDone) onDone();
  } catch (err: any) {
    console.error("Agent SSE stream network error:", err);
    if (onError) {
      onError(err.message || "Network error communicating with AI agent.");
    }
  }
}

export interface AgentLeadPayload {
  sessionId?: string;
  name: string;
  email: string;
  company?: string;
  requirementSummary?: string;
  intent?: string;
  fitScore?: number;
}

export async function submitAgentLead(payload: AgentLeadPayload): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/agent/lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to submit lead information.");
    }
    return data;
  } catch (err: any) {
    console.error("Error submitting lead:", err);
    return {
      success: false,
      error: err.message || "Network error submitting lead.",
    };
  }
}

