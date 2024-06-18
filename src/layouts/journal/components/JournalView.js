import React, { useState, useRef } from "react";
import "./JournalView.css";

const JournalView = () => {
  // Sample journal entries
  const [entries] = useState([
    {
      id: 1,
      title: "Day 1: Getting Started",
      content: "Today I started my journey in learning React. It was exciting!",
    },
    {
      id: 2,
      title: "Day 2: Components",
      content:
        "Learned about components today. They are the building blocks of a React application.",
    },
    {
      id: 3,
      title: "Day 3: State and Props",
      content: "Today I learned how to manage state and pass props in React components.",
    },
  ]);

  const [selectedEntry, setSelectedEntry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Create a ref for the bottom of the page
  const bottomRef = useRef(null);

  // Filter entries based on search term
  const filteredEntries = entries.filter((entry) =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Scroll to bottom function
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Journal Entries</h2>
        <input
          type="text"
          placeholder="Search entries"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchBar"
        />
        <button className="modern-button" onClick={scrollToBottom}>
          New Entry
        </button>
        <ul className="entryList">
          {filteredEntries.map((entry) => (
            <li
              key={entry.id}
              className={`entryItem ${
                selectedEntry && selectedEntry.id === entry.id ? "selectedEntryItem" : ""
              }`}
              onClick={() => setSelectedEntry(entry)}
            >
              {entry.title}
            </li>
          ))}
        </ul>
        {/* Hidden div to scroll to */}
        <div ref={bottomRef} style={{ height: 0 }} />
      </div>
      <div className="content">
        {selectedEntry ? (
          <>
            <h2>{selectedEntry.title}</h2>
            <p>{selectedEntry.content}</p>
          </>
        ) : (
          <p className="placeholder">Select a journal entry to view its content</p>
        )}
      </div>
    </div>
  );
};

export default JournalView;
