import { createContext } from "react";

// 文字サイズ（大中小）を共有するcontext
export type TextSizeContext = {
  textSize: "base" | "large" | "small";
  setTextSize: React.Dispatch<React.SetStateAction<"base" | "large" | "small">>;
};
export const textSizeContext = createContext<TextSizeContext>({
  textSize: "large",
  setTextSize: () => {},
});
