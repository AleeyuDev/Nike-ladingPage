import {
  Services,
  Hero,
  CustomerReviews,
  Footer,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  PopularProducts,
  Nav,
} from "./Sections/index";

const App = () => {
  return (
    <>
      <main className="relative mx-auto container my-auto ">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-slate-100 padding  rounded-[15px]">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding-l bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
