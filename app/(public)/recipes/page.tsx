import { Recipe } from "@/data/recipes";
import RecipeCard from "@/src/components/RecipeCard";
import RecipeMoreInfo from "@/src/components/RecipeMoreInfo";
import { delay } from "@/src/utils/delay";
import Link from "next/link";

const RecipecPage = async () => {
  await delay(1000);

  const base_url = process.env.BASE_URL;
  const response = await fetch(`${base_url}/api/recipes`, {
    cache: "no-store",
  });
  const { recipes }: { recipes: Recipe[] } = await response.json();
  const statsResponse = await fetch(`${base_url}/api/recipes/stats`, {
    next: {
      revalidate: 60,
    },
  });

  const stats = await statsResponse.json();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Recipes
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Discover, create and manage your favourite recipes.
            </p>
          </div>

          <Link
            href="/recipes/new"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/40 active:scale-95"
          >
            + New Recipe
          </Link>
          <p className="text-black dark:text-white">
            Статистика: приготовлено {stats.cooked} из {stats.total}
          </p>
        </div>

        {recipes.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} title={recipe.title}>
                <RecipeMoreInfo recipe={recipe} />
              </RecipeCard>
            ))}
          </div>
        ) : (
          <div className="flex h-72 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xl font-medium text-slate-700 dark:text-slate-300">
              No recipes yet 🍳
            </p>

            <p className="mt-2 text-slate-500 dark:text-slate-500">
              Create your first recipe to get started.
            </p>

            <Link
              href="/recipes/new"
              className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-500"
            >
              Create Recipe
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipecPage;
