export const cls = (...args: Array<string | undefined>) => {
  return args.filter((arg) => arg).join(" ");
};
