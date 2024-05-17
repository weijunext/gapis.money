import { loadAllIndexes } from '@/lib/loadIndex';
import { doSearch } from '@/lib/search';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {

  // await loadAllIndexes();
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  try {
    const results = await doSearch(query);

    // console.log(query, results);
    if (results.length === 0) {
      await loadAllIndexes();
    }

    return NextResponse.json({ results });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
