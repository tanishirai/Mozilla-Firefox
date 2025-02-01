import { useLoaderData } from "react-router-dom";

import EventsPage from "./EventsPage";

const AllEvents = () => {
  const eventsData = useLoaderData();

  const data = eventsData.events;

  return (
    <div>
      <div className="hero min-h-[25vh] bg-[#28297D]">
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Events</h1>
            <p className="mb-5">Join our Events</p>
            <span>
          <progress className="progress w-32 custom-progress-bar"></progress>
        </span>
          </div>
        </div>
      </div>
      <div>
        <EventsPage eData={data} />
      </div>
    </div>
  );
};

export default AllEvents;
