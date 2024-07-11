/**
 * Notes: 
 * 
 * You create a UserContext which basically stores variables accross 
 * a whole React program
 * 
 * You create a compoent called provider and initiate the variables and return
 * the bottom code
 * 
 * in the Index.js you wrap all of the components that you want to have
 * access to the variables in the UserContext 
 * 
 * To Use the variable: 
 * import the UserContext variable
 * create variables with the same name and do =useContext(UserContext);
 * 
 */

import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // when sign in is setup - change this to null
  const [userID, setUserID] = useState(123456);

  return (
    <UserContext.Provider value={{ userID, setUserID }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
