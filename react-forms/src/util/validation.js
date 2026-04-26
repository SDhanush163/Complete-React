export const isEmail = (value) => value.includes("@");
export const isNotEmpty = (value) => value.trim() !== "";
export const hasMinLength = (value, minLength) => value.length >= minLength;
export const isEqualsToOtherValue = (value, otherValue) => value === otherValue;
