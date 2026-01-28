/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/the-cleveland-museum-of-art-Z3e8Bl4s6yM-unsplash.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Computer Science student studying at Indian Institute of Technology Indore. I enjoy creating unique alphas and simplify user lives in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Quantitative Analytics",
  "Software Development",
  "Cybersecurity",
  "Supply Chain Management",
  "Machine Learning",
  "Database Design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new logical ways to drive mankind. By leveraging my Quant experience I continually look for new and better ways to make tech caputre the markets.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} loading="lazy" />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            listStyle: "none",
            paddingLeft: 0,
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ marginBottom: "0.5rem" }}>
              ✓ {skill}
            </li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", fontStyle: "italic" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
