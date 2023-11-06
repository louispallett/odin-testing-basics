import reverseString from "./reverseString";

test("Reverse a string", () =>{
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("Shut up")).toBe("pu tuhS");
});