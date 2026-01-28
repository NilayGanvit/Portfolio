/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/melody-zimmerman-Mn1CIHBSnJs-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Term Deposit Prediction",
    description:
      "Trained a Machine Learning model to detect if clients will make a term deposit or not with upto 97.15% accuracy",
    url: "https://github.com/NilayGanvit/CS304N",
  },
  {
    title: "Quantitative & Algorithmic Trading",
    description:
      "Created Strategies to recommend trades and reduce risk to get upto 21.83% returns and downto 3.15% drawdowns.",
    url: "https://github.com/NilayGanvit/Algo-trading",
  },
  {
    title: "Credit Card Default Prediction",
    description:
      "Trained Machine Learning model that can predict whether a person a customer will default on a credit card payment",
    url: "https://github.com/NilayGanvit/cynaptics",
  },
  {
    title: "Hospital Management System",
    description:
      "A PHP web portal hosted using XAMPP that serves as a centralized healthcare for Doctors,Patients and Hospitals.",
    url: "https://github.com/NilayGanvit/Hospital-Management-Project",
  },
  {
    title: "Hostel Management System",
    description:
      "This web portal acts as an centralised website for 5 Hostels of IIT Indore and management for the wardens.",
    url: "https://github.com/NilayGanvit/Hostel-Management-System",
  },
  {
    title: "Face Mask Detection",
    description:
      "Trained a Machine Learning model that can detect whether a person is wearing a mask or not with 93.88\% accuracy",
    url: "https://github.com/NilayGanvit/IITISoC",
  },
  {
    title: "Supply Chain Opitimization",
    description:
      "Implemented Mixed Integer Linear Program (MILP) to optimize Industrial Chemical supply chain",
    url: "https://github.com/NilayGanvit/CS307",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to Azure Static Web Apps. Includes my experience and design abilities.",
    url: "https://happy-stone-084d72300.4.azurestaticapps.net",
  },
  {
    title: "GitHub",
    description:
      "See all my Projects, Contributions and Things I have learnd from my Courses and Assignments",
    url: "https://github.com/NilayGanvit",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", minWidth: "300px" }}>
          <img
            src={image}
            loading="lazy"
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
              borderRadius: "8px",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container" style={{ maxWidth: "50%" }}>
          {projectList.map((project, index) => (
            <div
              className="box"
              key={project.title}
              style={{
                animation: `1s ease-out ${index * 0.1}s 1 slideInLeft`,
              }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} project`}>
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
