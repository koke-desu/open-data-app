import "../globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { CityType } from "../database/dataType";
import { textSizeContext, TextSizeContext } from "../components/ui/P/textSize";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const [textSize, setTextSize] = useState<TextSizeContext["textSize"]>("base");

  return (
    <RecoilRoot>
      <textSizeContext.Provider value={{ textSize, setTextSize }}>
        <Component {...pageProps} />
      </textSizeContext.Provider>
    </RecoilRoot>
  );
}

export default MyApp;
