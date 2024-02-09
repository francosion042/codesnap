import { BackgroundColors, Themes } from "../enums";
type ThemeKeys = keyof typeof Themes;
type BackgroundColorKeys = keyof typeof BackgroundColors;
export type CodeSnapConfigType = {
  theme: ThemeKeys;
  backgroundColor: BackgroundColorKeys;
  numberLines?: boolean;
};
export {};
