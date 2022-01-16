import "../globals.css";
import type { AppProps } from "next/app";
import { favoriteContext, getInitialFavorite } from "../database/favorite";
import { useState } from "react";
import { CityType } from "../database/dataType";

function MyApp({ Component, pageProps }: AppProps) {
  const [favorite, setFavorite] = useState<CityType[]>(getInitialFavorite());

  return (
    <favoriteContext.Provider value={{ favorite, setFavorite }}>
      <Component {...pageProps} />
    </favoriteContext.Provider>
  );
}

export default MyApp;
