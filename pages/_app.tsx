import "../globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AnimatePresence } from "framer-motion";
import PageLayout from "../components/page/pageLayout/PageLayout";
import { Router } from "next/router";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <PageLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </PageLayout>
    </RecoilRoot>
  );
}

export default MyApp;
