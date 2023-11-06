import caesarCipher from "./caesarCipher";

test("Encrypts one word", () => {
    expect(caesarCipher("hello")).toBe("ifmmp");
});

test("Encrypts multiple words", () => {
    expect(caesarCipher("hello there")).toBe("ifmmp uifsf");
});

test("Wraps from a to z", () => {
    expect(caesarCipher("zoo")).toBe("app");
})

test("Ignores punctuation", () => {
    expect(caesarCipher("hello, there!")).toBe("ifmmp, uifsf!");
});