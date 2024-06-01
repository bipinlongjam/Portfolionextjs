"use client"

import React, { useState } from 'react';

const Skills = () => {
    const [technicalSkills, setTechnicalSkills] = useState([
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 70 },
        { name: 'HTML', level: 85 },
        { name: 'React', level: 70 },
        { name: 'Tainwind', level: 60 },
        { name: 'Java', level: 70 },


        // Add more technical skills as needed
    ]);

    const [softSkills, setSoftSkills] = useState([
        { name: 'Communication', level: 90 },
        { name: 'Teamwork', level: 85 },
        { name: 'Problem Solving', level: 80 },
        { name: 'Time Management', level: 85 },
        // Add more soft skills as needed
    ]);

    const [selectedCategory, setSelectedCategory] = useState('technical');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='py-20 w-full bg-blue-200' id="skills">
            <h1 className="heading mb-5 text-black">
            Skills
            </h1> 
        <div className="flex justify-center rounded-lg p-4">
        <div className="w-full md:w-2/3 p-4 rounded-lg">
                <div className=" w-full flex justify-center mb-4">
                    <button
                        className={`mr-4 px-4 py-2 rounded-full ${selectedCategory === 'technical' ? 'bg-blue-500 text-white' : 'text-black bg-gray-200'}`}
                        onClick={() => handleCategoryChange('technical')}
                    >
                        Technical Skills
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'soft' ? 'bg-blue-500 text-white' : ' text-black bg-gray-200'}`}
                        onClick={() => handleCategoryChange('soft')}
                    >
                        Soft Skills
                    </button>
                </div>
                <div>
                    {selectedCategory === 'technical' ? (
                        <div>
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="mb-2">
                                    <div className="flex justify-between text-black items-center">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full">
                                        <div className="bg-blue-500  text-xs leading-none py-1 rounded-full" style={{ width: `${skill.level}%` }}>
                                            <div className="h-full bg-blue-500"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            {softSkills.map((skill, index) => (
                                <div key={index} className="mb-2">
                                    <div className="flex justify-between text-black items-center">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full">
                                        <div className="bg-blue-500 text-xs leading-none py-1 rounded-full" style={{ width: `${skill.level}%` }}>
                                            <div className="h-full bg-blue-500"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;
