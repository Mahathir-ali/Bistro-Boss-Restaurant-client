import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salads", "Pizza", "soups", "Dessert", "drinks"];
  const { category } = useParams();
  console.log(category);
  const initialIndex = categories.indexOf(category);
  console.log(initialIndex);
  const [tabIdex, setTabIdex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food </title>
      </Helmet>
      <Cover backgroundImg={orderCover} height={"600px"} title={"Order food"} />
      <Tabs
        // className="p-10"
        defaultIndex={tabIdex}
        onSelect={(index) => setTabIdex(index)}
      >
        <TabList className="text-center my-10">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
