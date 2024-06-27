import React, { useState, useRef } from "react";
import "./JournalView.css";

//Imports needed for Firebase
import { initializeApp } from "firebase/app";
import {getDatabase, onValue, ref} from 'firebase/database';

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

  /**
   * Code for Firebase DB functions
   */

   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optionals
  const firebaseConfig = {
    apiKey: "AIzaSyBdY267qCAOhbpJXoJBjAJqK6u5_8Eqe7E",
    authDomain: "fishjournal-b3009.firebaseapp.com",
    projectId: "fishjournal-b3009",
    storageBucket: "fishjournal-b3009.appspot.com",
    messagingSenderId: "691473569516",
    appId: "1:691473569516:web:b0fe0f0053810f332377c9",
    measurementId: "G-EJ3ECQ5F9E",
  };

    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Get a reference to the database service
    const database = getDatabase(app); 
    //this needs to be put into a function
    //this returns the data at Journal/1
    onValue(ref(database, 'Journal/' + 1), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      
    });


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
