"use server";
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey:process.env.OPEN_AI_KEY
})

export async function getCompletion(messageHistory:{
  role:'user' | 'assistant',
    content:string
}[]){
  try{const response = await openai.chat.completions.create({
    model:'gpt-3.5-turbo',
    messages:messageHistory
  })
  const messages =[
    ...messageHistory,
    response.choices[0].message as unknown as {
      role:'user' | 'assistant',
    content:string
    }
  ];
  return{
    messages
  }}catch (error:any) {
    console.error("Error fetching completion:", error);
    if (error.status === 429) {
      // Handle quota exceeded error
      throw new Error("You have exceeded your API quota. Please try again later.");
    }
    throw new Error("An error occurred while fetching completion.");
  }
}