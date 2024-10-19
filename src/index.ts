import { exampleHelper } from "@/src/helpers/example";

export const bootstrap = (): void => {
  const example = exampleHelper();
  console.log("Hello World", example);
};

bootstrap();
