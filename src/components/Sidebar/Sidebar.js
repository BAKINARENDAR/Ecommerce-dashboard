import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // For expand/collapse
import { Accordion, AccordionDetails, AccordionSummary, Button, } from "@mui/material";
import { useState } from "react";
import { FaCartArrowDown, FaProductHunt } from "react-icons/fa";
import { IoIosArrowForward, IoIosNotifications, IoMdMail, IoMdSettings, } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

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
           <Accordion 
  className="pdt-accordion"
  expanded={expanded} 
  onChange={() => setExpanded(!expanded)}
  disableGutters
>
  <AccordionSummary 
    expandIcon={expanded ? <ExpandMoreIcon className="pdt-arrow" /> : <IoIosArrowForward className="pdt-arrow" />}
    className="pdt-btn"
  >
    <FaProductHunt className="pdt-icon" />
   <span className="prd">PRODUCTS</span>
  </AccordionSummary>
  <AccordionDetails>
    <ul className="product-list">
      <li><Link to="/products/list">Product List</Link></li>
      <li><Link to="/products/view">Product View</Link></li>
      <li><Link to="/products/upload">Product Upload</Link></li>
    </ul>
  </AccordionDetails>
</Accordion>

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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
