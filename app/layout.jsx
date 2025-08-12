// app/layout.jsx
import '../styles/css/animate.css';
import '../styles/css/owl.carousel.min.css';
import '../styles/css/jquery.fancybox.min.css';

import '../public/fonts/ionicons/css/ionicons.min.css';
import '../public/fonts/fontawesome/css/font-awesome.min.css';
import '../public/fonts/flaticon/font/flaticon.css';

import '../styles/css/aos.css';
import '../styles/css/style.css';



import Script from 'next/script';

export const metadata = {
  title: 'MarkusPub — Digital Marketing That Drives Results',
  description: '',
  keywords: '',
  authors: [{ name: 'markus.co' }],
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  icons: {
    icon: '/ftco-32x32.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=DM+Serif+Display:400,400i|Roboto+Mono&display=swap"
          rel="stylesheet"
        />

        {/* CDN CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"
        />
      </head>
      <body>
        {children}
        <script src="/js/jquery-3.2.1.min.js" strategy="beforeInteractive" />
        <script src="/js/jquery-migrate-3.0.1.min.js" strategy="beforeInteractive" />
        <script src="/js/popper.min.js" strategy="beforeInteractive" />
        <script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        
        <script src="/js/jquery.fancybox.min.js" strategy="lazyOnload" />
        <script src="/js/jquery.stellar.min.js" strategy="lazyOnload" />
        <script src="/js/aos.js" strategy="lazyOnload" />
        <script src="/js/main.js" strategy="lazyOnload" />
        
      </body>
    </html>
  );
}
