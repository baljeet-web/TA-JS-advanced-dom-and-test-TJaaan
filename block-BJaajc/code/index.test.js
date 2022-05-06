const exercise = require(`./index`);

test("if full Name is correct", () => {
  expect(index.fullName("baljeet", "singh")).toBe("baljeet singh");
});

test("if full Name is correct", () => {
  expect(index.fullName("Anand", "Sesadhri")).toBe("Anand Sesadhri");
});
test("if full Name is correct", () => {
  expect(index.fullName("", "")).toBe(" ");
});
test("if full Name is correct", () => {
  expect(index.fullName("vasant", "saraswat")).toBe("vasant saraswat");
});

// Circumference
test("to test if circumference is correct", () => {
  expect(index.getCircumfrence(2)).toBe("The circumference is 4");
});
test("to test if circumference is correct", () => {
  expect(index.getCircumfrence(2)).toBe("The circumference is 12.56");
});
test("to test if circumference is correct", () => {
  expect(index.getCircumfrence(2)).toBe("The circumference is 12.56");
});

// Area
test("to test if Area is correct", () => {
  expect(index.getArea(2)).toBe("The area is 12.56");
});
test("to test if Area is correct", () => {
  expect(index.getArea(2)).toBe("The area is 12.56");
});
test("to test if Area is correct", () => {
  expect(index.getArea(2)).toBe("The area is 12.56");
});
test("to test if Area is correct", () => {
  expect(index.getArea(3)).toBe("The area is 28.27");
});
