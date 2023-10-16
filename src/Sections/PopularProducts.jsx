import PopularProductCard from "../componenets/PopularProductCard";
import { products } from "../constant/index";

const PopularProducts = () => {
  return (
    <section id="products" className="mx-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className="text-green-800"> Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-400 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          hic odit ullam quaerat a qui.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
