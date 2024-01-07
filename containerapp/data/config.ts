import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.zenflowchart.com/blog",
  match: "https://www.zenflowchart.com/blog/**",
  maxPagesToCrawl: 50,
  outputFileName: "../data/output.json",
  maxTokens: 2000000,
};
