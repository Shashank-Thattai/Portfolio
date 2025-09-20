import React from "react";
import "./Contact.css"

export default function Contact(){
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="text" placeholder="Your name" required/>
                </div>
                <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Your message" required></textarea>
        </div>

        <button type="submit" className="btn">Send</button>
            </form>

        </section>

    );
}