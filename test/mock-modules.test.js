import { getAllProduct, getProductById } from "../src/database";
import { ProductServices } from "../src/product-services";

jest.mock("../src/database.js");

test("mock modules get product by id", () => {
  getProductById.mockImplementation((id) => {
    return {
      id,
      name: "product mock",
    };
  });

  const product = ProductServices.findById(1);
});

test("mock modlues get all products", () => {
  const product = [
    {
      id: 1,
      name: "product 1",
    },
    {
      id: 2,
      name: "product 2",
    },
  ];

  getAllProduct.mockImplementation(() => {
    return product;
  });

  expect(ProductServices.findAll()).toEqual(product);
});
