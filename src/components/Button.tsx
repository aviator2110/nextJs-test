import { ReactNode } from "react";

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-500 active:scale-95"
    >
      {children}
    </button>
  );
}

export default Button;
