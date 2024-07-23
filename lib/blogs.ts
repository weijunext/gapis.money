import { WeeklyPost } from '@/types/weekly';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export async function getBlogs(): Promise<{ posts: WeeklyPost[] }> {

  const postsDirectory = path.join(process.cwd(), 'blogs')
  let filenames = await fs.promises.readdir(postsDirectory)
  filenames = filenames
    .filter(filename => filename !== '.DS_Store')
    .reverse()

  let posts = await Promise.all(
    filenames.map(async (filename) => {
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = await fs.promises.readFile(fullPath, 'utf8')

      const { data, content } = matter(fileContents)
      const month = dayjs(data.date).format('YYYY-MM-DD').slice(0, 7);

      const visible = !(data.visible === 'draft' || data.visible === 'invisible');
      const pin = !!(data.pin && data.pin === 'pin');

      if (visible) {
        return {
          id: month,
          metadata: data, // { slug/url title date }
          title: data.title,
          slug: data.slug,
          visible,
          pin,
          content,
        }
      } else {
        return null
      }
    })
  )

  const postsNoNull = posts.filter((i) => !!i) as WeeklyPost[]

  return {
    posts: postsNoNull
  }
}
