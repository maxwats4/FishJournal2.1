import React, { useState } from "react";
import "./JournalEntry.css";

const JournalEntryForm = () => {
  // form variables
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [fishCount, setFishCount] = useState(0);
  const [flyUsed, setFlyUsed] = useState("");
  const [journalEntry, setJournalEntry] = useState("");

  const locations = ["River A", "River B", "Lake C", "Pond D", "Stream E"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Location:", location);
    console.log("Date:", date);
    console.log("Number of Fish Caught:", fishCount);
    console.log("Fly Used:", flyUsed);
    console.log("Journal Entry:", journalEntry);
    // Reset form fields after submission
    setLocation("");
    setDate("");
    setFishCount(0);
    setFlyUsed("");
    setJournalEntry("");
  };

  return (
    <div className="journal-entry-form">
      <div className="form-container">
        <div className="header">
          <h2>Journal Entry Submission</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="custom-select">
              <select
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              >
                <option value="">Select Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              id="fish-count"
              name="fish-count"
              value={fishCount}
              onChange={(e) => setFishCount(parseInt(e.target.value) || 0)}
              placeholder="Number of Fish Caught"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="fly-used"
              name="fly-used"
              value={flyUsed}
              onChange={(e) => setFlyUsed(e.target.value)}
              placeholder="Fly Used"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              id="journal-entry"
              name="journal-entry"
              rows="5"
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Journal Entry"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Entry
          </button>
        </form>
      </div>
    </div>
  );
};

export default JournalEntryForm;
