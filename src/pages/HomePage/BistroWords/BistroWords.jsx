import serviceImg from "../../../assets/home/chef-service.jpg";

const BistroWords = () => {
  return (
    <div
      className="p-16 mb-32"
      style={{ backgroundImage: `url(${serviceImg})` }}
    >
      <div className="w-[75%]  mx-auto   bg-white">
        <div className="p-16">
          <h1 className="text-4xl text-center pb-4">Bistro BOSS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            nulla quis nam placeat voluptate, velit ex dolorem, dolore autem
            porro pariatur eius vel rerum nisi corporis labore obcaecati sunt!
            Eaque enim deleniti et maxime hic suscipit, similique quas quidem.
            Eos nihil ducimus molestiae earum reprehenderit minus
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroWords;
