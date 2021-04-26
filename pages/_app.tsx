import type { AppProps } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@media (max-width: 768px) { 
  html {
    font-size: 6px;
  } 
}
@media (min-width: 768px) { 
  html {
    font-size: 8px;
  } 
} 
@media (min-width: 1024px) { 
  html {
    font-size: 10px;
  } 
} 
@media (min-width: 1440px) {
  html {
    font-size: 12px;
  } 
}
@media (min-width: 2560px) {
  html {
    font-size: 14px;
  } 
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  background-color: #ffffff;
}
::-webkit-scrollbar {
  display: none;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
          body,
          body > div:first-child{
            height: 100%;
          }
`;

function HitsHike({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>히츠하이크</title>
        <link rel="shortcut icon" href="favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #ffffff;
`;

export default HitsHike;
