import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center text-center">
        <h1 className="text-8xl font-bold text-red-500">
          404
        </h1>
  
        <h2 className="mt-4 text-3xl font-bold">
          Рецепт не найдена
        </h2>
  
        <p className="mt-3 max-w-md text-zinc-500">
          Возможно рецепт была удалена или ссылка введена неверно.
        </p>
  
        <Link
          href="/recipes"
          className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          ← Вернуться на главную
        </Link>
      </div>
    );
  }