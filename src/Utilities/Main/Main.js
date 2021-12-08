import React from "react";
import { Faq } from "../Faq/Faq";
import Features from "../Features/Features";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import ImageGallery from "../Images/ImageGallery";
import Navbar from "../Navbar/Navbar";
import Stats from "../Stats/Stats";
import { Team } from "../Team/Team";
import Testimonials from "../Testimonials/Testimonials";

function Main() {
  return (
    <div>
      <Navbar />
      <Header />
      <Stats />
      <Features />
      <ImageGallery />
      <Testimonials />
      <Team />
      <Faq />
      {/* <Footer /> */}
    </div>
  );
}

export default Main;
