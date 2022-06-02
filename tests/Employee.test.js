const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create a new employee obj with name, id, and email", () => {
      const employee = new Employee("Addi", 4, "addisonguskey@gmail.com");

      expect(employee.name).toEqual("Addi");
      expect(employee.id).toEqual(4);
      expect(employee.email).toEqual("addisonguskey@gmail.com");
    });
  });
});
