import { type CodeSnapConfigType } from "./types";
export default class CodeSnap {
    private readonly theme;
    private readonly backgroundColor;
    private readonly numberLines;
    /**
     * @params (CodeSnapConfigType) config
     */
    constructor(config: CodeSnapConfigType);
    snap(code: string): Promise<void>;
}
