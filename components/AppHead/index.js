import NextHead from "next/head";

export const AppHead = ({ title, description, slug }) => {
  return (
    <NextHead>
    {/* 動的にmetaデータを付与する */}
    <title>{`${title}` || "Default"}</title>
    <meta
      property="og:url"
      content={`http://localhost:3000/articles/${slug}`}
    />
    <meta property="og:title" content={`${title}` || "Default"} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="http://localhost:3000/ogp.png" />
  </NextHead>
  );
};