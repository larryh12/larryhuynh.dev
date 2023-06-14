import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { useMeta, useRepo } from '@/lib/fetchGitHub';

export default async function Home() {
  const metaData = useMeta();
  const repoData = useRepo();
  const [meta, repos] = await Promise.all([metaData, repoData]);
  const projs = repos.filter((repo: any) => repo.description !== null);

  return (
    <>
      <Hero name={meta.links.name} />
      <Projects projs={projs} />
    </>
  );
}
