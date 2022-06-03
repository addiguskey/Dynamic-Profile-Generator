const Intern = require("../lib/intern");

describe("Intern", () => {
  it("tests for Intern's school name and role change", () => {
    const intern = new Intern(
      "Udon",
      3,
      "udon@lovesfetch.com",
      "University of Denver"
    );

    expect(intern.name).toEqual("Udon");
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual("udon@lovesfetch.com");
    expect(intern.school).toEqual("University of Denver");
  });
  it("should get intern's school name", () => {
    const intern = new Intern(
      "Udon",
      3,
      "udon@lovesfetch.com",
      "University of Denver"
    );

    const { school } = intern;
    expect(intern.getSchool()).toBe(school);
  });
  it("should change the role to Intern", () => {
    const intern = new Intern(
      "Udon",
      3,
      "udon@lovesfetch.com",
      "University of Denver"
    );
    expect(intern.getRole()).toBe("Intern");
  });
});
