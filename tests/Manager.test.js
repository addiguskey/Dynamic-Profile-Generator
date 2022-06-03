const Manager = require("../lib/manager");

describe("Manager", () => {
  it("tests for Manager's office number and role change", () => {
    const manager = new Manager(
      "Michael",
      1,
      "michaelscott@dundermiflin.com",
      807
    );

    expect(manager.name).toEqual("Michael");
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual("michaelscott@dundermiflin.com");
    expect(manager.officeNumber).toEqual(807);
  });
  it("should get manager's office number", () => {
    const manager = new Manager(
      "Michael",
      1,
      "michaelscott@dundermiflin.com",
      807
    );

    const { officeNumber } = manager;
    expect(manager.getOfficeNumber()).toBe(officeNumber);
  });
  it("should change the role to Manager", () => {
    const manager = new Manager(
      "Michael",
      1,
      "michaelscott@dundermiflin.com",
      807
    );

    expect(manager.getRole()).toBe("Manager");
  });
});
