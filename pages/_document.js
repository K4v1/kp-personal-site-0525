import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <style>{`
          /* Base styles */
          html {
            font-size: 16px;
          }
          
          body {
            margin: 0;
            padding: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }

          /* Fluid images and media */
          img, video, iframe {
            max-width: 100%;
            height: auto;
            display: block;
          }

          /* Scrollable containers */
          .scroll-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          /* Touch targets */
          button, 
          a {
            min-height: 44px;
            min-width: 44px;
            padding: 0.5rem;
          }

          /* Container utilities */
          .container-custom {
            width: 100%;
            max-width: 1024px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          /* Responsive breakpoints */
          @media (min-width: 480px) {
            /* Small tablet styles */
          }

          @media (min-width: 768px) {
            /* Tablet/desktop styles */
          }

          @media (min-width: 1024px) {
            /* Large desktop styles */
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 