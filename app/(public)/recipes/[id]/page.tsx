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
    <div className="min-h-screen bg-slate-50 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <h1 className="mb-6 text-4xl font-bold text-slate-900 dark:text-slate-100">
            {recipe.title}
          </h1>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
              <span className="font-medium text-slate-600 dark:text-slate-400">
                ⏱️ Время приготовления
              </span>

              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {recipe.cookTimeMin} мин.
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
              <span className="font-medium text-slate-600 dark:text-slate-400">
                📅 Опубликовано
              </span>

              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {recipe.createdAt.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100">
            🍽️ Похожие рецепты
          </h2>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-10 text-slate-500">
                  Загрузка похожих рецептов...
                </div>
              }
            >
              <RelatedRecipeCards id={id} />
            </Suspense>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RecipePage;