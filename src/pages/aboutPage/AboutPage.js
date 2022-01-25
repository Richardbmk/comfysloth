import React from "react";
import Wrapper from "./aboutPage-style";
import { PageHero } from "../../components";
import aboutImg from "../../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            illum aliquid quod quibusdam architecto aliquam earum, facere
            distinctio esse recusandae at quae, odit exercitationem consectetur
            placeat? Expedita natus delectus harum voluptates, blanditiis eius
            non fugiat quas odio alias ipsa labore aspernatur maiores
            accusantium vero nam ullam similique culpa soluta ea!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
