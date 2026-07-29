import { Recipe } from "@/data/recipes";
import RecipeCard from "@/src/components/RecipeCard";
import RecipeMoreInfo from "@/src/components/RecipeMoreInfo";
import { delay } from "@/src/utils/delay";
import Link from "next/link";

const RecipecPage = async () => {
  await delay(1000);

  const base_url = process.env.BASE_URL;
  const response = await fetch(`${base_url}/api/recipes`);
  const { recipes }: { recipes: Recipe[] } = await response.json();

  return (
    <div className="flex-col text-center bg-my-light dark:bg-my-dark">
      <h1 className="p-4 text-black dark:text-white text-4xl">Recipes:</h1>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} title={recipe.title}>
          <RecipeMoreInfo recipe={recipe} />
        </RecipeCard>
      ))}
      <Link href="/recipes/new">Create recipe</Link>
    </div>
  );
};

export default RecipecPage;
