import { getRuleTester } from "eslint-compat-utils/rule-tester";
import { getLegacyESLint } from "eslint-compat-utils/eslint";

// eslint-disable-next-line @typescript-eslint/naming-convention -- class name
export const RuleTester = getRuleTester();

// eslint-disable-next-line @typescript-eslint/naming-convention -- class name
export const LegacyESLint = getLegacyESLint();
