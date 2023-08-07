import { useState } from "react";
import axios from "axios";
import "../project.css";
import jobApp from "../assets/job-app.jpeg";

function Project() {
  const [data, setData] = useState(null);

  const getData = async (area) => {
    let res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=3ba0d5cb39744d22b5c51914232601&q=${area}&days=3&aqi=yes&alerts=yes`
    );

    console.log(res);
    setData(res.data);
  };
  return (
    <div className="projectPage">
      <h1 className="title">Project</h1>
      <div className="projects-grid">
        <ProjectCard
          image={jobApp}
          title="Job Board App"
          link="https://github.com/efahigi/jobApp"
          description={
            "Job Board App is a personal project that I developed for learning and job search experience. " +
            "With its user-friendly interface and diverse job categories, the app connects job seekers with exciting opportunities from various industries. " +
            "You can explore detailed tasks and easily access my application links, "
          }
          tools={["Javascript", "ReactJs", "CSS", "HTML", "Themuse Jobs API"]}
        />
      </div>
    </div>
  );
}
const ProjectCard = ({ image, title, description, tools, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="tools">
        {tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Open Projects
      </a>
    </div>
  );
};
export default Project;
