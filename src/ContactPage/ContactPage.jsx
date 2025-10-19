import {Header} from "../Components/Header";
import {Footer} from "../Components/Footer";
import "./ContactPage.css";

export function ContactPage() {
  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <h1>☕ Red Pepper Cafe</h1>
            <p>Where every sip feels like home</p>
          </div>

          <div className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" />

            <label htmlFor="mobile">Mobile No</label>
            <input type="number" placeholder="Enter your mobile number" />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" />

            <label htmlFor="message">Message</label>
            <textarea placeholder="Write your message here..."></textarea>

            <button>Send Message</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
