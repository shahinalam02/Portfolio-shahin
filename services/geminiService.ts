import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the digital AI assistant for Shahin Alam, a Creative Designer specializing in UI/UX, Branding, and Graphic Design.
Your goal is to answer questions about Shahin's skills, background, and availability.

Key Information about Shahin:
- Role: Senior UI/UX Designer & Brand Strategist.
- Experience: 4+ years (Since 2020) designing for web and mobile.
- Style: Minimalist, bold, user-centric.
- Services: Web Design, Mobile Apps, Brand Identity, Logo Design.
- Personality: Professional, creative, friendly, and detail-oriented.
- Location: Vatara, Notun bazar, Dhaka, Bangladesh.
- Contact: shahinalam982.as@gmail.com | +880 1518 479218 / +880 1682 491761

Keep your responses concise (under 50 words unless asked for detail), professional, and slightly witty.
If asked to do something outside of this scope (like math or coding unrelated to design), politely decline and steer back to Shahin's work.
`;

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });

    // Use gemini-3-flash-preview for fast, interactive chat
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm having a bit of trouble thinking right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};