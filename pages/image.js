import Image from "next/image";


const ImagePage = () => {
  return (
    <>
      <h1>image example</h1>
      <Image
        src="/waifu.png"
        alt="My Waifu"
        width={300}
        height={300}
      />
    </>
  );
};

export default ImagePage;
