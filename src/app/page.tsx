import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  let page;

  try {
    page = await client.getByUID("page", "home");
    if (!page) {
      throw new Error("Page document not found");
    }
  } catch (error) {
    console.error("Error fetching page metadata:", error);
    notFound();
  }

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image?.url ?? "" }],
    },
  };
}

export default async function Page() {
  const client = createClient();
  let page;

  try {
    page = await client.getByUID("page", "home");
    if (!page) {
      throw new Error("Page document not found");
    }
  } catch (error) {
    console.error("Error fetching page:", error);
    notFound();
  }

  return <SliceZone slices={page.data.slices} components={components} />;
}
