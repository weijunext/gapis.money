export interface SearchResult {
  id: string;
  doc: {
    title: string;
    content: string;
    display: string;
  };
}