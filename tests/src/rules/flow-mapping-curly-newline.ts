import { RuleTester } from "../../utils/eslint-compat";
import rule from "../../../src/rules/flow-mapping-curly-newline";
import { loadTestCases } from "../../utils/utils";

const tester = new RuleTester({
  languageOptions: {
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- ignore
    parser: require("yaml-eslint-parser"),
    ecmaVersion: 2020,
  },
});

tester.run(
  "flow-mapping-curly-newline",
  rule as any,
  loadTestCases("flow-mapping-curly-newline"),
);
