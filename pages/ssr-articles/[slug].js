const SSRArticlePage = (props) => {
// getServerSideProps で返した値を受け取る

  return (
    <div>
      <h1>{props.article.title}</h1>
      <p>{props.article.body}</p>
    </div>
  );
};

// getServerSidePropsを使用することでSSRとなる
export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const data = await import("../../data/articles.json");
  const article = data.articles.find((article) => {
    return article.slug === slug;
  });

  // {notFound: true} を返すとNot Foundのエラーページを表示する
  if (!article) {
    return {
      notFound: true,
    };
  }

  // ページコンポーネントに値を渡す
  return {
    props: { article },
  };
};

export default SSRArticlePage;