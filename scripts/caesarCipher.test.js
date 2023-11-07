import caesarCipher from "./caesarCipher";

test("Encrypts one word", () => {
    expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("Encrypts multiple words", () => {
    expect(caesarCipher("hello there", 5)).toBe("mjqqt ymjwj");
});

test("Wraps from a to z (lowercase)", () => {
    expect(caesarCipher("zoo", 10)).toBe("jyy");
})

test("Wraps from a to z (uppercase)", () => {
    expect(caesarCipher("ZOO", 10)).toBe("JYY");
})

test("Ignores punctuation", () => {
    expect(caesarCipher("hello, there!", 1)).toBe("ifmmp, uifsf!");
});

test("Returns error when enCode > 25", () => {
    expect(caesarCipher("Wallop", 26)).toBe("Encryption code must between (and including) 1 and 25.");
});

test("Returns error when enCode < 1", () => {
    expect(caesarCipher("Whatever", -1)).toBe("Encryption code must between (and including) 1 and 25.");
});