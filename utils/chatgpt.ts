import { Configuration, OpenAIApi } from "openai";

const configuartion = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuartion);
export default openai;
