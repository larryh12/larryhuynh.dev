import Blog from '@/components/Blog';
import Hero from '@/components/Hero';
import { getMeta } from '@/lib/github';
import { getPages } from '@/lib/notion';

export const revalidate = 60;

export default async function Home() {
  const metaData = getMeta();
  const blogData = getPages();
  const [meta, pages] = await Promise.all([metaData, blogData]);

  return (
    <>
      <Hero name={meta.links.name} />
      <Blog pages={pages} />
    </>
  );
}
