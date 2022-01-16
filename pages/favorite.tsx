import type { NextPage } from "next";
import FavoritePage from "../components/page/FavoritePage/FavoritePage";
import PageLayout from "../components/page/pageLayout/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <FavoritePage />
    </PageLayout>
  );
};

export default Home;
