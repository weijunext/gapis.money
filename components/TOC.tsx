"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const TOC = () => {
  const [headings, setHeadings] = useState<
    { text: string; id: string; level: string }[]
  >([]);

  useEffect(() => {
    const articleElement = document.getElementById("article");
    if (!articleElement) return;

    const extractedHeadings = Array.from(
      articleElement.querySelectorAll("h2, h3")
    ).map((heading) => ({
      text: heading.textContent || "",
      id: heading.id || "",
      level: heading.nodeName, // 'H2' or 'H3'
    }));

    setHeadings(extractedHeadings);
  }, []);

  return (
    <>
      <ul className="sticky top-0 right-0">
        {headings.map(({ text, id, level }) => (
          <li key={id} className={`my-2 ${level === "H3" ? "ml-4" : ""}`}>
            <Link href={`#${id}`} className="link-hover">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TOC;
