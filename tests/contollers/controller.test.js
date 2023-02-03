


const service = require("../../src/services/services");
const controller = require("../../src/controller/controller");

describe("To-Do app utilities", () =>
  describe("Create a user", () => {
    it("should list all companies", async () => {
      jest.spyOn(service, "postURLService").mockResolvedValue({ id: 1 });
      const mockRes = { send: jest.fn() };
      await controller.getAllCompanies({  
        query: {
          companyId: 1,
        },

      }, mockRes);
      expect(mockRes.send).toBeCalledWith({ id: 1 });
    });
  })
);          