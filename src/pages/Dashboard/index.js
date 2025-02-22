import React from "react";
import { Chart } from "react-google-charts";
import { FaBoxOpen, FaShoppingCart, FaStar, FaUser } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import BestSellinProducts from "../../components/BestSellingProducts/BestSellingProducts";
import Boxmenu from "../../components/Boxmenu/Boxmenu";
// Box Data Array

const options = {
  backgroundColor: "transparent",
  colors: ["#ffffff"], // Line color
  lineWidth: 3,
  hAxis: {
    textStyle: { color: "#ffffff" },
    gridlines: { color: "transparent" },
  },
  vAxis: {
    textStyle: { color: "#ffffff" },
    gridlines: { color: "rgba(255,255,255,0.2)" },
  },
  legend: { position: "none" },
  chartArea: { width: "90%", height: "80%" },
};
const data = [
  ["Month", "Sales"],
  ["Jan", 20000],
  ["Feb", 45000],
  ["Mar", 78000],
  ["Apr", 120000],
  ["May", 95000],
  ["Jun", 110000],
  ["Jul", 150000],
  ["Aug", 180000],
  ["Sep", 160000],
  ["Oct", 200000],
  ["Nov", 250000],
  ["Dec", 300000],
];

const boxesData = [
  {
    title: "Total Users",
    value: 277,
    growth: 95,
    icon: <FaUser className="box-icon" />,
    color: "#28a745",
  },
  {
    title: "Total Orders",
    value: 338,
    growth: 30,
    icon: <FaShoppingCart className="box-icon" />,
    color: "#d633ff",
  },
  {
    title: "Total Products",
    value: 557,
    growth: 25,
    icon: <FaBoxOpen className="box-icon" />,
    color: "#007bff",
  },
  {
    title: "Total Reviews",
    value: 166,
    growth: 45,
    icon: <FaStar className="box-icon" />,
    color: "#ffca2c",
  },
];

const salesData = {
  totalSales: 3787681,
  salesGrowth: 40.63,
  lastMonthSales: 3578.9,
};

const Dashboard = () => {
  return (
    <>
      <section>
        <div className="dashboard-container">
          <div className="right">
            <div className="right-content">
              <div className="heading">
                <h4>ECOMMERCE</h4>
              </div>

              <div className="boxes">
                <div className="left-boxes">
                  {boxesData.map((box, index) => (
                    <div
                      key={index}
                      className="box"
                      style={{ background: box.color }}
                    >
                      <div className="box-content">
                        <h4>{box.title}</h4>
                        <h2>{box.value}</h2>
                        <p className="growth">
                          <span>+{box.growth}%</span> Last Month
                        </p>
                      </div>
                      <div className="box-icons">
                        {" "}
                        {box.icon}
                        <Boxmenu />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="right-box">
                  <div className=" box5">
                    <div className="box5-head">
                      <h4>Total Sales</h4>
                      <Boxmenu />
                    </div>

                    <h2>
                      ${salesData.totalSales.toLocaleString()}{" "}
                      <span className="up">
                        {salesData.salesGrowth}% <IoIosArrowUp />
                      </span>
                    </h2>
                    <p>
                      ${salesData.lastMonthSales.toLocaleString()} in last month
                    </p>
                    <div className="chart-placeholder">
                      <Chart
                        chartType="AreaChart"
                        width="100%"
                        height="170px"
                        data={data}
                        options={options}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

<br/>

            <div className="bestSp">
            <BestSellinProducts/>
          </div>
            
          </div>
         
          
        </div>
      </section>
    </>
  );
};

export default Dashboard;
