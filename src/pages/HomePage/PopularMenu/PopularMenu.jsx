import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-24">
      <SectionTitle subHeading={"Check it out"} heading={"From Our Menu"} />
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center mt-16">
        <button className="btn btn-outline border-0 border-b-4 ">
          View Full Menu
        </button>
      </div>
      <div className="bg-black text-white h-[200px] flex justify-center items-center mt-32">
        <h1 className="text-5xl ">Call Us: 0166516541654</h1>
      </div>
    </section>
  );
};

export default PopularMenu;
