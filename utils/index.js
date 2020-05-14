export const slugify = (input) =>
  input && input.replace(/ /g, "-").replace(/[^\w-]+/g, "");
