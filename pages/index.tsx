import type { NextPage } from "next";
import PageLayout from "../components/page/pageLayout/PageLayout";
import TopPage from "../components/page/TopPage/TopPage";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <TopPage />
    </PageLayout>
  );
};

export default Home;
