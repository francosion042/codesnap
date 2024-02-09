import puppeteer from "puppeteer";
import sharp from "sharp";

import { type CodeSnapConfigType } from "./types";
import { BackgroundColors, Themes } from "./enums";
import { composeCarbonUrl } from "./utils";
export default class CodeSnap {
  private readonly theme: string;
  private readonly backgroundColor: string;
  private readonly numberLines: boolean;

  /**
   * @params (CodeSnapConfigType) config
   */
  constructor(config: CodeSnapConfigType) {
    this.theme = Themes[config.theme];
    this.backgroundColor = BackgroundColors[config.backgroundColor];
    this.numberLines = config.numberLines || false;
  }

  public async snap(code: string) {
    const carbonUrl = composeCarbonUrl(
      this.theme,
      this.backgroundColor,
      this.numberLines,
      code,
    );

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(carbonUrl);
    const element = await page.$(".container-bg");

    if (element) {
      const buffer = await element.screenshot({ encoding: "binary" });
      await browser.close();
      console.log(buffer);

      await sharp(buffer).toFile("codeSnapshot.png");
    }
  }
}
