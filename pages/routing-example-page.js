import Link from "next/link";
import { useRouter } from "next/router";

const RoutingExamplePage = () => {
  const router = useRouter();
  const handleClick = (event) => {
    router.push("/about");
    // router.prefetch('/hoge'); // 先読み無効
  };

  return (
    <>
      <button onClick={handleClick}>About</button>
      <Link href="/about">About</Link>
      {/* 先読み無効 */}
      <Link href="/articles/page" prefetch={false}>/articles/page</Link>
    </>
  );
};

export default RoutingExamplePage;
