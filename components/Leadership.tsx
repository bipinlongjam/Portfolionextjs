import React from 'react'
import ImageSlider from './ui/ImageSlider'



const Leadership = () => {

    const imageUrls = [
        'https://www.sectorlink.com/img/blog/web-devel-important.jpg',
        'https://www.codeproject.com/KB/testing/1002904/Test-URL-Redirects-r-700.png',
        'https://www.ranktank.org/wp-content/uploads/2020/06/mobile-friendly-serp-testing-seo-tool-run-query.png'
      ]
  

  return (
    <div className="w-full">
    <h1 className="heading mb-5">
      Leadership
    </h1>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600  p-4">
    {/* Left side with text */}
    <div className="w-full md:w-1/2 h-screen mt-20">
      <p className="text-xl leading-relaxed text-white text-thin font-serif">
      As a React developer with leadership experience, 
      I bring technical expertise, project management skills, and
      strong communication abilities. I have a proven track record in building large-scale applications, 
      optimizing performance, and implementing best practices. My experience includes leading teams,
      managing timelines and budgets, and ensuring timely, high-quality delivery. 
      I excel at effective communication with team members, stakeholders, and clients, and
      provide clear, constructive feedback. Passionate about mentoring, I help developers grow their skills. I stay current with the latest in React and related technologies, 
      fostering innovation and a collaborative work environment.
      </p>
    </div>

    {/* Right side with image slider */}
    <div className="w-full md:w-1/2 h-screen">
     <ImageSlider images={imageUrls}/>
     
    </div>
  </div>
  </div>
  )
}

export default Leadership
