import { sectionIndex } from "@/lib/loadIndex";
import { SearchResult } from "@/types/search";
import { SimpleDocumentSearchResultSetUnit } from "flexsearch";

/**
 * 执行搜索
 * Perform the search
 * @param {string} value - 搜索关键词 The search keyword
 * @returns {Promise<Array>} 搜索结果的 Promise 对象 A Promise object containing the search results
 */
export const doSearch = async (value: string): Promise<SearchResult[]> => {
  if (!value) {
    return [];
  }

  // 使用 sectionIndex 执行搜索,并返回结果
  // Use sectionIndex to perform the search and return the results
  const results: SimpleDocumentSearchResultSetUnit[] = await sectionIndex.search(value, { enrich: true, suggest: true });

  // 转换搜索结果
  // Transform the search results
  const transformedResults: SearchResult[] = transformResults(results);

  return transformedResults;
}


/**
 * 转换搜索结果
 * Transform the search results
 * @param data 搜索结果数据 The search result data
 * @returns 转换后的搜索结果 The transformed search results
 */
export const transformResults = (data: SimpleDocumentSearchResultSetUnit[]) => {
  if (!data) {
    return [];
  }
  // 将所有 result 数组合并成一个数组
  // Merge all result arrays into a single array
  const mergedResults: any = data.flatMap((item) => item.result);
  const sortedResults = mergedResults.sort((a: SearchResult, b: SearchResult) => a.id.localeCompare(b.id));

  return sortedResults;
};

/**
 * 移除 Markdown 格式
 * Strip Markdown formatting
 * @param {string} text - 要处理的文本内容 The text content to be processed
 * @returns {string} 移除 Markdown 格式后的文本 The text with Markdown formatting removed
 */
export const stripMarkdown = (text: string) => {
  return text
    .replace(/!\[.*?\]\(.*?\)/g, "") // 移除图片 Remove images
    .replace(/\[.*?\]\(.*?\)/g, "") // 移除链接 Remove links
    .replace(/`{1,3}.*?`{1,3}/g, "") // 移除代码 Remove code blocks
    .replace(/#{1,6} /g, "") // 移除标题标记 Remove heading markers
    .replace(/[*_~]+.*?[*_~]+/g, "") // 移除强调标记 Remove emphasis markers
    .replace(/>\s.*/g, "") // 移除引用 Remove blockquotes
    .replace(/-{3,}/g, "") // 移除分隔线 Remove horizontal rules
    .replace(/\n+/g, " "); // 替换换行符为空格 Replace newline characters with spaces
}