import { createContext, useContext } from "react";
import { ItemCardProps } from "../assets/types/item_type";
type ShopContextType = {
  data: ItemCardProps[];
};

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

export const useShopContext = () => {
  const products = useContext(ShopContext);
  if (products === undefined) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return products;
};
