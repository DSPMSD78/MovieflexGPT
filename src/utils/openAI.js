import openai from "openai";
import { GPT_API_KEY } from "./constants";

const openAI = new openai({
  apiKey: GPT_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openAI;
