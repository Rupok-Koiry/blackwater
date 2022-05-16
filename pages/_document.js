import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html className="overflow-x-hidden">
         <Head>
            <link rel="stylesheet" href="/fonts/fonts.css" />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
