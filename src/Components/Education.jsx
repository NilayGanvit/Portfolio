import React from "react";

import image from "../images/update-logo.png";

const imageAltText = "IIT Indore Logo";

const EducationList = [
    {
        title: "Indian Institute of Technology, Indore",
        description: "Bachelor of Technology, Computer Science & Engineering",
        url: "https://www.iiti.ac.in/",
    },
    {
        title: "Indian Institute of Technology, Indore",
        description: "Minor in Humanities and Social Sciences, Economics",
        url: "https://www.iiti.ac.in/",
    },
    {
        title: "ALLEN career Institute, Kota",
        description: "High School",
        url: "https://www.allen.ac.in/",
    },
    {
        title: "Saraswati International Scholl, Valsad",
        description: "Primary School",
        url: "https://www.sisvalsad.com/",
    },
];

const Education = () => {
      return (
        <section className="padding" id="education">
            <h2 style={{ textAlign: "center" }}>Education</h2>
            <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
                <div className="container">
                    {EducationList.map((education) => (
                        <div className="box" key={education.title}>
                            <a href={education.url} target="_blank" rel="noopener noreferrer">
                                <h3 style={{ flexBasis: "40px" }}>{education.title}</h3>
                            </a>
                            <p className="small">{education.description}</p>
                        </div>
                    ))}
                </div>
                <div style={{ maxWidth: "40%", alignSelf: "center" }}>
                    <img
                        src={image}
                        style={{
                            height: "90%",
                            width: "100%",
                            objectFit: "cover",
                            animation: "1s ease-out 0s 1 slideIn",
                        }}
                        alt={imageAltText}
                    />
                </div>
            </div>
        </section>
  );
}

export default Education;