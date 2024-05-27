import { useContext } from "react";
import { User, Product } from "./models";
import { connectToDB } from "./utils";
import { WixClientContext } from "../../context/wixContext";

//fetch all users
export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEMS_PER_PAGE = 5;
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch to users!");
  }
};
//fetch single users
export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch to user!");
  }
};

//fetch all products
export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEMS_PER_PAGE = 5;
  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch to products!");
  }
};

//fetch single product
export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch to product!");
  }
};

//Get Products from library
export const getProducts = async () => {
  const wixContext = useContext(WixClientContext);
  const res = await wixClient.products.queryProducts().find();
};
