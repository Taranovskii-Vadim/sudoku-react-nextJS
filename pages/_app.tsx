import React from "react";
import { AppProps } from "next/app";

const myApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Component {...pageProps} />
    </div>
  </>
);

export default myApp;
