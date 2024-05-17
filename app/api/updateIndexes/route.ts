import { loadAllIndexes } from "@/lib/loadIndex";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  try {
    const filenames = await loadAllIndexes();
    return NextResponse.json({ code: 200, data: `success: 已读取文件${JSON.stringify(filenames)}` });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}