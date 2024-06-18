
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react"; // Import useEffect and useState
const auth = getAuth(appFirebase);
import 'firebase/firestore';

import React, { Component } from 'react';
import '../App.css';


const Home = () => {
  const [userEmail, setUserEmail] = useState(""); // Add userEmail state

  useEffect(() => {
    // Listen for changes in the authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, update the userEmail state
        setUserEmail(user.email);
      } else {
        // User is signed out, clear the userEmail state
        setUserEmail("");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>¡Hola, {userEmail}!</h2> {/* Display the userEmail */}
      <button className="btn btn-primary" onClick={() => signOut(auth)}>logout</button>
    </div>
  );
};


export default Home;