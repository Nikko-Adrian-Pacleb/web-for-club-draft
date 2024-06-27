"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import EventCard from "./cards/EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        // Convert Firestore timestamps to JavaScript Date objects
        const convertedData = data.map((event) => ({
          ...event,
          datetime: new Date(
            event.datetime.seconds * 1000 + event.datetime.nanoseconds / 1000000
          ),
        }));
        setEvents(convertedData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Upcomming Events</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            about={event.about}
            location={event.location}
            advisors={event.advisors}
            imgLink={event.imgLink}
            datetime={event.datetime}
          />
        ))}
      </div>
    </div>
  );
}
