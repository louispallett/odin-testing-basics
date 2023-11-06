import capitalize from "./capitalize";

test("Capitalize a string", () => {
    expect(capitalize("jeff")).toBe("Jeff");
    expect(capitalize("hello, world!")).toBe("Hello, world!");
    expect(capitalize("sugar upon my face")).toBe("Sugar upon my face");
});