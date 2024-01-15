import { RuleTester } from "../../utils/eslint-compat";
import rule from "../../../src/rules/key-spacing";
import { loadTestCases } from "../../utils/utils";

const tester = new RuleTester({
  languageOptions: {
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- ignore
    parser: require("yaml-eslint-parser"),
    ecmaVersion: 2020,
  },
});

tester.run("key-spacing", rule as any, loadTestCases("key-spacing"));
