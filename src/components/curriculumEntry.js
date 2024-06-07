import React from 'react';

export const ProjectsEntry = ({ name, title, company, description, tags }) => {
  return (
    <div className="flex mx-auto">
      <div className="flex place-items-start justify-center text-sm p-4 pt-5 w-1/4">{name}</div>
      <div className="flex flex-col place-items-start p-4 w-3/4">
        <h2 className="text-xl font-medium">{title}</h2>
        <h3 class="text-lg">{company}</h3>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
};

export const EducationEntry = ({ date, university, degree, description, tags }) => {
  return (
    <div className="flex mx-auto">
      <div className="flex place-items-start justify-center text-sm p-4 pt-5 w-1/4">{date}</div>
      <div className="flex flex-col place-items-start p-4 w-3/4">
        <h2 className="text-xl font-medium">{university}</h2>
        <h3 class="text-lg italic">{degree}</h3>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
};

export const PublicationEntry = ({ name, title, authors, journal, description, tags }) => {
  return (
    <div className="flex mx-auto">
      <div className="flex place-items-start justify-center text-sm p-4 pt-5 w-1/4">{name}</div>
      <div className="flex flex-col place-items-start p-4 w-3/4">
        <h2 className="text-xl font-medium">{title}</h2>
        <p>{authors}</p>
        <p className='italic'>{journal}</p>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
  
};

export const ConferenceEntry = ({ date, title, authors, journal, description, tags }) => {
  return (
    <div className="flex mx-auto">
      <div className="flex place-items-start justify-center text-sm p-4 pt-5 w-1/4">{date}</div>
      <div className="flex flex-col place-items-start p-4 w-3/4">
        <h2 className="text-xl font-medium">{title}</h2>
        <p>{authors}</p>
        <p className='italic'>{journal}</p>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
  
};