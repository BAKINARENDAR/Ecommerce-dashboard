import Logout from "@mui/icons-material/Logout";
import { Badge, Button, Divider, Menu, MenuItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import * as React from "react";
import { useContext, useState } from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { MdArrowDropDown, MdEmail, MdLockReset, MdMenuOpen, } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
const Header = () => {
  const [cartAnchor, setCartAnchor] = useState(null);
  const [EmailAnchor, setEmailAnchor] = useState(null);
  const [NotificationAnchor, setNotificationAnchor] = useState(null);
  const [UserAnchor, setUserAnchor] = useState(null);

  const openCartMenu = Boolean(cartAnchor);
  const openEmailMenu = Boolean(EmailAnchor);
  const openNotificationMenu = Boolean(NotificationAnchor);
  const openUserMenu = Boolean(UserAnchor);

const context=useContext(MyContext);




  const orders = [
    { id: 1, name: "Miron Mahmud", time: "Now", price: "$289.00", items: 3 },
    { id: 2, name: "Tahmina Bonny", time: "2m", price: "$78.00", items: 1 },
    { id: 3, name: "Shikdar Ahmed", time: "1h", price: "$2,975.00", items: 5 },
    { id: 4, name: "Labonno Khan", time: "3d", price: "$96.00", items: 1 },
    {
      id: 5,
      name: "Kamlesh Hasan",
      time: "1w",
      price: "$103.00",
      items: 2,
      img: "img5.png",
    },
  ];

 

  const handleCartClick = (event) => {
    setCartAnchor(event.currentTarget);
  };
  const handleCartClose = () => {
    setCartAnchor(null);
  };

  const handleEmailClick = (event) => {
    setEmailAnchor(event.currentTarget);
  };
  const handleEmailClose = () => {
    setEmailAnchor(null);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };

  const handleUserClick = (event) => {
    setUserAnchor(event.currentTarget);
  };
  const handleUserClose = () => {
    setUserAnchor(null);
  };

  return (
    <>
      <header>
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <div className="logo"></div>
            </div>

            <div className="navbar-menu">
              <button
                className="menu-btn"
                onClick={() => context.setIsToggleOpen(!context.IsToggleOpen)}
              >
                {context.IsToggleOpen === false ? (
                  <MdMenuOpen className="menu-icon" />
                ) : (
                  <IoMenuOutline className="menu-icon" />
                )}
              </button>
            </div>

            <div className="nav-search">
              <div className="search-content">
                <IoIosSearch className="search-icon" />
                <input
                  className="search-bar"
                  type="text"
                  placeholder="Search "
                />
              </div>
            </div>

            <div className="nav-theme">
              <button className="theme-btn">
                <BsBrightnessHigh className="theme-icon" />
              </button>
            </div>

            <div className="nav-cart">
              <button className="cart-btn" onClick={handleCartClick}>
                <Badge badgeContent={orders.length} color="primary">
                  <FaShoppingCart className="cart-icon" />
                </Badge>
              </button>

              <Menu
                anchorEl={cartAnchor}
                open={openCartMenu}
                onClose={handleCartClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                className="notification-menu"
              >
                <MenuItem disabled className="notification-header">
                  <strong>Notifications ({orders.length})</strong>
                  <span className="settings-icon">⚙️</span>
                </MenuItem>

                <Divider />

                {orders.map((order, index) => (
                  <MenuItem key={order.id} className="notification-item">
                    <div className="notification-avatar">
                      <img src={order.img} alt="user" className="user-img" />
                    </div>

                    <div className="notification-content">
                      <p className="notification-text">
                        <strong>{order.name}</strong> purchased{" "}
                        <b>{order.items} items</b> for {order.price}
                      </p>
                      <span className="notification-time">
                        {order.time} ago
                      </span>
                    </div>

                    <div className="notification-action">
                      <span className="three-dots">⋮</span>
                    </div>
                  </MenuItem>
                ))}

                <Divider />

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="view-all-btn"
                >
                  VIEW ALL NOTIFICATIONS
                </Button>
              </Menu>
            </div>

            <div className="nav-email">
              <div className="email-content">
                <button className="email-btn" onClick={handleEmailClick}>
                  <MdEmail className="email-icon" />
                </button>
                <Menu
                  anchorEl={EmailAnchor}
                  open={openEmailMenu}
                  onClose={handleEmailClose}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem disabled>
                    <strong>Orders ({orders.length})</strong>
                  </MenuItem>
                  <Divider />

                  {orders.map((order) => (
                    <MenuItem key={order.id} className="cart-item">
                      <img
                        src={order.img}
                        alt="product"
                        className="cart-item-img"
                      />
                      <div className="cart-item-info">
                        <p className="cart-item-name">
                          {order.name} ~ {order.time}
                        </p>
                        <p className="cart-item-price">
                          ({order.price}) total price
                        </p>
                      </div>
                      <span className="cart-item-count">+{order.items}</span>
                    </MenuItem>
                  ))}

                  <Divider />
                  <Button fullWidth variant="contained" color="primary">
                    View All Orders
                  </Button>
                </Menu>
              </div>
            </div>

            <div className="nav-noti">
              <button className="noti-btn" onClick={handleNotificationClick}>
                <IoIosNotifications className="noti-icon" />
              </button>

              <Menu
                className="menu-noti"
                anchorEl={NotificationAnchor}
                open={openNotificationMenu}
                onClose={handleNotificationClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem disabled>
                  <strong>Orders ({orders.length})</strong>
                </MenuItem>
                <Divider />

                <div className="noti-container">
                  <div className="noti-list">
                    <div className="noti-logo"></div>
                    <div className="noti-matter">
                      <span>
                        <b>Mahmudul</b>
                        added to his favourite list
                        <b>Leather Belt steave madden</b>
                      </span>
                      <p className="noti-time">few seconds ago!</p>
                    </div>
                  </div>

                  <div className="noti-list">
                    <div className="noti-logo"></div>
                    <div className="noti-matter">
                      <span>
                        <b>Mahmudul</b>
                        added to his favourite list
                        <b>Leather Belt steave madden</b>
                      </span>
                      <p className="noti-time">few seconds ago!</p>
                    </div>
                  </div>

                  <div className="noti-list">
                    <div className="noti-logo"></div>
                    <div className="noti-matter">
                      <span>
                        <b>Mahmudul</b>
                        added to his favourite list
                        <b>Leather Belt steave madden</b>
                      </span>
                      <p className="noti-time">few seconds ago!</p>
                    </div>
                  </div>

                  <div className="noti-list">
                    <div className="noti-logo"></div>
                    <div className="noti-matter">
                      <span>
                        <b>Mahmudul</b>
                        added to his favourite list
                        <b>Leather Belt steave madden</b>
                      </span>
                      <p className="noti-time">few seconds ago!</p>
                    </div>
                  </div>

                  <Divider />
                </div>
                <Button fullWidth variant="contained" color="primary">
                  View All Notifications
                </Button>
              </Menu>
            </div>
            {context.isLogin !== true ? (
              <div className="signin-but">
                <Link to={"/Login"}>
                <Button className="signin-b">Sign in</Button>
                </Link>
              </div>
            ) : (
              <div className="navbar-account">
                <div className="myaccount-content">
                  <div className="user-image"></div>
                  <div className="name">
                    <div className="p-name">
                      <p className="Narendar">Narendar</p>
                      <button
                        className="account-down"
                        onClick={handleUserClick}
                      >
                        <MdArrowDropDown className="account-icon" />
                      </button>
                      <Menu
                        anchorEl={UserAnchor}
                        id="account-menu"
                        open={openUserMenu}
                        onClose={handleUserClose}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem onClick={handleUserClose}>
                          <VscAccount className="account-icon" />
                          My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleUserClose}>
                          <MdLockReset className="reset" />
                          Reset Password
                        </MenuItem>
                        <MenuItem onClick={handleUserClose}>
                          <ListItemIcon>
                            <Logout fontSize="small" className="logout-icon" />
                          </ListItemIcon>
                          <p className="logout">Logout</p>
                        </MenuItem>
                      </Menu>
                    </div>
                    <span className="@bakinarendar">@bakinarendar</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
