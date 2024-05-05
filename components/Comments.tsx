"use client";

import Giscus, { InputPosition, Mapping, Repo } from "@giscus/react";

export default function Comments() {
  return (
    <>
      {process.env.NEXT_PUBLIC_REPOID ? (
        <Giscus
          id="comments"
          repo={process.env.NEXT_PUBLIC_REPO as Repo}
          repoId={process.env.NEXT_PUBLIC_REPOID}
          category={process.env.NEXT_PUBLIC_CATEGORY}
          categoryId={process.env.NEXT_PUBLIC_CATEGORY_ID}
          mapping={process.env.NEXT_PUBLIC_MAPPING as Mapping}
          term={process.env.NEXT_PUBLIC_TERM}
          inputPosition={
            process.env.NEXT_PUBLIC_INPUT_POSITION as InputPosition
          }
          theme={process.env.NEXT_PUBLIC_THEME}
          lang={process.env.NEXT_PUBLIC_LANG}
          // anonymous={process.env.NEXT_PUBLIC_CROSSORIGIN}
          loading="lazy"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
        />
      ) : (
        <></>
      )}
    </>
  );
}
