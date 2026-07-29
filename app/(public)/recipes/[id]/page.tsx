import { Recipe } from "@/data/recipes";
import RelatedRecipeCards from "@/src/components/RelatedRecipeCards";
import { delay } from "@/src/utils/delay";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  await delay(1000);
  const { id } = await params;
  const base_url = process.env.BASE_URL;
  const response = await fetch(`${base_url}/api/recipes`);
  const { recipes }: { recipes: Recipe[] } = await response.json();
  const recipe = recipes.find((i) => i.id === id);

  if (!recipe) {
    return notFound();
  }
  return (
    <div>
      <div>
        <h1>{recipe.title}</h1>
        <p>Время приготовления: {recipe.cookTimeMin}</p>
        <p>Опубликовано: {recipe.createdAt.toLocaleString()}</p>
      </div>
      <div>
        <h2>Похожие задачи:</h2>
        <Suspense fallback={<div>Загрузка похожих рецептов</div>}>
          <RelatedRecipeCards id={id} />
        </Suspense>
      </div>
    </div>
  );
}

export default RecipePage;
