import "../styles/global.css";
import "../styles/global.scss";

// pages/_app.js カスタムApp
// ページを開いても実行される

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;