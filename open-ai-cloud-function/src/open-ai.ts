import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "env";
import { moodCategories } from "./constants";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getMessageMood = async (textData: string) => {
  const response = await openai.createChatCompletion({
    // The gpt-3.5-turbo is cheaper than the other GPT-3.5 models while also being more capable
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: [
          "Pretend to be an API that can assign a mood to a text",
          `The result should be a string with the mood with one of the values: ${moodCategories.join(
            ", "
          )}`,
        ].join("\n"),
      },
      {
        role: "user",
        content: textData,
      },
    ],
  });

  return response.data.choices[0].message?.content;
};
