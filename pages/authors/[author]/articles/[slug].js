import { useRouter } from "next/router";

const AuthorArticlePage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const author = router.query.author;
  return (
    <div>
      <h1>Article: {slug}</h1>
      <p>Author: {author}</p>
    </div>
  );
};

export default AuthorArticlePage;