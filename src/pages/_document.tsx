import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500&family=Poppins:wght@400;500;600;700;800;900&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/tabLogo.png" />
      </Head>
      <title>Jason François | Full-Stack Developer</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
