import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import DetailPage from "../../components/page/DetailPage/DetailPage";

type Props = {};

const Index: React.VFC<Props> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <DetailPage />
    </motion.div>
  );
};
export default Index;
