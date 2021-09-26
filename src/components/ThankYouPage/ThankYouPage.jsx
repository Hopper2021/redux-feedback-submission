import { HashRouter as Router, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function ThankYouPage() {
    return(
        <Paper elevation={6} className="question-container">
            <h1>Feedback!</h1>
            <div>
                <h1 className="feedback-thank-you">Thank you!</h1>
                <br/>
                <Router>
                    <Link to="/">
                        <Button 
                            variant="contained"
                            className="next-button"
                        >Leave New Feedback!</Button>
                    </Link>
                </Router>
            </div>
        </Paper>
    )
}

export default ThankYouPage;