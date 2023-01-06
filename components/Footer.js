import Image from "next/image";
import logo from "../assets/img/black logo.png";

const Footer = () => {
  return (
    <div className="footer bg-[#000] flex flex-col pt-[60px] pb-[30px] text-sm md:text-base">
      <div className="list text-opacity-50">
        <div className="w-[100%] md:w-[40%] text-center">
          <Image
            src={logo}
            className="w-[70%] md:w-[100%] mb-8"
            alt="product"
            width={300}
            // height={300}
          />
        </div>
        <div className="w-[50%] md:w-[20%] my-8">
          <h3>Shop</h3>
          <p>All</p>
          <p>fat burning</p>
          <p>energy</p>
          <p>wellness</p>
        </div>
        <div className="w-[50%] md:w-[20%] my-8">
          <h3>Support</h3>
          <p>track my order</p>
          <p>shipping information</p>
          <p>terms and conditions</p>
          <p>return policy</p>
          <p>contact us</p>
        </div>
        <div className="w-[100%] md:w-[20%]">
          <h3>Blog</h3>
          <p>Nutrition</p>
          <p>shipping information</p>
          <p>terms and conditions</p>
          <p>return policy</p>
          <p>contact us</p>
        </div>
      </div>
      <div className="mx-auto w-[90%]">
        <div className=" mx-auto">
          <div className="border border-white px-[20px] py-[20px] text-center">
            <p className="text-white capitalize">
              These statement have not being evaluated by the food and drug
              administration. These products are intented to diagoneed to treat,
              cure, or prevent any disease.
            </p>
          </div>
        </div>
        <p className="text-white text-right mt-5">@ 2023, Janis</p>
      </div>
    </div>
  );
};

export default Footer;
