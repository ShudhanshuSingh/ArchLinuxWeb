import React from "react";
import { Faq } from "../Faq/Faq";
import Features from "../Features/Features";

import Header from "../Header/Header";
import ImageGallery from "../Images/ImageGallery";

import Stats from "../Stats/Stats";
import { Team } from "../Team/Team";
import Testimonials from "../Testimonials/Testimonials";

function Main() {
  return (
    <div>
      <Header />
      <Stats />
      <Features />
      <ImageGallery />
      <Testimonials />
      <Team />
      <Faq />
    </div>
  );
}

export default Main;
