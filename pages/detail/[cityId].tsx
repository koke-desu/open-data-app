import { motion } from "framer-motion";
import React from "react";
import DetailPage from "../../components/page/DetailPage/DetailPage";

type Props = {};

const Index: React.VFC<Props> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <DetailPage />
    </motion.div>
  );
};
export default Index;
