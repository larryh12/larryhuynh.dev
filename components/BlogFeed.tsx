import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogFeed = (props: any) => {
  const pages = props.pageList;

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      {pages.map((page: any) => (
        <Link
          key={page.id}
          href={page.public_url}
          aria-label={page.properties.Name.title[0].plain_text}
          className="not-prose flex flex-col gap-4 rounded-2xl no-underline transition hover:bg-base-100"
        >
          <figure className="aspect-[2/1] overflow-hidden rounded-2xl drop-shadow-lg">
            <Image
              src={
                page.cover.type === 'external'
                  ? page.cover.external.url
                  : page.cover.type === 'file' && page.cover.file.url
              }
              alt={page.properties.Name.title[0].plain_text}
              width={640}
              height={320}
            />
          </figure>
          <div className="prose flex flex-col gap-4 p-4 pb-10">
            <h2 className="text-2xl font-bold text-neutral-content">
              {page.properties.Name.title[0].plain_text}
            </h2>
            <p className="flex-1 font-normal text-neutral-content/80">
              {page.properties.Description.rich_text[0].plain_text}
            </p>
            <p className="text-sm font-semibold text-neutral-content underline underline-offset-2">
              {page.properties.Published.date.start}
            </p>
            <ul className="flex flex-wrap gap-2">
              {page.properties.Tags.multi_select.map((tag: any) => (
                <li
                  key={tag.name}
                  className="w-fit rounded-full bg-base-100 px-2 py-0.5 text-sm font-light text-base-content"
                >
                  {tag.name}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogFeed;
