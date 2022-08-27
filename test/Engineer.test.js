const Engineer = require("../library/Engineer");

test("A GitHub account can be set via the constructor", () => {
  const testValue = "GitHubUser";
  const Employees = new Engineer("test", 1, "test@test.com", testValue);
  expect(Employees.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const Employees = new Engineer("test", 1, "test@test.com", "GitHubUser");
  expect(Employees.getRole()).toBe(testValue);
});

test("You can get your GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const Employees = new Engineer("test", 1, "test@test.com", testValue);
  expect(Employees.getGithub()).toBe(testValue);
});
