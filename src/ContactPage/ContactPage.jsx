import "./ContactPage.css";

export function ContactPage() {
    return (
        <>
            <div className="contact-page">
                <div className="contact-page-header">
                    <h1>Red Pepper</h1>
                    <p>Where every sip feels like home ☕</p>
                </div>
                <div className="input-form">
                    <label htmlFor="name">Name: </label>
                    <input type="text" placeholder="Enter your name" />
                    <label htmlFor="mobile">Mobile No: </label>
                    <input type="number" placeholder="Enter your mobile number" />
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Enter your email" />
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" id="message"></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </>
    );
}