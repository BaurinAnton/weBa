import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link
            rel="preload"
            href="/fonts/NAMU-Pro.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Kharkiv_Tone.ttf"
            as="font"
            crossOrigin=""
          />
          <meta charset="utf-8" />
          {/* <meta name="Author" content="Баурин Антон" /> */}
          <meta name="Copyright" content="weBa" />
          <meta property="og:locale" content="ru_RU" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Создаем сайты, которые продают | weBa" />
          <meta property="og:description"
            content="Разработка различных видов сайтов: landing page, сайт-визитка, многостраничный сайт, интернет-магазин, блог. Продвижение сайтов в Google Adwords и Яндекс Директ." />
          <meta property="og:image" content="img/openGraph/image.jpg" />
          <meta property="og:url" content="https://webastudio.ru" />
          <meta property="og:site_name" content="Создаем сайты, которые продают | weBa" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="Антон" />
          <meta property="twitter:title" content="Создаем сайты, которые продают | weBa" />
          <meta property="twitter:description"
            content="Разработка различных видов сайтов: landing page, сайт-визитка, многостраничный сайт, интернет-магазин, блог. Продвижение сайтов в Google Adwords и Яндекс Директ." />
          <meta property="twitter:image" content="img/openGraph/image.jpg" />
          <meta name="msapplication-TileColor" content="#FFA900" />
          <meta name="msapplication-TileImage" content="img/openGraph/image.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument