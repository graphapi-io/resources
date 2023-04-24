import { Handler } from "aws-lambda";
import { getMessageMood } from "./open-ai";
import { IMood, moodCategories } from "./constants";

interface IPromptInput {
  prompt: string;
  mood?: IMood;
  invalidMood?: string;
}

const extractMood = (result?: string) => {
  if (!result) {
    throw new Error("No result");
  }
  const moodResults = moodCategories
    .map((mood) => ({
      mood,
      isIncluded: result.includes(mood),
    }))
    .filter(({ isIncluded }) => isIncluded);

  if (moodResults.length === 1) {
    return moodResults[0].mood;
  }
  if (moodResults.length === 0) {
    throw new Error("No mood found in the message" + result);
  }
  throw new Error("Too many moods found in the message" + result);
};

const getErrorMessage = (err: unknown) => {
  if (err instanceof Error) {
    return err.message;
  }
  if (typeof err === "string") {
    return err;
  }
  return "";
};

export const handler: Handler = async (
  event,
  context
): Promise<Partial<IPromptInput>> => {
  const input: IPromptInput = event.arguments.input;

  const textInput = input.prompt;

  if (!textInput) {
    return {};
  }

  try {
    const result = await getMessageMood(textInput);
    const mood = extractMood(result);

    return {
      mood,
    };
  } catch (error) {
    return {
      invalidMood: getErrorMessage(error),
    };
  }
};
