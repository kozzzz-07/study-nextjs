// SSGページ作成

// getStaticPropsからの値を期待する
const SSGPage = (props) => {
  return <h1>{props.message}</h1>;
};


// データ取得処理
export const getStaticProps = async () => {
  return {
    props: {
      message: "Hello world!",
    },
  };
};

export default SSGPage;