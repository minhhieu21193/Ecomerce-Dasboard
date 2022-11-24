import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src="/images/logo.png"
              style={{ height: "46" }}
              className="logo"
              alt="Ecommerce dashboard template"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                className={(isActive) =>
                  isActive.isActive ? "menu-link active" : "menu-link"
                }
                to="/"
              >
                <HomeIcon className="icon" />
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={(isActive) =>
                  isActive.isActive ? "menu-link active" : "menu-link"
                }
                to="/products"
              >
                <ShoppingBagIcon className="icon" />
                <span className="text">Products</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={(isActive) =>
                  isActive.isActive ? "menu-link active" : "menu-link"
                }
                to="/addproduct"
              >
                <AddShoppingCartIcon className="icon" />
                <span className="text">Add product</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                className={(isActive) =>
                  isActive.isActive ? "menu-link active" : "menu-link"
                }
                to="/orders"
              >
                <LocalMallIcon className="icon" />
                <span className="text">Orders</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className={(isActive) =>
                  isActive.isActive ? "menu-link active" : "menu-link"
                }
                to="/users"
              >
                <PersonIcon className="icon" />
                <span className="text">Users</span>
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
