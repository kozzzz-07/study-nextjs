// pages/_document.js カスタムDocument
// pagesディレクトリに置いたファイルからは参照できない<html>や<body>要素の編集が可能

import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body  className="bg-yellow-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;