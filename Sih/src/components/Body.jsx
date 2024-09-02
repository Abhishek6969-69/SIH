import React from "react";

function Body() {
  return (
    <div className="  text-black  bg-[#0D0A2C]">
      <div className='bg-[url("https://imageio.forbes.com/specials-images/imageserve/5e020def4e2917000783d582/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds")] w-[1300px] bg-no-repeat mt-[-64px] bg-cover  h-[630px]'>
        <div className=" mt-16    px-6">
          <h1 className=" text-[4rem] max-w-[900px] capitalize ">
            Welcome to the Alumni-Student Interaction Platform
          </h1>
        </div>
        <div className=" mt-20 ml-8">
          <p className=" text-[2rem] capitalize">
            Connecting the Past, Inspiring the Future
          </p>
          <button className="  ml-10 mt-20 px-4 py-3 w-36  rounded-md capitalize bg-pink-400">
            Sign Up
          </button>
        </div>
      </div>
      <div className=" text-white bg-[rgb(13,10,44)]   opacity-95 mx ">
        <div className="  text-[4rem]  py-12 px-8 mx-7">
          {" "}
          <h1>Why Join the Platform?</h1>
        </div>

        <div className=" grid grid-cols-2 px-8 gap-2 gap-y-3 p-2 mx-8 ">
          <div className=" border max-w-lg p-6">
            <h2 className="  font-bold text-[20px]">Enhance Alumni Engagement</h2>
            <p>
              Stay connected with your alma mater and contribute to the success
              of current students.
            </p>
          </div>
          <div className=" border max-w-lg p-6">
            <h2 className=" font-bold">Mentorship and Guidance</h2>
            <p>
              Inspire the next generation with your knowledge and expertise.
            </p>
          </div>
          <div className=" border max-w-lg p-6 ">
            <h2 className=" font-bold">Build a Supportive Network</h2>
            <p>Create lifelong connections with fellow alumni and students.</p>
          </div>
          <div className=" border max-w-lg p-6">
            <h2 className=" font-bold">Access Valuable Resources</h2>
            <p>
              Find career guidance, industry trends, and real-world advice from
              experts.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#0D0A2C]  text-white">
        <div className=" ">
            <h1 className="text-[4rem]  py-12 px-8  mx-8">Features of the Platform</h1>
        </div>
        <div className=" grid grid-cols-3     mx-16">
            <div className=" p-5 border">
                <h1 className=" text-[25px]  font-bold">Centralized Alumni Database</h1>
                <p>A comprehensive and up-to-date database that allows easy tracking of alumni profiles, including contact details, career paths, and areas of expertise.</p>
            </div>
            <div className=" p-5 border">
            <h1 className=" text-[25px]  font-bold">Engagement and Interaction</h1>
            <p className=" mt-3">Engage through discussion forums, mentorship programs, and interactive sessions designed to bring alumni and students closer.</p>
            </div>
            <div className=" p-5 border">
            <h1 className=" text-[25px]  font-bold">Career Guidance and Placement Assistance</h1>
            <p>Access career guidance sessions, resume reviews, and placement assistance to help students prepare for the job market with confidence</p>
            </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 bg-[#0D0A2C]  mt-16  mx-12 text-white">
        <div className=" border col-span-2">
            <div>
                <h1 className=" text-[45px]">Ensuring a Safe and Secure Environment</h1>
            </div>
            <div className=" border p-6">
                <h2 className="  text-[25px]  font-bold">Verified Profiles</h2>
                <p>We use blockchain technology and rigorous verification processes to ensure the authenticity of all profiles, creating a safe space for genuine interactions.</p>
            </div>
            <div className=" border p-6">
                <h2 className="  text-[25px]  font-bold">Content Moderation</h2>
                <p>Our platform leverages AI-driven tools to detect and filter inappropriate or harmful content, ensuring a respectful and constructive community experience.</p>
            </div>
            <div className=" border p-6">
                <h2 className="  text-[25px]  font-bold">AI-Powered Chatbots</h2>
                <p>Get instant answers to your questions with our AI-driven chatbots. From navigating the platform to career advice, we’re here to help 24/7.</p>
            </div>
        </div>
        <div className=" border">
            <img className=" bg-cover h-[450px] p-6" src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2024-03/Blockchain%20Technology.jpg " />
        </div>
      </div>
      <div className=" mt-16  mx-12 text-white max-w-5xl ">
        <div>
            <h1 className="text-[45px]">Join the Community</h1>
        </div>
        <p className=" text-[20px]">Whether you're an alumni or a current student, our platform offers a unique opportunity to connect, learn, and grow together. Sign up today and be part of a vibrant and supportive community that's shaping the future.</p>
      </div>
    </div>
  );
}

export default Body;
