import { type BackgroundColors, type Themes } from "../enums";
type ThemeKeys = keyof typeof Themes;
type BackgroundColorKeys = keyof typeof BackgroundColors;
export interface CodeSnapConfigType {
  theme: ThemeKeys;
  backgroundColor: BackgroundColorKeys;
  numberLines?: boolean;
}
export {};
