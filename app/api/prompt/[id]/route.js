import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};

//PATCH
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDB();

    const exsistingPrompt = await Prompt.findById(params.id);
    if (!prompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    exsistingPrompt.prompt = prompt;
    exsistingPrompt.tag = tag;
    await exsistingPrompt.save();

    return new Response(JSON.stringify(exsistingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompts", { status: 500 });
  }
};

//DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);
    await Prompt.save();
    return new Response("Prompt deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete prompts", { status: 500 });
  }
};
