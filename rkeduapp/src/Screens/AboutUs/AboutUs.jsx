import React, { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import "./AboutUs.css";

import about from "../../Assets/about-img.jpeg";
import quality from "../../Assets/qualit.png";
import integrity from "../../Assets/INTEGRITY.png";
import excellence from "../../Assets/EXCELLENCT.png";
import trust from "../../Assets/trust.png";
import honesty from "../../Assets/trust-image.png";
import respect from "../../Assets/respect-img.png";
import teamwork from "../../Assets/team-work-removebg.png";
import leadingChange from "../../Assets/leading-change.png";
import learning from "../../Assets/learn-and-growth.png";

const cardData = [
  {
    title: "QUALITY",
    img: quality,
    backText:
      "We take pride in doing things right the first time, delivering results that reflect care and craftsmanship.",
  },
  {
    title: "INTEGRITY",
    img: integrity,
    backText:
      "We do what is right, not what is easy—even when no one is watching.",
  },
  {
    title: "EXCELLENCE",
    img: excellence,
    backText: "We push beyond expectations with passion and focus .",
  },
  {
    title: "TRUST",
    img: trust,
    backText:
      "We build trust through consistency, transparency, and follow-through.",
  },
  {
    title: "HONESTY",
    img: honesty,
    backText: "We speak the truth with respect, always being open and sincere.",
  },
  {
    title: "RESPECT FOR INDIVIDUAL",
    img: respect,
    backText:
      "We treat everyone with empathy, dignity, and appreciation for their uniqueness.",
  },
  {
    title: "TEAMWORK",
    img: teamwork,
    backText:
      "Together we achieve more by sharing goals, supporting one another, and growing as one.",
  },
  {
    title: "Leading CHANGE",
    img: leadingChange,
    backText: "We welcome change with creativity and courage, always evolving.",
  },
  {
    title: "learning and GROWTH",
    img: learning,
    backText:
      "We constantly seek new knowledge, improve our skills, and inspire progress.",
  },
];

const values = [
  {
    title: "QUALITY",
    description: "We deliver results that reflect care and craftsmanship.",
  },
  {
    title: "INTEGRITY",
    description: "We do what is right, not what is easy.",
  },
];

const AboutUs = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div>
        <Header />

        <div className="aboutuscontainer-blabkground">
          <div className="aboutuscontainer">ABOUT US</div>
        </div>
        <div className="aboutus-background">
          <img src={about} alt="About Us" className="aboutus-img" />
          <div className="overlay"></div>
          <div className="aboutus-content">
            <p className="aboutus-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              laborum consectetur quas, aliquam alias voluptatum excepturi est,
              quia dolor nam eum earum. Error pariatur ratione deleniti ab porro
              quod, suscipit corporis, laboriosam adipisci mollitia quisquam
              nostrum quos quae iste architecto doloremque omnis. Fugit quam
              tempore vero veritatis eveniet eum molestias. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Porro modi iure obcaecati
              laborum, autem dolores? Enim magnam dolor odit temporibus.
            </p>
          </div>
        </div>

        <div className="aboutuscontainer-blabkground">
          <h1 className="aboutuscontainer">BRIEF HISTORY</h1>
        </div>
        <p className="aboutus-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sapiente tenetur nam quas vel excepturi sint fugiat perferendis?
          Voluptate, repudiandae. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Suscipit aliquid recusandae totam dolores
          voluptatibus commodi a alias eligendi. Deserunt quidem veritatis
          distinctio pariatur itaque iure, quam, inventore quod nam maxime
          provident earum, facilis recusandae ipsa id ut natus incidunt
          exercitationem iusto animi. Sunt, molestiae, voluptatum autem quam
          praesentium in, odio ea dolorem asperiores perferendis minus et
          aliquid? Labore reprehenderit, esse odit, voluptatem nobis adipisci
          laborum nesciunt fuga officia, vitae expedita.
        </p>

        <div className="aboutuscontainer-blabkground">
          <h1 className="aboutuscontainer">VALUES</h1>
        </div>
        <div className="aboutus-values">
          {values.map((value) => (
            <div className="aboutus-value-box" key={value.title}>
              <h2 className="aboutus-value-title">{value.title}</h2>
              <p className="aboutus-value-description">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="aboutuscontainer-blabkground">
          <h1 className="aboutuscontainer"> CORE VALUES</h1>
        </div>

        <div className="grid">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`card ${flippedCards[index] ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img
                    src={card.img}
                    alt={card.title}
                    className={`icon ${card.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}-icon`}
                  />
                  <h3>{card.title}</h3>
                </div>
                <div className="card-back">
                  <p>{card.backText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
