import NextHead from "next/head";

const RootPage = () => {
  return (
    <>
      {/* page固有のmeta情報となる */}
      <NextHead>
        <title>My Next.js Example</title>
        <meta name="description" content="hoge" />
      </NextHead>
      <nav>
        <ul>
          <li>
            <a href="#">Hoge</a>
          </li>
          <li>
            <a href="#">Foge</a>
          </li>
        </ul>
      </nav>

      <div className="h-screen flex justify-center items-center">
        <div className="py-4 px-6 text-center bg-green-600 rounded-md">
          <h1 className="text-4xl font-bold text-white">Hello Tailwind!</h1>
        </div>
      </div>
    </>
  );
};

export default RootPage;
