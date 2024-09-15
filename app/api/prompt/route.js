import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({
      creator: { $ne: null },
    }).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
        "Surrogate-Control": "no-store",
      },
    });  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
