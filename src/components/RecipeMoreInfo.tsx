import { Recipe } from "@/data/recipes";

const RecipeMoreInfo = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="space-y-4 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
      <div className="flex items-center justify-between">
        <span className="font-medium text-slate-600 dark:text-slate-400">
          ⏱️ Время приготовления
        </span>

        <span className="font-semibold text-slate-900 dark:text-slate-100">
          {recipe.cookTimeMin} мин.
        </span>
      </div>

      <div className="h-px bg-slate-300 dark:bg-slate-700" />

      <div className="flex items-center justify-between">
        <span className="font-medium text-slate-600 dark:text-slate-400">
          📅 Опубликовано
        </span>

        <span className="text-right text-slate-900 dark:text-slate-100">
          {recipe.createdAt.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default RecipeMoreInfo;