import { useRouter } from "next/router";

const ArticlePage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  return <h1>Article: {slug}</h1>;
};

export default ArticlePage;