import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <    link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
      <script src="https://kit.fontawesome.com/7bde650e9a.js" crossOrigin="anonymous"></script>
      
      <body className='bg-white'>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
