import { srcExample } from "@/src/example/src-example";

import { exampleTestHelper } from "@/tests/helpers/example";

export const otherExample = (): boolean => {
  return exampleTestHelper() && srcExample();
};
