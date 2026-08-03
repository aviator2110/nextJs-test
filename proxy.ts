import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const authHeader = request.headers.get('authorization')
    
    if (authHeader !== 'Bearer secret-token' && (request.method === "DELETE" || request.method === "PUT")) {
        return NextResponse.json({ error: 'Не авторизован' }, { status: 401 })
    }
    return NextResponse.next()
}