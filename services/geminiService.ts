
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

export const analyzeLandingPage = async (url: string, context: string): Promise<AnalysisResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `
      Realize uma análise profunda e técnica da estrutura da seguinte landing page: ${url}. 
      Contexto do Produto: ${context}.
      
      Sua análise DEVE focar obrigatoriamente em:
      1. Hierarquia Visual: Avalie o uso de espaços em branco, contraste e como o olhar é guiado.
      2. Chamadas para Ação (CTAs): Verifique se são claras, persuasivas e bem posicionadas no fluxo.
      3. Fluxo do Usuário (User Flow): A sequência lógica de argumentos faz sentido para a conversão?
      4. Clareza da Mensagem: A proposta de valor é compreendida em menos de 5 segundos?
      
      Use terminologia de marketing de alto nível (branding de luxo, triggers psicológicos, arquitetura de conversão). 
      Seja crítico e aponte falhas de fricção no funil.
    `,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          score: { type: Type.NUMBER, description: "Escala de 1 a 100 de eficiência de conversão" },
          summary: { type: Type.STRING, description: "Resumo executivo da análise" },
          sections: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING, description: "Ex: Hero Section, Prova Social, Oferta" },
                status: { type: Type.STRING, enum: ["Good", "Needs Work", "Excellent"] },
                content: { type: Type.STRING, description: "Análise detalhada sobre hierarquia, clareza ou fluxo nesta seção" },
                psychologicalTrigger: { type: Type.STRING, description: "O gatilho mental dominante usado aqui" }
              },
              required: ["name", "status", "content", "psychologicalTrigger"]
            }
          },
          improvements: {
            type: Type.ARRAY,
            items: { type: Type.STRING, description: "Lista de melhorias práticas e imediatas" }
          }
        },
        required: ["title", "score", "sections", "summary", "improvements"]
      }
    }
  });

  if (!response.text) {
    throw new Error("Não foi possível obter resposta do motor de análise.");
  }

  return JSON.parse(response.text.trim());
};
