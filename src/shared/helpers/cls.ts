export const cls = (...args: string[]) => {
  return args.filter((arg) => arg).join(" ");
};
