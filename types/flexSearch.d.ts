import { SearchResult } from "@/types/search";

declare module "flexsearch" {
  interface DocumentOptions {
    pageId?: string; // 添加自定义属性
  }
  interface SimpleDocumentSearchResultSetUnit {
    field: string
    result: SearchResult[]
  }
}
