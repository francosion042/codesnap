"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const sharp_1 = __importDefault(require("sharp"));
const enums_1 = require("./enums");
const utils_1 = require("./utils");
class CodeSnap {
  /**
   * @params (CodeSnapConfigType) config
   */
  constructor(config) {
    this.theme = enums_1.Themes[config.theme];
    this.backgroundColor = enums_1.BackgroundColors[config.backgroundColor];
    this.numberLines = config.numberLines || false;
  }
  snap(code) {
    return __awaiter(this, void 0, void 0, function* () {
      const carbonUrl = (0, utils_1.composeCarbonUrl)(
        this.theme,
        this.backgroundColor,
        this.numberLines,
        code,
      );
      const browser = yield puppeteer_1.default.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
      const page = yield browser.newPage();
      yield page.goto(carbonUrl);
      const element = yield page.$(".container-bg");
      if (element) {
        const buffer = yield element.screenshot({ encoding: "binary" });
        yield browser.close();
        console.log(buffer);
        yield (0, sharp_1.default)(buffer).toFile("codeSnapshot-example.png");
      }
    });
  }
}
exports.default = CodeSnap;
