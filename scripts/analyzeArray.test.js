import analyzeArray from "./analyzeArray";

test("Returns small numbers", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});

test("Returns big numbers", () => {
    expect(analyzeArray([100, 802, 3002, 21, 6156])).toEqual({average: 2016.2, min: 21, max: 6156, length: 5});
});

test("Returns floating numbers", () => {
    expect(analyzeArray([0.1, 2.1, 5.5, 0.4, 0.002, 10.1, 4.8])).toEqual({average: 3.286, min: 0.002, max: 10.1, length: 7})
})