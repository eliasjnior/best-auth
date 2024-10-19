import { bootstrap } from "@/index";

import { exampleTestHelper } from "@tests/helpers/example";

describe("test file", () => {
  test("example test", () => {
    const test = jest.fn();

    test(1);

    expect(1).toBe(1);
    expect(test).toHaveBeenCalledWith(1);
    expect(exampleTestHelper()).toBe(true);
  });

  test("bootstrap test", () => {
    const log = jest.spyOn(console, "log");

    bootstrap();

    expect(log).toHaveBeenCalledWith("Hello World", false);
  });
});
