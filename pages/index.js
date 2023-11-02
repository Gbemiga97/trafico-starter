// import components

import { About, Copyright, Faq, Footer, Hero, How, Testimonials } from "../sections";


// import data

const Home = () => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero />
      <About />
      <How />
      <Faq />
      <Testimonials />
      <Footer />
      <Copyright />
    </div>
  );
};

// get data.json
export default Home;
