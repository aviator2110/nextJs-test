'use client';

import { ReactNode, useState } from 'react';
import Button from './Button';

const RecipeCard = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
        {title}
      </h2>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "mb-5 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>

      <Button
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "▲ Скрыть информацию" : "▼ Подробнее"}
      </Button>
    </div>
  );
};

export default RecipeCard;