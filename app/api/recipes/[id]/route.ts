import { deleteRecipe, udpateRecipe } from "@/data/recipes";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  await udpateRecipe(id, body.title, body.cookTimeMin);
  return NextResponse.json({ edited: id });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    await deleteRecipe(id)

    return NextResponse.json({ deleted: id })
}