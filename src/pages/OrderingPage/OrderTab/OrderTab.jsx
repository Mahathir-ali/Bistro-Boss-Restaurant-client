import { useState } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";
import "./ordertab.css";
const ITEMS_PER_PAGE = 6; // Number of items to display per page

const OrderTab = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the items to display on the current page
  const itemsToDisplay = items.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {itemsToDisplay.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>

      <div className="pagination text-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-item ${
              index + 1 === currentPage ? "active" : ""
            } bg-slate-600 mx-3 p-`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
