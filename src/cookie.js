import { isNumber } from "./utils";

const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

function standardBrowserEnv() {
  function set(name, value, attributes) {
    const cookie = [];

    name = decodeURIComponent(name);
    value = decodeURIComponent(value);

    cookie.push(`${name}=${value}`);

    for (let attributeName in attributes) {
      let attributeValue = attributes[attributeName];

      if (attributeName === "expires") {
        // 过期时间
        if (isNumber(attributeValue)) {
          attributeValue = new Date(Date.now() + attributeValue * MS_IN_A_DAY);
        }

        cookie.push(`expires=${attributeValue.toGMTString()}`);
      }

      if (attributeName === "path") {
        cookie.push(`path=${attributeValue}`);
      }

      if (attributeName === "domain") {
        cookie.push(`domain=${attributeValue}`);
      }

      if (attributeName === "secure" && attributeValue === true) {
        cookie.push("secure");
      }
    }

    return (document.cookie = cookie.join("; "));
  }

  function get(name) {
    const reg = new RegExp(`(^|;\\s*)(${name})=([^;]*)`);
    const match = document.cookie.match(reg);

    return match ? decodeURIComponent(match[3]) : null;
  }

  function remove(name) {
    this.set(name, "", { expires: -1 });
  }

  return { get, set, remove };
}

export default standardBrowserEnv();
