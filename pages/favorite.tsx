import { motion } from "framer-motion";
import type { NextPage } from "next";
import FavoritePage from "../components/page/FavoritePage/FavoritePage";

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: 50 }}
      style={{ width: "100%" }}
    >
      <FavoritePage />
    </motion.div>
  );
};

export default Home;
