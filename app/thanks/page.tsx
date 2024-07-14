import MDXComponents from "@/components/mdx/MDXComponents";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

export async function generateMetadata() {
  return {
    ...siteConfig,
    title: `赞助 | ${siteConfig.name}`,
  };
}

export default async function Page() {
  return (
    <div className="flex flex-row w-full pt-12">
      <aside className="hidden md:block md:w-1/5 pl-6 max-h-[90vh] h-full overflow-auto sticky top-6 left-0"></aside>
      <div className="w-full md:w-3/5 px-2 md:px-12">
        <article id={`article`}>
          <h1>Thanks!⛵️</h1>
          <MDXRemote
            source={content}
            components={MDXComponents}
            options={options}
          />
        </article>
        <Separator className="my-12 bg-gray-600" />
      </div>
      <div className="hidden md:flex flex-col justify-start lg:w-1/5 pr-6"></div>
    </div>
  );
}

const content = `
感谢所有帮助过我和赞助过我的朋友！

你可以通过以下方式赞助我：

<a href="https://www.buymeacoffee.com/weijunext" target="_blank">
  <img src="/buymeacoffee.png" alt="Buy Me A Coffee" style={{ height: '50px !important' }} />
</a>


<a href="https://afdian.net/a/weijunext" target="_blank">
  <img src="/afd.png" alt="在爱发电支持我" style={{ height: '66px !important' }} className="pt-4" />
</a>

<img src="/zs.jpeg" alt="赞赏作者" style={{ width: '300px' }} className="py-4" />

---

## 赞助列表

所有赞助过的朋友，如果有作品需要在周刊宣传，欢迎联系我补充信息

- Airyland，作品：[批量查询域名是否注册](https://query.domains/)

- Erving

- 智*橙

`;
