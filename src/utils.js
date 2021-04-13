export function isNumber(val) {
  return typeof val === "number";
}

export function isString(val) {
  return typeof val === "string";
}

export function encode(val) {
  return encodeURIComponent(val)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
