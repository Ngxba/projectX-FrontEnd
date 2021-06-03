import axios from "axios";
import { backEndLink } from "../../config";

export const createOrder = async (
  ownerId,
  productId,
  productName,
  urlKey,
  purchaseDate,
  price,
  status
) => {
  const res = await axios.post(`${backEndLink}/api/order/createOrder`, {
    ownerId,
    productId,
    productName,
    urlKey,
    purchaseDate,
    price,
    status,
  });
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Cannot create product", res);
  }
};
