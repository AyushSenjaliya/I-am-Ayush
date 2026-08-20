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
    id: "dental-clinic-ai-crm",
    title: "Dental Clinic Management CRM + AI Diagnostic & Voice Intelligence",
    status: "R&D Prototype — Active",
    statusType: "gold",
    problem: "Dental clinics struggle with fragmented patient consultations, manual diagnostic report & X-ray analysis, and time-consuming custom disease treatment plan drafting.",
    approach: "Next-gen Dental CRM combining patient & appointment management with an AI/voice layer: Gemini Vision multimodal analysis for X-rays & diagnostic reports, AI disease treatment plan generation, Speech-to-Text (STT) consultation transcription, Text-to-Speech (TTS) voice interaction, and automated meeting notes with action items.",
    whyShelved: "Active R&D Concept — Evaluated AI vision models (Gemini Flash Vision) for dental radiograph evaluation alongside Whisper streaming latency for real-time consultation transcription.",
    whatItTakes: "HIPAA-compliant data store, fine-tuned medical vision SLM for dental radiograph evaluation, and sub-second audio streaming WebSockets.",
    tags: ["Dental CRM", "AI Vision X-Ray", "Speech-to-Text (STT)", "Text-to-Speech (TTS)", "Treatment Plan AI"]
  },
  {
    id: "voice-intelligence-platform",
    title: "Voice Intelligence Platform & Real-Time Audio Engine",
    status: "R&D Concept — Active",
    statusType: "gold",
    problem: "Building separate custom voice pipelines (STT, TTS, meeting notes, translation) for individual apps causes duplicated API logic, streaming latency, and high cloud costs.",
    approach: "Unified multi-tenant Voice Intelligence platform providing Text-to-Speech (TTS), Speech-to-Text (STT), real-time consultation transcription, speaker diarization, automated meeting summaries, action-item extraction, and real-time multilingual translation.",
    whyShelved: "CTO Architecture Concept — Evaluated real-time WebSockets streaming latency, token unit economics, API fallback cascades, and speaker diarization performance.",
    whatItTakes: "Deploying quantized local Whisper / VAD models on GPU edge nodes (Modal/RunPod) with sub-200ms WebSockets streaming pipeline.",
    tags: ["Voice Intelligence", "Speech-to-Text", "Text-to-Speech", "Audio Streaming", "Speaker Diarization"]
  },
  {
    id: "artificial-jewelry-manufacturing-crm",
    title: "Imitation & Artificial Jewelry Manufacturing ERP/CRM",
    status: "Domain Research Phase",
    statusType: "coral",
    problem: "Surat's imitation jewelry manufacturers rely on paper logs or generic software that fails to model raw material tracking, multi-stage job work, and design inventory.",
    approach: "Specialized ERP/CRM system engineered specifically for the imitation jewelry manufacturing lifecycle: customer history, order tracking, job work stage monitoring (casting, plating, stone setting), raw material stock ledgers, and business profit reporting.",
    whyShelved: "Domain Research Completed — Deep ecosystem study conducted across Surat's imitation jewelry manufacturing units to map multi-stage job-work lifecycles.",
    whatItTakes: "Building an offline-first tablet interface for workshop floor job-work tracking and multi-tier raw material Bill of Materials (BOM).",
    tags: ["Jewelry Manufacturing ERP", "Surat Ecosystem", "Job-Work Tracking", "Raw Material BOM", "Production CRM"]
  },
  {
    id: "ai-textile-jewelry-design-assistant",
    title: "AI Jewelry & Textile Design Assistant (Wilcom & CAD Connector)",
    status: "Product Concept — Active",
    statusType: "gold",
    problem: "Jewelry and textile/embroidery designers waste hours manually vectorizing design concepts in Wilcom or CAD software from client descriptions or paper sketches.",
    approach: "AI generative design assistant allowing designers to chat with an AI prompt interface to describe concept patterns; a high-capability generative model creates design concepts and exports vector patterns directly into existing software (Wilcom, CAD) with historical design tracking.",
    whyShelved: "Product Concept Phase — Explored pairing high-capability image/vector generative models with vectorization pipelines and Wilcom/CAD file export plugins.",
    whatItTakes: "Fine-tuning a diffusion model on embroidery stitch & jewelry vector datasets and developing a Wilcom/CAD file export plugin.",
    tags: ["AI Generative Design", "Textile & Embroidery", "Wilcom Integration", "Jewelry CAD", "Generative AI"]
  },
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
