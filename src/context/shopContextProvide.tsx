import all_product from "../assets/all_product";
import { ShopContext } from "./ShopContext";

const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ShopContext.Provider value={{ data: all_product }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
