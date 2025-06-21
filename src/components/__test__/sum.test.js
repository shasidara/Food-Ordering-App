import { sum } from "../sum";

test("sum function should caculate the sum of two numbers",() => {
    const result = sum(2,2);

    expect(result).toBe(4);
});