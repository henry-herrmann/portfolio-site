import "../css/Contact.css";

function Contact() {
    return (
        <div className="contact">
            <div className="contact title">
                <h1>Contact</h1>
            </div>

            <div className="contact container">
                <div className="contact container box">
                    <h3>Email</h3>
                    <div className="contact text">
                        <p>Email: henry@herrmann.page</p>
                        <a href="mailto:henry@herrmann.page">Email me</a>
                    </div>
                </div>
                <div className="contact container box">
                    <h3>Discord</h3>
                    <div className="contact text">
                        <p>Join my discord server!</p>
                        <a href="https://link.rjks.us/support">Discord server</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;