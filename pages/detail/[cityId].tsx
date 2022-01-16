import React from "react";
import DetailPage from "../../components/page/DetailPage/DetailPage";
import PageLayout from "../../components/page/pageLayout/PageLayout";
type Props = {};

const Index: React.VFC<Props> = ({}) => {
  return (
    <PageLayout>
      <DetailPage />
    </PageLayout>
  );
};
export default Index;
