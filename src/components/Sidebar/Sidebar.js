import { Button } from "@mui/material";
import { useState } from "react";
import { FaCartArrowDown, FaLock } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward, IoIosNotifications, IoMdMail, IoMdSettings } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-content">
          <p> MAIN PAGES</p>

          <div className="dashboard">
            <Button className="dash-btn">
              <MdSpaceDashboard className="dash-icon" />
              <span>Dashboard</span>
              <IoIosArrowForward className="for-icon" />
            </Button>
          </div>

        
          <div className="Products">
            <Button className="p-btn" onClick={()=>setopen(!open)}>
              <FaCartArrowDown className="p-icon" />
              <span>PRODUCTS</span>
              {open ? (
          <IoIosArrowDown className="pfor-icon" />
        ) : (
          <IoIosArrowForward className="pfor-icon" />
        )}
             
            </Button>

            {open&&(
              <ul className="dropdown-menu-p">
                <li>Product List </li>
                <li>Product View</li>
                <li>Product Upload</li>
              </ul>

            )}
          </div>


          <div className="Orders">
            <Button className="o-btn">
              <FaCartArrowDown className="o-icon" />
              <span>Orders</span>
              <IoIosArrowForward className="ofor-icon" />
            </Button>
          </div>

          <div className="Messages">
            <Button className="msg-btn">
              <IoMdMail className="msg-icon" />
              <span>Messages</span>
              <IoIosArrowForward className="msgfor-icon" />
            </Button>
          </div>

          <div className="Noti">
            <Button className="n-btn">
              <IoIosNotifications className="n-icon" />
              <span>Notifications</span>
              <IoIosArrowForward className="nfor-icon" />
            </Button>
          </div>

          <div className="Settings">
            <Button className="set-btn">
              <IoMdSettings className="set-icon" />
              <span>Settings</span>
              <IoIosArrowForward className="setfor-icon" />
            </Button>
          </div>


          <div className="dashboard">
            <Button className="dash-btn">
              <MdSpaceDashboard className="dash-icon" />
              <span>Dashboard</span>
              <IoIosArrowForward className="for-icon" />
            </Button>
          </div>

        
          <div className="Products">
            <Button className="p-btn" onClick={()=>setopen(!open)}>
              <FaCartArrowDown className="p-icon" />
              <span>PRODUCTS</span>
              {open ? (
          <IoIosArrowDown className="pfor-icon" />
        ) : (
          <IoIosArrowForward className="pfor-icon" />
        )}
              
            </Button>

            {open&&(
              <ul className="dropdown-menu-p">
                <li>Product List </li>
                <li>Product View</li>
                <li>Product Upload</li>
              </ul>

            )}
          </div>


          <div className="Orders">
            <Button className="o-btn">
              <FaCartArrowDown className="o-icon" />
              <span>Orders</span>
              <IoIosArrowForward className="ofor-icon" />
            </Button>
          </div>

          <div className="Messages">
            <Button className="msg-btn">
              <IoMdMail className="msg-icon" />
              <span>Messages</span>
              <IoIosArrowForward className="msgfor-icon" />
            </Button>
          </div>

          <div className="Noti">
            <Button className="n-btn">
              <IoIosNotifications className="n-icon" />
              <span>Notifications</span>
              <IoIosArrowForward className="nfor-icon" />
            </Button>
          </div>

          <div className="Settings">
            <Button className="set-btn">
              <IoMdSettings className="set-icon" />
              <span>Settings</span>
              <IoIosArrowForward className="setfor-icon" />
            </Button>
          </div>


<br/>
<div className="logout">
  <div className="logout-content">
   <button className="l-b">
   <FaLock className="log-icon" />

    <span>LOGOUT</span>
   </button>
  </div>
</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
