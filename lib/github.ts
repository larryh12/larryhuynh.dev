export const getMeta = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/larryh12/larryh12/main/public/meta.json',
    { next: { revalidate: 60 } }
  );
  return res.json();
};

export const getRepos = async () => {
  const res = await fetch(
    'https://api.github.com/users/larryh12/repos?sort=updated&direction=desc',
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
};
