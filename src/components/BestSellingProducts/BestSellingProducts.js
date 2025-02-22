import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaEye, FaStar } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import * as React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { PiDownloadSimple } from "react-icons/pi";
const BestSellingProducts = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [rows, setRows] = React.useState(12);
  const [category, setCategory] = React.useState("Mans");
  const [brand, setBrand] = React.useState("Ecstasy");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = [
    { uid: "#1", product: "Tops and skirts", category: "womans", brand: "richman", price: "$19.00", stock: 30, rating: "4.9 (16)", orders: 380, sales: "$38k" },
    { uid: "#2", product: "Leather belt", category: "mans", brand: "lubana", price: "$14.00", stock: 23, rating: "4.5 (38)", orders: 189, sales: "$9k" },
    { uid: "#3", product: "Existing product", category: "womans", brand: "ecstasy", price: "$33.00", stock: 30, rating: "4.1 (69)", orders: 380, sales: "$38k" },
    { uid: "#4", product: "Existing product", category: "kidz", brand: "ecstasy", price: "$33.00", stock: 30, rating: "4.4 (47)", orders: 380, sales: "$38k" },
  ];
  
  return (
    
    <>
      <section>
        <div className="best-container">
          <div className="best-content">
            <div className="best-heading">
              <h4>BEST SELLING PRODUCTS</h4>
              <div>
                <button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="menubest"
                >
                  <CiMenuKebab className="menu-dots" />
                </button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <MdEdit className="edit" /> Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <MdDelete className="del" /> Delete
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <PiDownloadSimple className="download" /> Downloads
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <div className="filters">
              <FormControl
                variant="outlined"
                className="showby"
                style={{ marginRight: 30 }}
              >
                <InputLabel>Show By</InputLabel>
                <Select
                  value={rows}
                  onChange={(e) => setRows(e.target.value)}
                  label="Show By"
                >
                  <MenuItem value={12}>12 Row</MenuItem>
                  <MenuItem value={24}>24 Row</MenuItem>
                  <MenuItem value={36}>36 Row</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                variant="outlined"
                className="category"
                style={{ marginRight: 30 }}
              >
                <InputLabel>Category By</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Category By"
                >
                  <MenuItem value="Mans">Mans</MenuItem>
                  <MenuItem value="Womans">Womans</MenuItem>
                  <MenuItem value="Kids">Kids</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                variant="outlined"
                className="brandby"
                style={{ marginRight: 30 }}
              >
                <InputLabel>Brand By</InputLabel>
                <Select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  label="Brand By"
                >
                  <MenuItem value="Ecstasy">Ecstasy</MenuItem>
                  <MenuItem value="Lubana">Lubana</MenuItem>
                  <MenuItem value="Richman">Richman</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-search"
                className="searchby"
                label="Search field"
                type="search"
                placeholder="id / name / category / brand"
              />
            </div>

            <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>UID</th>
            <th>PRODUCT</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>RATING</th>
            <th>ORDERS</th>
            <th>SALES</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td><span>#1</span></td>
              <td><span>Tops and skirts</span></td>
              <td><span>womans</span></td>
              <td><span>richman</span></td>
              <td className="price-td"><del className="old">
              $19.00
              </del>
                <span className="new">$19.00</span>
                </td>
              <td><span>30</span></td>
              <td className="rating-td">
              <FaStar className="rtd" />
                <span>4.9 (16)</span>
                </td>
              <td><span>380</span></td>
              <td><span>$38k</span></td>
              <td className="action-buttons">
                <button className="view-btn"><FaEye /></button>
                <button className="edit-btn"><FaPencil /></button>
                <button className="delete-btn"><MdDelete /></button>
              </td>
            </tr>
        
        </tbody>
      </table>
    </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellingProducts;
