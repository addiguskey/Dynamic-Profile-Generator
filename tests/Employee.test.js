const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should create a new employee obj with name, id, and email", () => {
    const employee = new Employee(
      "Dwight",
      4,
      "dwightschrute@dundermiflin.com"
    );

    expect(employee.name).toEqual("Dwight");
    expect(employee.id).toEqual(4);
    expect(employee.email).toEqual("dwightschrute@dundermiflin.com");
  });
  it("should get new employee's name", () => {
    const employee = new Employee(
      "Dwight",
      4,
      "dwightschrute@dundermiflin.com"
    );
    const { name } = employee;
    expect(employee.getName()).toBe(name);
  });
  it("should get new employee's id", () => {
    const employee = new Employee(
      "Dwight",
      4,
      "dwightschrute@dundermiflin.com"
    );
    const { id } = employee;
    expect(employee.getId()).toBe(id);
  });
  it("should get new employee's email", () => {
    const employee = new Employee(
      "Dwight",
      4,
      "dwightschrute@dundermiflin.com"
    );
    const { email } = employee;
    expect(employee.getEmail()).toBe(email);
  });
  it("should get new employee's role", () => {
    const employee = new Employee(
      "Dwight",
      4,
      "dwightschrute@dundermiflin.com"
    );

    expect(employee.getRole()).toBe("employee");
  });
});
