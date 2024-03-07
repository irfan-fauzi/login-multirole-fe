const Textvalidation = (
  text: string | null = "",
  maxLength: number = 255,
  fieldName: string = "field name",
  required: boolean = true
) => {
  const regex = /^[A-Za-z]+$/
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length > maxLength) {
    return `${fieldName} max ${maxLength} characters`;
  }
  if (text && !regex.test(text)) {
    return `${fieldName} invalid`;
  }
  return "";
};

const EmailValidation = (
  text: string | null = "",
  maxLength: number = 255,
  fieldName: string = "field name",
  required: boolean = true
) => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length > maxLength) {
    return `${fieldName} max ${maxLength} characters`;
  }
  if (text && !regex.test(text)) {
    return `${fieldName} invalid`;
  }
  return "";
};

const PasswordValidation = (
  text: string | null = "",
  minLength: number = 8,
  maxLength: number = 12,
  fieldName: string = "field name",
  required: boolean = true
) => {
  if (text === null && required) {
    return `${fieldName} is required`;
  }
  if (text === "" && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length < minLength) {
    return `${fieldName} min ${minLength} characters`;
  }
  if (text && text?.length > maxLength) {
    return `${fieldName} max ${maxLength} characters`;
  }
  return "";
};

export default {
  Textvalidation,
  EmailValidation,
  PasswordValidation,
};
