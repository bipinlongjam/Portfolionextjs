// pages/about.tsx
import Image from 'next/image';
import Photo from '../assets/photo.jpg'
import MagicButton from './ui/MagicButton';

const About = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center" id="about">
    <div className=" w-full flex flex-col rounded-lg sm:flex-row items-center justify-center min-h-screen bg-gray-400 to-blue-400 p-10">
      {/* Left half with the photo */}
      <div className="w-full md:w-1/2 p-4">
        <Image
          src={Photo}
          alt="Your Name"
          width={500} // Adjust the width as needed
          height={500} // Adjust the height as needed
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Right half with the description */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl mb-4 text-black">About Me</h1>
        <p className="text-lg leading-relaxed text-black text-left mb-4">
          Hello! I&apos;m Bipin Longjam, a passionate developer with a love for creating innovative solutions.
          With a background in Engineering.
          I enjoy working on projects that challenge me and allow me to grow my skills.
          In my free time, I love watching movies and sports.
        </p>
        <MagicButton
              title="Resume"
              href="https://www.resume.com"
              icon=""
               position=""
              />
      </div>
      </div>
    </div>
    </div>
  );
};

export default About;
