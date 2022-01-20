import { atom } from "recoil";

// 文字サイズ（大中小）を共有するcontext
export type TextSize = "base" | "large" | "small";
export const textSizeState = atom<TextSize>({
  key: "textSize",
  default: "base",
});
