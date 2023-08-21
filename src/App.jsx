import React from "react";
import {
  Hero,
  Footer,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
} from "./Sections";
import { Navbar } from "./Components";

const App = () => {
  return (
    <main className="relative">
      <Navbar/>
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
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16  w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x pb-8 padding-t">
        <Footer />
      </section>
    </main>
  );
};

export default App;
