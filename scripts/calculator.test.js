import { add, subtract, divide, multiply } from "./calculator";

test("Addition", () => {
    expect(add(5, 8)).toBe(13);
    expect(add(3.5, 3)).toBe(6.5);
});

test("Subtraction", () => {
    expect(subtract(5, 8)).toBe(-3);
    expect(subtract(3.5, 3)).toBe(0.5);
});

test("Division", () => {
    expect(divide(5, 8)).toBe(0.625);
    expect(divide(20, 5)).toBe(4);
})

test("Multiplication", () => {
    expect(multiply(5, 8)).toBe(40);
    expect(multiply(3.5, 3)).toBe(10.5);
})