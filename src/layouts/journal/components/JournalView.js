import React, { useState, useRef, useEffect, useContext } from "react";
import "./JournalView.css";
import { database } from "./firebaseConfig"; // Adjust the import path accordingly
import { onValue, ref } from "firebase/database";

// Global User Credentials from UserProvider
import { UserContext } from "layouts/authentication/UserProvider";

/**
 * 
 * To do: When there is alot of journal entries, it messes with the u
 */

const JournalView = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  //Global Current User Id
  const { userID } = useContext(UserContext);

  const bottomRef = useRef(null);

  const filteredEntries = entries.filter(
    (entry) =>
      entry.title &&
      entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const getJournalEntries = () => {
      onValue(ref(database, `Journal/${userID}/JournalEntry/`), (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const entriesArray = Object.values(data).map((entry, index) => ({
            id: index + 1, // Assuming you don't have an id in your JSON, generate one
            title: `${entry.Location} on ${entry.Date}`,
            content: (
              <>
                <div>Location: {entry.Location}</div>
                <div>Fly Used: {entry.FlyUsed}</div>
                <div>Fish Count: {entry.FishCount}</div>
                <div>Notes: {entry.JournalEntry}</div>
              </>
            ),
          }));
          setEntries(entriesArray);
        }
      });
    };

    getJournalEntries();
  }, []); // Empty dependency array ensures this runs once when the component mounts

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
  <div className="entryListContainer">
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
</div>

      <div className="content">
        {selectedEntry ? (
          <>
            <h2>{selectedEntry.title}</h2>
            <div>{selectedEntry.content}</div>
          </>
        ) : (
          <p className="placeholder">Select a journal entry to view its content</p>
        )}
      </div>
    </div>
  );
};

export default JournalView;
