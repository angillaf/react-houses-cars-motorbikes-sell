import HouseImg from "../assets/imgs/description-section/house.jpg";
import LamboImg from "../assets/imgs/description-section/lambo1.jpg";
import MotoImg from "../assets/imgs/description-section/moto.jpg";
const Description = () => {
  return (
    <section className="ml-16 mr-12 flex max-w-[800px] flex-col items-center justify-center gap-4 self-center description-section:flex-row description-section:gap-20">
      <div className="flex-col items-center justify-center gap-3 description-section:w-3/5">
        <div className="flex w-full flex-col items-center justify-center  description-section:gap-3">
          <h2 className="text-4xl font-bold text-neutral-700">Who are us ?</h2>
          <h3 className="text-center text-2xl description-section:flex">
            The solution to buy Houses, Cars & Motorcycles
          </h3>
        </div>
        <p className="text-xl first-letter:text-3xl first-letter:font-bold">
          Houses, Cars and Motorbikes are our speciality. Embark on an exciting
          journey with us as you explore our expansive marketplace, designed to
          cater to all your needs when it comes to acquiring new assets. Whether
          you're in search of your dream home, a reliable car for your daily
          commute, or an exhilarating motorbike for your adventures, we've got
          you covered. Our platform boasts a diverse selection of properties,
          vehicles, and bikes, ensuring there's something for everyone. With our
          intuitive interface and dedicated customer service, we strive to make
          your buying experience both convenient and enjoyable. Trust us to be
          your trusted partner in this exciting chapter of your life, as you
          find the perfect asset to complement your lifestyle!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 description-section:w-2/5">
        <img
          src={HouseImg}
          alt="House Image for the description"
          className="h-64 w-full cursor-pointer rounded-lg border border-default-black transition duration-300 ease-out hover:z-10 hover:-skew-y-3 hover:scale-110"
        />
        <div className="flex gap-2">
          <img
            src={LamboImg}
            alt="Lamborghini Image for the description"
            className="h-80 w-6/12 cursor-pointer rounded-lg border border-default-black transition duration-300 hover:z-10 hover:-skew-y-3 hover:scale-110"
          />
          <img
            src={MotoImg}
            alt="Moto Image for the description"
            className=" h-80 w-[48%] cursor-pointer rounded-lg border border-default-black transition duration-300 hover:z-10 hover:-skew-y-3 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};
export default Description;