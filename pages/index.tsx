import type { NextPage } from "next";
import PageLayout from "../components/layout/pageLayout/PageLayout";
import TopPage from "../components/layout/TopPage/TopPage";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <TopPage />
    </PageLayout>
  );
};

export default Home;
