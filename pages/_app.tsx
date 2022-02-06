import "../globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AnimatePresence } from "framer-motion";
import PageLayout from "../components/page/pageLayout/PageLayout";
import { useCallback, useEffect, useRef } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps, router }: AppProps) {
  const transitionCallback = useTransitionFix();

  return (
    <RecoilRoot>
      <PageLayout>
        <AnimatePresence exitBeforeEnter onExitComplete={transitionCallback}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </PageLayout>
    </RecoilRoot>
  );
}

export default MyApp;

type Cleanup = () => void;

export const useTransitionFix = (): Cleanup => {
  const cleanupRef = useRef<Cleanup>(() => {});

  useEffect(() => {
    const changeListener = () => {
      const nodes = document.querySelectorAll("link[rel=stylesheet], style:not([media=x])");
      // @ts-ignore
      const copies = [...nodes].map((el) => el.cloneNode(true) as HTMLElement);

      for (let copy of copies) {
        copy.removeAttribute("data-n-p");
        copy.removeAttribute("data-n-href");

        document.head.appendChild(copy);
      }

      cleanupRef.current = () => {
        for (let copy of copies) {
          document.head.removeChild(copy);
        }
      };
    };

    Router.events.on("beforeHistoryChange", changeListener);

    return () => {
      Router.events.off("beforeHistoryChange", changeListener);
      cleanupRef.current();
    };
  }, []);

  return useCallback(() => {
    cleanupRef.current();
  }, []);
};
