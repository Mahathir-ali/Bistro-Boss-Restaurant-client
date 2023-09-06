import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg, height }) => {
  return (
    <div className="pt-8">
      {title && (
        <Cover backgroundImg={coverImg} height={height} title={title} />
      )}
      <div className="grid md:grid-cols-2 gap-4 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 text-black ">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
