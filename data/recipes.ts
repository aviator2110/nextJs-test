import { NextResponse } from "next/server";

export type Recipe = {
    id: string,
    title: string,
    cookTimeMin: number,
    createdAt: Date
}

export let recipes = [
    {
      id: "1",
      title: "Спагетти Карбонара",
      cookTimeMin: 25,
      createdAt: new Date("2026-07-20T12:00:00Z"),
    },
    {
      id: "2",
      title: "Куриный суп",
      cookTimeMin: 45,
      createdAt: new Date("2026-07-21T09:30:00Z"),
    },
    {
      id: "3",
      title: "Греческий салат",
      cookTimeMin: 15,
      createdAt: new Date("2026-07-22T16:10:00Z"),
    },
    {
      id: "4",
      title: "Плов",
      cookTimeMin: 90,
      createdAt: new Date("2026-07-23T14:45:00Z"),
    },
    {
      id: "5",
      title: "Блины",
      cookTimeMin: 30,
      createdAt: new Date("2026-07-24T08:20:00Z"),
    },
  ];

  export async function deleteRecipe(id: string){
      const recipe = recipes.find((i) => i.id === id);
  
      if (!recipe) {
          return NextResponse.json({ error: "Рецепт не найден" }, { status: 404 });
        }
  
      recipes = recipes.filter(i => i.id !== id)
  }

  export async function udpateRecipe(id: string, title: string, cookTimeMin: number) {
    const recipe = recipes.find((i) => i.id === id);
  
    if (!recipe) {
      return NextResponse.json({ error: "Рецепт не найден" }, { status: 404 });
    }
  
    recipe.title = title;
    recipe.cookTimeMin = cookTimeMin;
  }