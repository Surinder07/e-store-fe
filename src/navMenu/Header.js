import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
//import { useStateValue } from "../StateProvider";
import HeaderLogo from "../assets/Logo.png";
import Router from "react-router-dom/es/Router";

function Header() {
    // const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src={HeaderLogo}
                    alt={"Logo"}
                />
            </Link>

            <div className="header__nav">
                <Link to='/login'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className="header__option">
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>

                <Link to="/products">
                <div className="header__option">
                    <span className="header__optionLineTwo">Products</span>
                </div>
                </Link>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
              {/*{basket?.length}*/}
            </span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;