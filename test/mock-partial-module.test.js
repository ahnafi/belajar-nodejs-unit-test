import {getAllProducts} from "../src/database"
import {ProductService} from "../src/product-services"

jest.mock("../src/database.js", () => {
  const originalmodule = jest.requireActual("../src/database.js");

  return {
    __esModule: true,
    ...originalmodule,
    getAllProducts: jest.fn(),
  };
});
