import { recipes } from "@/data/recipes";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    cooked: recipes.length,
    total: recipes.length,
  });
}