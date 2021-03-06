import React from 'react';
import projectItems from "../data/projects.json";
import dailyPlanner from "../../images/daily-planner.png"
import projectOne from "../../images/project1.png"
import weatherDashboard from "../../images/weather-dashboard.png"

const Projects = () => {
    const imageArray = [projectOne,dailyPlanner,weatherDashboard]
    return (
        <section className="bg-primary">
            <div className="container p-3">
                <div className="row g-3">
                    {projectItems.map(({ id, title, url, image, description },i) => (
                        <div className="col-lg-6" key={id}>
                            <div className="card h-100">
                                <img src={imageArray[i]} className="card-img-top" alt={`A sample image of the ${title} project`} />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                </div>
                                <div className="card-footer text-end">
                                    <a href={url} target="_blank" className="btn btn-primary">View the Github</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Projects;