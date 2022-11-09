export const stringLength = (string) => {
  if (string.length <= 0) throw new Error("koko less than 0");
  return string.length;
};

export const reverseString = (string) => {
  return string.split("").reverse().join("");
};
