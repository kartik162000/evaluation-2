


const service = require("../../src/services/services");
const controller = require("../../src/controllers/controller");
describe("To-Do app utilities", () =>
  describe("Create a user", () => {
    it("should list all companies", async () => {
      jest.spyOn(service, "postURLService").mockResolvedValue({ 
        c_id:'9232234as-808a-44a9-a490-b4ef8a045f61',
        cpi:0,
        cf: 621865,
        mau: 1,
        roic: 14,
        score: 22.756625,
       });
       const mockRes = {
        status: jest.fn().mockReturnValue({
          json: jest.fn(),
        }),
      };
      await controller.postURLController({  body: { urlLink: "https://store-0001.s3.amazonaws.com/input.csv" } }, mockRes);
      expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.status().json).toBeCalledWith(
        {
        c_id:'9232234as-808a-44a9-a490-b4ef8a045f61',
        cpi:0,
        cf: 621865,
        mau: 1,
        roic: 14,
        score: 22.756625,
      });
    });
  })
);          

