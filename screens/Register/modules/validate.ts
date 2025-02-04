export const ONLY_UNICODE_RULE = /^[\p{L}\s]+$/u;
export const ONLY_UNICODE_MESSAGE = "Dữ liệu đầu vào phải là chữ cái";

export const ONLY_ALPHABET_RULE = /^[a-zA-Z]$/;
export const ONLY_ALPHABET_MESSAGE = "Dữ liệu đầu vào phải là chữ cái";

export const ONLY_NUMBER_RULE = /^[0-9]$/;
export const ONLY_NUMBER_MESSAGE = "Dữ liệu đầu vào phải là số";

export const PASSWORD_RULE = /^[a-zA-Z0-9][^\s<>;'"\\]{7,31}$/;
export const PASSWORD_RULE_MESSAGE =
  "Mật khẩu dài 8 đến 32 kí tự và không được chứa khoảng trắng hoặc ký tự không được phép như <, >, ;, ', \\.";

export const CCCD_RULE = /^[0-9]{12}$/;
export const CCCD_MESSAGE = "Không đúng định dạng CCCD";

export const PHONE_RULE = /^[0-9]{10}$/;
export const PHONE_MESSAGE = "Không đúng định dạng số điện thoại";
