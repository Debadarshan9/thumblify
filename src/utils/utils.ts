export const classes = (...rest: (String | Boolean | String[])[]) => {
  return rest
    .flatMap((param) => param)
    .filter(Boolean)
    .join(" ");
};
