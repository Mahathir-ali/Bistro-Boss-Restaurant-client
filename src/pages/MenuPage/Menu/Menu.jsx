import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuCover from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import saladsBg from "../../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover backgroundImg={menuCover} height={"600px"} title={"Our Menu"} />
      <SectionTitle subHeading={"don't miss"} heading={"today's offer"} />
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu */}
      <MenuCategory
        items={desserts}
        title={"Dessert"}
        coverImg={dessertBg}
        height={"500px"}
      />
      <MenuCategory
        items={pizzas}
        title={"Pizza"}
        coverImg={pizzaBg}
        height={"500px"}
      />
      <MenuCategory
        items={salads}
        title={"salads"}
        coverImg={saladsBg}
        height={"500px"}
      />
      <MenuCategory
        items={soups}
        title={"soups"}
        coverImg={soupBg}
        height={"500px"}
      />
    </div>
  );
};

export default Menu;
