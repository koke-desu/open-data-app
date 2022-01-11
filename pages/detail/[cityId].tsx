import React from "react";
import DetailPage from "../../components/layout/DetailPage/DetailPage";
import PageLayout from "../../components/layout/pageLayout/PageLayout";
type Props = {};

const Index: React.VFC<Props> = ({}) => {
  return (
    <PageLayout>
      <DetailPage />
    </PageLayout>
  );
};
export default Index;
