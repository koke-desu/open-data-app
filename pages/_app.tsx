import "../globals.css";
import type { AppProps } from "next/app";
import { favoriteContext, getInitialFavorite } from "../database/favorite";
import { useState } from "react";
import { CityType } from "../database/dataType";
import { textSizeContext, TextSizeContext } from "../components/ui/P/textSize";

function MyApp({ Component, pageProps }: AppProps) {
  const [favorite, setFavorite] = useState<CityType[]>(getInitialFavorite());
  const [textSize, setTextSize] = useState<TextSizeContext["textSize"]>("base");

  return (
    <textSizeContext.Provider value={{ textSize, setTextSize }}>
      <favoriteContext.Provider value={{ favorite, setFavorite }}>
        <Component {...pageProps} />
      </favoriteContext.Provider>
    </textSizeContext.Provider>
  );
}

export default MyApp;
