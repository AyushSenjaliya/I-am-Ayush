export interface ProductLabItem {
  id: string;
  title: string;
  status: string;
  statusType: "coral" | "gold";
  problem: string;
  approach: string;
  whyShelved: string;
  whatItTakes: string;
  tags: string[];
}

export const productLabData: ProductLabItem[] = [
  {
    id: "autonomous-inventory-agent",
    title: "Autonomous Multi-Warehouse Inventory Rebalancer",
    status: "Shelved — timing",
    statusType: "coral",
    problem: "Multi-channel e-commerce brands stock out on trending SKUs in regional fulfillment hubs while holding excess inventory elsewhere.",
    approach: "Algorithmic telemetry agent predicting demand spikes per zip code and triggering automated internal transfer orders.",
    whyShelved: "High integration friction with legacy ERP systems without unified GraphQL webhooks.",
    whatItTakes: "6 weeks of dedicated integration with Shopify Plus & ShipBob inventory webhooks.",
    tags: ["Algorithmic Supply Chain", "Shopify API", "Predictive Analytics"]
  },
  {
    id: "voice-to-architecture",
    title: "Real-Time Voice Instruction Diagram Compiler",
    status: "R&D Prototype — Active",
    statusType: "gold",
    problem: "Engineering teams lose velocity manually drafting software flowcharts during live architecture meetings.",
    approach: "Web Speech API instruction parsing combined with dynamic Mermaid.js AST compiler for instant visual node layout.",
    whyShelved: "High token costs for continuous streaming multi-turn audio parsing; paused pending local Whisper model optimization.",
    whatItTakes: "Integration with lightweight quantized local SLM (Phi-3 / Llama-3 8B) web assembly worker.",
    tags: ["Web Speech API", "AST Compiler", "SLM Local WASM"]
  },
  {
    id: "llm-json-schema-enforcer",
    title: "LLM Structured Output JSON Schema Enforcer",
    status: "R&D Prototype",
    statusType: "gold",
    problem: "Generative AI APIs occasionally return malformed JSON when streaming complex nested structures under tight latency limits.",
    approach: "Zero-latency token streaming regex parser enforcing TypeScript Zod schemas on partial stream buffers.",
    whyShelved: "Native OpenAI / Gemini structured outputs improved model compliance natively; retained as lightweight offline backup parser.",
    whatItTakes: "Benchmarking streaming parser overhead against large 10kb nested JSON schemas.",
    tags: ["TypeScript", "Zod Validation", "Streaming Token Parser"]
  },
  {
    id: "edge-wasm-embeddings",
    title: "Edge WASM Vector Embeddings Generator",
    status: "Research Spike",
    statusType: "coral",
    problem: "Client-side document search incurs privacy concerns and high latency by sending raw text to cloud embedding APIs.",
    approach: "Running quantized MiniLM embedding model directly inside browser WebAssembly via ONNX runtime.",
    whyShelved: "Browser initial WASM bundle download size (~45MB) introduced acceptable FCP latency for static web visitors.",
    whatItTakes: "Service Worker background pre-fetching and IndexedDB vector cache persistence.",
    tags: ["WASM", "ONNX Runtime", "Vector Embeddings", "IndexedDB"]
  }
];
