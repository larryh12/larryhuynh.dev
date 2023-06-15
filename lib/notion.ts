import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_KEY!,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

export const getPages = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published',
      date: {
        is_not_empty: true,
      },
    },
    sorts: [
      {
        property: 'Published',
        direction: 'descending',
      },
    ],
  });
  return response.results;
};

// export const getPage = async (pageId: string) => {
//   const response = await notion.pages.retrieve({ page_id: pageId });
//   return response;
// };

// export const getBlocks = async (blockId: string) => {
//   const response = await notion.blocks.children.list({
//     block_id: blockId,
//   });
//   return response.results;
// };

// export const getPageId = async (databaseId: string, slug: string) => {
//   const response = await notion.databases.query({
//     database_id: databaseId,
//   });
//   const page = response.results.find((result: any) => {
//     const title = result.properties.Name.title[0].plain_text;
//     const resultSlug = slugify(title, {
//       lower: true,
//       strict: true,
//       trim: true,
//     });
//     return resultSlug === slug;
//   });
//   return page?.id;
// };
