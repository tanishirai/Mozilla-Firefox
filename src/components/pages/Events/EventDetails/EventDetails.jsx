import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EventDetailsCard from "./EventDetailsCard";

const EventDetails = () => {
  const [event, setEvent] = useState({});

  const { id } = useParams();
  const idInt = parseInt(id);

  const events = useLoaderData();

  const eventsData = events.events;

  useEffect(() => {
    const findEvent = eventsData?.find((event) => event.id === idInt);

    setEvent(findEvent);
  }, [idInt, eventsData]);

  return (
    <div>
      <EventDetailsCard event={event} />
      <div className="h-screen">
        <EventView />
      </div>
      {/* <ThreeJs /> */}
    </div>
  );
};

export default EventDetails;
