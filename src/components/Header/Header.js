import Logout from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useState } from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import { MdArrowDropDown, MdEmail, MdLockReset, MdMenuOpen } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);  
  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);  
  const [accountemail,setaccountemail]=useState(null);
  const[accountcart,setaccountcart]=useState(null);
  const openNotificationMenu = Boolean(anchorEl);
  const openAccountMenu = Boolean(accountMenuAnchor);
  const openemailmenu=Boolean(accountemail);
  const opencartmenu=Boolean(accountcart);


  const handleNotificationMenuOpen = (event) => {
    setAccountMenuAnchor(null); 
    setaccountemail(null);
    setaccountcart(null);
    setAnchorEl(anchorEl ? null : event.currentTarget); 
  };

 
  const handleAccountMenuOpen = (event) => {
    setAnchorEl(null);

    setAccountMenuAnchor(accountMenuAnchor ? null : event.currentTarget); 
    setaccountemail(accountemail ? null : event.currentTarget);
    setaccountcart(accountcart ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAccountMenuAnchor(null);
    setaccountemail(null);
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
              <div className="menu-content">
                <button className="menu-btn">
                  <MdMenuOpen className="menu-icon" />
                </button>
              </div>
            </div>

            <div className="nav-search">
              <div className="search-content">
                <IoIosSearch className="search-icon" />
                <input
                  className="search-bar"
                  type="text"
                  placeholder="quick finding ..."
                />
              </div>
            </div>

            <div className="nav-theme">
              <div className="theme-content">
                <button className="theme-btn" >
                  <BsBrightnessHigh className="theme-icon" />
                </button>
              </div>
            </div>

            <div className="nav-cart">
              <div className="cart-content">
                <button className="cart-btn" onClick={handleNotificationMenuOpen}>
                  <FaShoppingCart className="cart-icon" />
                  <Menu
                    anchorEl={accountcart}
                    id="notifications"
                    className="notifications"
                    open={opencartmenu}
                    onClose={handleClose}
                    transformOrigin={{
                      horizontal: "right",
                      vertical: "top",
                    }}
                    anchorOrigin={{
                      horizontal: "right",
                      vertical: "bottom",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <VscAccount className="account-icon" />
                      My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <MdLockReset className="reset" />
                      Reset Password
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" className="logout-icon" />
                      </ListItemIcon>
                      <p className="logout">Logout</p>
                    </MenuItem>
                  </Menu>
                </button>
              </div>
            </div>

            <div className="nav-email">
              <div className="email-content">
                <button className="email-btn" onClick={handleNotificationMenuOpen}>
                  <MdEmail className="email-icon" />
                  <Menu
                    anchorEl={accountemail}
                    id="notifications"
                    className="notifications"
                    open={openemailmenu}
                    onClose={handleClose}
                    transformOrigin={{
                      horizontal: "right",
                      vertical: "top",
                    }}
                    anchorOrigin={{
                      horizontal: "right",
                      vertical: "bottom",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <VscAccount className="account-icon" />
                      My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <MdLockReset className="reset" />
                      Reset Password
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" className="logout-icon" />
                      </ListItemIcon>
                      <p className="logout">Logout</p>
                    </MenuItem>
                  </Menu>
                </button>
              </div>
            </div>

            <div className="nav-noti">
              <div className="noti-content">
                <button className="noti-btn" onClick={handleNotificationMenuOpen}>
                  <IoIosNotifications className="noti-icon" />
                  <Menu
                    anchorEl={anchorEl}
                    id="notifications"
                    className="notifications"
                    open={openNotificationMenu}
                    onClose={handleClose}
                    transformOrigin={{
                      horizontal: "right",
                      vertical: "top",
                    }}
                    anchorOrigin={{
                      horizontal: "right",
                      vertical: "bottom",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <VscAccount className="account-icon" />
                      My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <MdLockReset className="reset" />
                      Reset Password
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" className="logout-icon" />
                      </ListItemIcon>
                      <p className="logout">Logout</p>
                    </MenuItem>
                  </Menu>
                </button>
              </div>
            </div>

            <div className="navbar-account">
              <div className="myaccount-content">
                <div className="user-image"></div>
                <div className="name">
                  <div className="p-name">
                    <p className="Narendar">Narendar</p>
                    <button
                      className="account-down"
                      onClick={handleAccountMenuOpen}
                    >
                      <MdArrowDropDown className="account-icon" />
                      <Menu
                        anchorEl={accountMenuAnchor}
                        id="account-menu"
                        open={openAccountMenu}
                        onClose={handleClose}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          <VscAccount className="account-icon" />
                          My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                          <MdLockReset className="reset" />
                          Reset Password
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <Logout fontSize="small" className="logout-icon" />
                          </ListItemIcon>
                          <p className="logout">Logout</p>
                        </MenuItem>
                      </Menu>
                    </button>
                  </div>
                  <span className="@bakinarendar">@bakinarendar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
