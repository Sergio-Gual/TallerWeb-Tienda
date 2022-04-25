import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../PDfirebase";

const getPersonsData = async () => {
  const persons = await getProducts();
  return persons;
};
var products = getPersonsData();
console.log(products);
export default products;
