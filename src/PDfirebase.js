import firebase, { db } from "fb";
import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const getProducts = async () => {
  const products = await getDocs(collection("products"));
  return products;
};
export const getProduct = async (id) => {
  const product = await getDoc(collection("products"), id);
  return product;
};
export const addProduct = async (product) => {
  const newProduct = await addDoc(collection("products"), product);
  return newProduct;
};
export const updateProduct = async (id, product) => {
  const updatedProduct = await updateDoc(collection("products"), id, product);
  return updatedProduct;
};
export const deleteProduct = async (id) => {
  const deletedProduct = await deleteDoc(collection("products"), id);
  return deletedProduct;
};
