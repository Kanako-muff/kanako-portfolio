import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return Array.isArray(project.category) // Checking if "category" is arr or not.
                    ? project.category.includes(item.name) || item.name === 'all'
                    : project.category === item.name || item.name === 'all';
            });            
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                            className={`${active === index ? 'active-work' : ''}
                            work__item`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    );
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default Works;
