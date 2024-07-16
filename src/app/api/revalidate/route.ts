import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import Prismic from '@prismicio/client';

export async function POST() {
  const client = Prismic.client('https://alluremd.cdn.prismic.io/api/v2');
  const response = await client.getByUID('page', 'home');

  if (!response) {
    return NextResponse.json({ error: 'Document not found' }, { status: 404 });
  }

  revalidateTag('prismic');
  return NextResponse.json({ revalidated: true, now: Date.now(), data: response });
}
