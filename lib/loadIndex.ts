import { stripMarkdown } from "@/lib/search";
import { getWeeklyPosts } from "@/lib/weekly";
import FlexSearch from 'flexsearch';
import fs from 'fs';
import path from 'path';

const JSON_PATH = path.join(process.cwd(), "public/json/");

// 创建一个 FlexSearch 文档索引
// Create a FlexSearch document index
// export const pageIndex = new FlexSearch.Document({
//   tokenize: "full",
//   cache: 100,
//   document: {
//     id: "id",
//     index: "content",
//     store: ["title"],
//   },
//   context: {
//     resolution: 9,
//     depth: 2,
//     bidirectional: true,
//   },
// });
export const sectionIndex: any = new FlexSearch.Document({
  cache: 100,
  tokenize: "full",
  document: {
    id: "id",
    index: "content",
    pageId: "pageId",
    store: ["title", "content", "display"],
  },
  context: {
    resolution: 9,
    depth: 2,
    bidirectional: true,
  },
});

let pageId = 0;
/**
 * 创建索引并将其导出为 JSON 文件
 * Create the index and export it as JSON files
 */
export const createIndex = async () => {
  const { posts } = await getWeeklyPosts()
  const documents = posts

  let pageContent = "";
  ++pageId;

  for (let i = 0; i < documents.length; i++) {
    const doc = documents[i];

    const slug = doc.slug;
    const title = doc.title;
    const content = doc.content;
    const paragraphs = doc.content.split("\n");

    // 添加标题
    // Add the title
    sectionIndex.add({
      id: slug,
      title,
      pageId: `page_${pageId}`,
      content: title,
      ...(paragraphs[0] && { display: paragraphs[0] }), // content 是 title,所以节选第一段 content is the title, so extract the first paragraph
    });

    // 添加文档内容
    // Add the document content
    for (let j = 0; j < paragraphs.length; j++) {
      if (paragraphs[j]) {
        sectionIndex.add({
          id: `${slug}_${j}`,
          title,
          pageId: `page_${pageId}`,
          content: stripMarkdown(paragraphs[j]),
        });
      }
    }

    // 添加页面本身
    // Add the page itself
    pageContent += `${title} ${content}`;

    // pageIndex.add({
    //   id: pageId,
    //   title: doc.title,
    //   content: stripMarkdown(pageContent),
    // });
  }

  await fs.promises.mkdir(JSON_PATH, { recursive: true });
  sectionIndex.export(async (key: string, data: string) => {
    await fs.promises.writeFile(`${JSON_PATH}${key}.json`, data || "");
  });
};

// read index
export async function loadAllIndexes() {
  const filenames = fs.readdirSync(JSON_PATH);
  filenames.forEach(file => {
    if (file.endsWith('.json')) {
      const filePath = path.join(JSON_PATH, file);
      const data = fs.readFileSync(filePath, 'utf8');
      // const parsedData = JSON.parse(data);

      const key = file.slice(0, -5);
      sectionIndex.import(key, data);
    }
  });
  return filenames
}
