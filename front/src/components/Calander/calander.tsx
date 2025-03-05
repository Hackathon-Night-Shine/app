import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function GoogleCalendar() {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const calendarID = "primary";
  const CLIENT_ID =
    "1026926080882-g4hhc1f7kek176kolh4r0bi1v995aq23.apps.googleusercontent.com";
  const API_KEY = "AIzaSyAfE7mN8qFIGRTYMWkNMlp6vijcTuXY0b0";
  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  useEffect(() => {
    const loadGapiAndInitialize = () => {
      gapi.load("client:auth2", initializeGapiClient);
    };

    const initializeGapiClient = async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: [DISCOVERY_DOC],
        scope: SCOPES,
      });

      if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
        await gapi.auth2.getAuthInstance().signIn();
      }

      getEvents();
    };

    loadGapiAndInitialize();
  }, []);

  const getEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: calendarID,
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      });

      const events = response.result.items.map((event) => ({
        id: event.id,
        title: event.summary,
        start: event.start.dateTime || event.start.date,
        end: event.end.dateTime || event.end.date,
        description: event.description,
        location: event.location,
      }));
      setEvents(events);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div style={{ position: "relative", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        My Google Calendar
      </h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
      />

      {showModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2 style={styles.title}>
              {selectedEvent?.title || "Event Details"}
            </h2>
            <p>
              <strong>Start:</strong> {selectedEvent?.start?.toLocaleString()}
            </p>
            <p>
              <strong>End:</strong> {selectedEvent?.end?.toLocaleString()}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {selectedEvent?.extendedProps?.description ||
                "No description available"}
            </p>
            <p>
              <strong>Location:</strong>{" "}
              {selectedEvent?.extendedProps?.location ||
                "No location specified"}
            </p>
            <button style={styles.button} onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    width: "40%",
    minWidth: "300px",
    textAlign: "center",
    animation: "fadeIn 0.3s ease-in-out",
  },
  title: {
    marginBottom: "15px",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default GoogleCalendar;
