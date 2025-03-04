const helloWorld = require("./server");

test("should return Hello, World!", () => {
    expect(helloWorld()).toBe("Hello, Worldddd!");
});
