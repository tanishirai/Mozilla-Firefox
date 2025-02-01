import { Link } from "react-router-dom";

const AboutUs = () => {
  const events = [
    {
      speaker: {
        speaker_name: "Adam Leno",
        company: "President",
        profile_pic: "https://i.ibb.co/JrPy9XM/profile-1.jpg",
      },
    },
    {
      speaker: {
        speaker_name: "Lopez Kya",
        company: "Vice-President",
        profile_pic: "https://i.ibb.co/xhH5S8P/profile-3.jpg",
      },
    },
    {
      speaker: {
        speaker_name: "Anne Claire",
        company: "General Secretary",
        profile_pic: "https://i.ibb.co/0XmpbKj/profile-6.jpg",
      },
    },
    {
      speaker: {
        speaker_name: "James Bon",
        company: "Lead",
        profile_pic: "https://i.ibb.co/6nd5BsY/Coding-Profile.jpg",
      },
    },
    {
      speaker: {
        speaker_name: "Kang Wook",
        company: "Co-Lead",
        profile_pic: "https://i.ibb.co/qBjhkJC/profile-4.jpg",
      },
    },
    {
      speaker: {
        speaker_name: "Aaron Swift",
        company: "Core Member",
        profile_pic: "https://i.ibb.co/FnYWjjP/Profile-2.jpg",
      },
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-[30vh] bg-[#28297D] relative">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              About Us
            </h1>
            <p className="mb-5 text-lg sm:text-xl text-white">
              The Biggest Event in the World
            </p>
            <span>
              <progress className="progress w-32 custom-progress-bar"></progress>
            </span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="hero mt-12">
        <div className="hero-content flex-col lg:flex-row-reverse px-4 md:px-12 lg:px-26 gap-9">
          {/* Image Section */}
          <img
            src="https://i.ibb.co/p3GymwB/pexels-cowomen-2041627.jpg"
            alt="Tech Strategy"
            className="max-w-full rounded-lg shadow-2xl lg:w-1/2"
          />

          {/* Text Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12">
            <h4 className="border-b-4 border-[#6633B5] w-45 text-5xl font-semibold text-[#75C9C7] mb-4">
              About Us
            </h4>
            <h1 className="md:text-4xl text-2xl font-semibold text-[#c6c1c1] mb-6">
              Empowering Innovation through Open-Source Technology
            </h1>
            <p className="py-4 text-lg text-white text-justify">
              The Mozilla Firefox Club at VIT Bhopal is a community of passionate individuals
              who are dedicated to exploring the world of open-source technologies. Our mission is
              to create an environment where students can collaborate, innovate, and contribute to
              projects that make a difference in the world of technology. We provide opportunities
              for learning, growth, and hands-on experience with the latest in web development,
              programming, and community engagement.
            </p>

            <Link
              to="/events"
              className="text-white mt-4 bg-gradient-to-br from-[#4438E0] to-[#1267CC] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-[#18194D] font-medium rounded-lg text-sm px-6 py-3 text-center w-full lg:w-auto"
            >
              See Events
            </Link>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#75C9C7]">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team consists of passionate individuals who drive our vision forward.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {events.map((event, index) => (
            <div key={index} className="w-full bg-white rounded-lg shadow-xl p-6">
              <img
                src={event.speaker.profile_pic}
                alt={`Speaker ${event.speaker.speaker_name}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-[#9B4EF6]">{event.speaker.speaker_name}</h3>
                <p className="text-md text-gray-600">{event.speaker.company}</p>
                <div className="flex justify-center gap-4 mt-2">
                  <a href="#" className="text-blue-500">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="text-blue-600">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-800">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-black">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
