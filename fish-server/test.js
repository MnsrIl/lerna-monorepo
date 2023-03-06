const first = require(".");

describe("server", () => {
    it("has correct string", () => {
        const lookingFor = /Hello/i
        expect(first).toEqual(lookingFor);
    })
})