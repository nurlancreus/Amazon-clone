import { ShoppingCartIcon, Bars4Icon } from "@heroicons/react/24/outline";
import { Search } from "./";
import { Link } from "react-router-dom";

import { getCartProductsNumber } from "../redux/cartSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const productsNumber = useSelector(getCartProductsNumber);

  return (
    <header className="min-w-[1000px] ">
      <div className="flex bg-amazonClone text-white h-[60px]">
        <div className="flex items-center m-4">
          <Link to="/" className="navbar-hover">
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <div className="navbar-hover px-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">Azerbaijan</div>
          </div>
        </div>
        <div className="flex grow relative items-center">
          <Search />
        </div>
        <div className="flex items-center ml-3">
          <div className="navbar-hover px-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="navbar-hover px-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to="/checkout" className="navbar-hover p-1">
            <div className="flex px-2">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {productsNumber}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <ul className="flex items-center bg-amazonClone-light_blue text-white space-x-3 text-xs xl:text-sm px-2 pl-6">
        <li>
          <button className="flex navbar-hover px-1 py-2 items-center gap-1 font-bold">
            <span>
              <Bars4Icon className="fill-white w-6 h-6" />
            </span>
            All
          </button>
        </li>
        <li>
          <Link to="#" className="navbar-hover px-1 py-2">
            Today's Deals
          </Link>
        </li>
        <li>
          <Link to="#" className="navbar-hover px-1 py-2">
            Customer Service
          </Link>
        </li>
        <li>
          <Link to="#" className="navbar-hover px-1 py-2">
            Registry
          </Link>
        </li>
        <li>
          <Link to="#" className="navbar-hover px-1 py-2">
            Gift Cards
          </Link>
        </li>
        <li>
          <Link to="#" className="navbar-hover px-1 py-2">
            Sell
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
