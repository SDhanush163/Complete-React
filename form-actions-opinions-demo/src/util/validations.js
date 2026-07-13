export const isNotEmpty = (value) => {
  return value.trim() !== "";
};

export const hasMinLength = (value, minLength) => {
  return value.length >= minLength;
};
export const hasMaxLength = (value, maxLength) => {
  return value.length <= maxLength;
};

export const isEqualToOtherValue = (value, otherValue) => {
  return value === otherValue;
};
