
export type WeeklyPost = {
  id?: string
  slug?: string
  title?: string
  content: string
  metadata: {
    [key: string]: any
  },
}

export type PostsByMonth = {
  [key: string]: WeeklyPost[];
}
