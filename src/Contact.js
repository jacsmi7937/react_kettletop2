import { waitForElementToBeRemoved } from "@testing-library/react";
import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>Check us out on our social media pages.
        </p>
          <p>
         <a href="https://www.facebook.com/KettleTop16/">Facebook</a>
         <br></br>
         <a href="https://www.instagram.com/kettletopbrewhouse/?hl=en">Instagram</a>
         <br></br>
         <a href="https://twitter.com/kettletop16?lang=en">Twitter</a>
         </p>
        <h2>Come Find Us</h2>
        <p>1213 Meridian St, Anderson, IN 46016</p>
        <p>(765) 274-5320</p>
        <p>kettletopbrewhouse@gmail.com</p>
        <br></br>
        <h2>Hours of Opperation</h2>
        <p>Sunday - Monday : Closed</p>
        <p>Tuesday : 4pm - 11pm</p>
        <p>Wednesday : 4pm - 11pm</p>
        <p>Thursday : 4pm - 1am</p>
        <p>Friday : 12pm - 2am</p>
        <p>Saturday : 3pm - 2am</p>
      </div>
      
    );
  }
}
 
export default Contact;