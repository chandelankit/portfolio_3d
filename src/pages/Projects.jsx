import React from 'react';


import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I have made and contributed to a bunch of amazing projects but here are the best ones.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='3d portfolio'
                  className='w-10 h-10 object-cover rounded-md'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-3 items-center gap-2'>

                <h5  className='font-semibold font-poppins'>Tech Stack:</h5>
                <p className='text-slate-500'>{project.techStack}</p>
                </div>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.gitLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Git Repo Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>

              {project.name !== 'Bin2Bite' && (
  <div className='mt-5 flex items-center gap-2 font-poppins'>
    <Link
      to={project.liveLink}
      target='_blank'
      rel='noopener noreferrer'
      className='font-semibold text-blue-600'
    >
      Live WebApp
    </Link>
    <img
      src={arrow}
      alt='arrow'
      className='w-4 h-4 object-contain'
    />
  </div>
)}



            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;