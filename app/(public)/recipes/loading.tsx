import React from "react";

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
      <div className="flex flex-col items-center rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-10 shadow-2xl">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-300 border-t-blue-600"></div>

        <h1 className="mt-6 text-3xl font-bold text-slate-800 dark:text-white">
          Идёт загрузка данных
        </h1>

        <p className="mt-2 text-center text-slate-500 dark:text-slate-400">
          Пожалуйста, подождите несколько секунд...
        </p>

        <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-slate-200 dark:bg-zinc-700">
          <div className="h-full w-1/3 rounded-full bg-blue-600 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
