import PageFeed from '@/components/PageFeed';
import React from 'react';

const Blog = (props: any) => {
  const pages = props.pages;
  const featuredPages = pages.filter(
    (page: any) => page.public_url !== null && page.properties.Featured.checkbox
  );
  const latestPages = pages.filter(
    (page: any) =>
      page.public_url !== null && !page.properties.Featured.checkbox
  );

  return (
    <section
      id="Blog"
      className="flex min-h-screen w-full items-center justify-center bg-neutral px-4 py-20 sm:px-8"
    >
      <div className="prose max-w-screen-lg">
        <h1 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Posts
        </h1>
        <PageFeed pageList={featuredPages} />
      </div>
    </section>
  );
};

export default Blog;
