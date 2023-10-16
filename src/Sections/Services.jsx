import ServiceCard from "../componenets/ServiceCard";
import { services } from "../constant/index";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </section>
  );
};

export default Services;
