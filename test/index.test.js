import Cookie from "../src/index";

describe("js cookie", () => {
  test("should be defined", () => {
    expect(Cookie).toBeDefined();
  });

  test("should cookie not exist", () => {
    expect(Cookie.get("cookie")).toBe(null);
  });

  test("should set work", () => {
    expect(Cookie.set("cookie", "mycookie")).toBe("cookie=mycookie");
  });

  test("should get work", () => {
    expect(Cookie.get("cookie")).toBe("mycookie");
  });

  test("should set path work", () => {
    expect(Cookie.set("cookie", "mycookie", { path: "/" })).toBe(
      "cookie=mycookie; path=/"
    );
  });

  test("should set domain work", () => {
    expect(Cookie.set("cookie", "mycookie", { domain: "localhost.com" })).toBe(
      "cookie=mycookie; domain=localhost.com"
    );
  });

  test("should set secure work", () => {
    expect(Cookie.set("cookie", "mycookie", { secure: true })).toBe(
      "cookie=mycookie; secure"
    );
  });

  test("should remove work", () => {
    Cookie.remove("cookie");
    expect(Cookie.get("cookie")).toBe(null);
  });
});
