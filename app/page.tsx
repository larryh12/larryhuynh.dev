import About from '@/components/About';
import Hero from '@/components/Hero';

const useMeta = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/larryh12/larryh12/main/public/meta.json',
    { next: { revalidate: 60 } }
  );
  return res.json();
};

const useRepo = async () => {
  const res = await fetch('https://api.github.com/users/larryh12/repos', {
    next: { revalidate: 60 },
  });
  return res.json();
};

export default async function Home() {
  const metaData = useMeta();
  const repoData = useRepo();
  const [meta, repo] = await Promise.all([metaData, repoData]);

  return (
    <div className="w-full px-4">
      <Hero name={meta.links.name} />
      <About
        hello={meta.hello}
        qual={meta.qual}
        cert={meta.cert}
        tech={meta.tech}
      />
    </div>
  );
}
