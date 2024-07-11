import React, { useState, useContext } from "react";
import "./JournalEntry.css";

// Imports needed for Firebase
import { ref, set, onValue } from 'firebase/database';
import { database } from "./firebaseConfig"; // Adjust the import path accordingly

// Global User Credentials from UserProvider
import { UserContext } from "layouts/authentication/UserProvider";


const JournalEntryForm = () => {
  // form variables
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [fishCount, setFishCount] = useState(0);
  const [flyUsed, setFlyUsed] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  var nextJournalId = 0;

   //Global Current User Id
   const { userID, setUserID } = useContext(UserContext);

  const locations = ["River A", "River B", "Lake C", "Pond D", "Stream E"];

  /**
   * Code for Firebase DB
   */

  //Returns the next available journal id
  function getNextJournalId() {
    return new Promise((resolve, reject) => {
      var highestKey = 0;
  
      // 1 is the user id
      onValue(ref(database, 'Journal/' + userID + '/JournalEntry'), (snapshot) => {
        const data = snapshot.val();
        console.log(data);
  
        for (const key in data) {
          if (parseInt(key) >= highestKey) {
            highestKey = parseInt(key);
          }
        }
  
        console.log("highest Key: " + highestKey);
        resolve(highestKey + 1);
      }, (error) => {
        reject(error);
      });
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // Gets and sets the next highest ID
    getNextJournalId()
      .then((nextId) => {
        nextJournalId = nextId;

        //The JournalID is where the increased id number will go 
        set(ref(database, 'Journal/'+userID+'/JournalEntry/' + nextJournalId), {
          UserId: userID,
          Location: location,
          Date: date,  
          FishCount: fishCount,
          FlyUsed: flyUsed,
          JournalEntry: journalEntry, 
        })
        .then(() => {
          console.log("Data submitted successfully!");
    
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });

        // Reset form fields after submission
        setLocation("");
        setDate("");
        setFishCount(0);
        setFlyUsed("");
        setJournalEntry("");
        })
      .catch((error) => {
        console.error("Error retrieving next journal ID:", error);
      });
   

    
   
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
