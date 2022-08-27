const Intern = require("../library/Intern");

test("school via constructor", () => {
  const testValue = "UIC";
  const Employees = new Intern("test", 1, "test@test.com", testValue);
  expect(Employees.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const Employees = new Intern("test", 1, "test@test.com", "UIC");
  expect(Employees.getRole()).toBe(testValue);
});

test("school via getSchool()", () => {
  const testValue = "UIC";
  const Employees = new Intern("test", 1, "test@test.com", testValue);
  expect(Employees.getSchool()).toBe(testValue);
});
