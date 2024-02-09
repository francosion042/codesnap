import { CodeSnapConfigType } from "./types";
export default class CodeSnap {
  private readonly theme;
  private readonly backgroundColor;
  private readonly numberLines;
  constructor(config: CodeSnapConfigType);
  snap(code: string): Promise<void>;
}
