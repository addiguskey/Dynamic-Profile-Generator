const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("tests for Engineer's github username and role change", () => {
    const engineer = new Engineer(
      "Jim",
      2,
      "jimhalpert@dundermiflin.com",
      "jim123"
    );

    expect(engineer.name).toEqual("Jim");
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toEqual("jimhalpert@dundermiflin.com");
    expect(engineer.gitHub).toEqual("jim123");
  });
  it("should get engineer's github username", () => {
    const engineer = new Engineer(
      "Jim",
      2,
      "jimhalpert@dundermiflin.com",
      "jim123"
    );
    const { gitHub } = engineer;
    expect(engineer.getGithub()).toBe(gitHub);
  });
  it("should change role to Engineer", () => {
    const engineer = new Engineer(
      "Jim",
      2,
      "jimhalpert@dundermiflin.com",
      "jim123"
    );
    expect(engineer.getRole()).toBe("Engineer");
  });
});
