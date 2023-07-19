// import { test } from "node:test";
import simpleEquations from "./problem1";
// import simpleEquations from "./problem1";

test("Test 1", () => {
    expect(simpleEquations(1, 2, 3)).toEqual("No Solution")
});
test("Test 2", () => {
    expect(simpleEquations(6, 6, 14)).toEqual("1, 2, 3")
})