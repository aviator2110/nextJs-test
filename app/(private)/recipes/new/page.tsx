'use client';

function RecipeAddPage() {
  function onHandle() {}

  return (
    <div className="min-h-screen bg-slate-50 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            🍳 Create Recipe
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Fill in the information below to create a new recipe.
          </p>

          <form action={onHandle} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Recipe title
              </label>

              <input
                id="title"
                type="text"
                placeholder="e.g. Carbonara Pasta"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              />
            </div>

            <div>
              <label
                htmlFor="cookTime"
                className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
              >
                Cooking time (minutes)
              </label>

              <input
                id="cookTime"
                type="number"
                placeholder="30"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              />
            </div>

            <div className="flex flex-col-reverse gap-4 pt-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:shadow-xl active:scale-95"
              >
                Create Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecipeAddPage;