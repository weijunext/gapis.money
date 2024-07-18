
export type WeeklyPost = {
  id?: string
  slug?: string
  title?: string
  content: string
  visible?: boolean
  pin?: boolean
  metadata: {
    [key: string]: any
  },
}

export type PostsByMonth = {
  [key: string]: WeeklyPost[];
}
