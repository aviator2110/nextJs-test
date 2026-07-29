import { recipes } from "@/data/recipes";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json({ recipes });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.cookTimeMin) {
      return NextResponse.json({ error: "Bad input" }, { status: 400 });
    }

    const newRecipe = {
      id: String(Date.now()),
      title: String(body.title),
      cookTimeMin: Number(body.cookTimeMin),
      createdAt: new Date(Date.now()),
    };

    recipes.push(newRecipe);

    return NextResponse.json({ added: newRecipe.id }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
