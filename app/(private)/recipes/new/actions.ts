"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { delay } from "@/src/utils/delay";

const schema = z.object({
  title: z.string().trim().min(1, "Введите название рецепта"),
});

export type ActionState = {
  error?: string;
  success?: string;
};

export async function addRecipe(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await delay(1000);

  const result = schema.safeParse({
    title: formData.get("title"),
  });

  if (!result.success) {
    const flatenned = z.flattenError(result.error);
    return {
      error: flatenned.fieldErrors.title?.[0],
    };
  }

  // ...:: push in array ::...

  revalidatePath("/recipes");

  return {
    success: "Рецепт успешно создан",
  };
}
