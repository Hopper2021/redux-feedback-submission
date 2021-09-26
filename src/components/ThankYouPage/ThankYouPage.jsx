import { HashRouter as Router, Link } from 'react-router-dom';

function ThankYouPage() {
    return(
        <div className="thank-you-container">
            <h1>Feedback!</h1>
            <div>
                <h1 className="feedback-thank-you">Thank you!</h1>
                <Router>
                    <Link to="/">
                        <button>Leave New Feedback</button>
                    </Link>
                </Router>
            </div>
        </div>
    )
}

export default ThankYouPage;