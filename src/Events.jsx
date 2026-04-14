import { useState } from "react";

function Events() {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [events, setEvents] = useState([
  {
    id: 1,
    eventName: "Hackathon",
    date: "2026-04-20",
    type: "Tech 💻"
  },
  {
    id: 2,
    eventName: "Annual Fest",
    date: "2026-04-25",
    type: "Cultural 🎭"
  },
  {
    id: 3,
    eventName: "Football Match",
    date: "2026-04-28",
    type: "Sports ⚽"
  }
]);
  const addEvent = () => {
    if (!eventName || !date || !type) return;

    const newEvent = {
      id: Date.now(),
      eventName,
      date,
      type
    };

    setEvents([...events, newEvent]);

    setEventName("");
    setDate("");
    setType("");
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <div className="card">
      <h1>Manage Events 🎯</h1>

      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="">Select Type</option>
        <option value="Tech">Tech 💻</option>
        <option value="Cultural">Cultural 🎭</option>
        <option value="Sports">Sports ⚽</option>
      </select>

      <button onClick={addEvent}>Add Event</button>

      <div style={{ marginTop: "20px" }}>
        {events.map((e) => (
          <div key={e.id} className="event-item">
            <p><b>{e.eventName}</b></p>
            <p>{e.date}</p>
            <p>{e.type}</p>
            <button onClick={() => deleteEvent(e.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;