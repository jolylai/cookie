const MS_IN_A_DAY = 24 * 60 * 60 * 1000;

/**
 *
 * @param {Object} convert 转换器
 * @param {Object} defaultAttributes 默认属性
 */
function init(convert, defaultAttributes) {
  function set(key, value, attributes) {
    attributes = Object.assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(
        Date.now() + attributes.expires * MS_IN_A_DAY
      );
    }

    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    key = decodeURIComponent(key);

    value = decodeURIComponent(value);

    let stringifiedAttributs = "";

    for (let attributeName in attributes) {
      // 去除没有值的属性
      if (!attributes[attributeName]) {
        continue;
      }

      stringifiedAttributs += `;  ${attributeName}`;

      if (attributes[attributeName] === true) {
        continue;
      }

      stringifiedAttributs += `=${attributes[attributeName]}`;
    }

    return (document.cookie = `${key}=${value}${stringifiedAttributs}`);
  }

  function get(key) {
    const cookies = document.cookie ? document.cookie.split(";") : [];
    console.log("cookies: ", cookies);

    const jar = {};

    for (let i = 0; i < cookies.length; i++) {
      const parts = cookies[i].split("=");
      const value = parts.slice(1).join("=");

      if (value[0] === '"') {
        value = value.slice(1, -1);
      }

      try {
        // const foundKey =
      } catch (e) {}
    }
  }

  function remove() {}

  return {
    get,
    set,
    remove
  };
}

export default init({}, {});
