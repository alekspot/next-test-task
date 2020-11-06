import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/static/fonts/stylesheet.css"></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,300&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}