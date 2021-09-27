import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function SubmitPage() {
    // Pulls out the completed answer object from anwerReducer
    const answerList = useSelector(store => store.answerReducer);
    const history = useHistory();

    const handleSubmit = (event) => {
    event.preventDefault();
    
    // POST feedback answers as an object in reduxStore to the server
    axios({
        method: 'POST',
        url: '/answers',
        data: answerList
        }).then(response => {
            console.log('Feedback successfully submited!');
            history.push('/thankYou')
        }).catch(error => {
            console.log('Error in POST answers: ', error);
        })
    }

    return(
        <Paper elevation={6} className="question-container"> 
        <h1>Review Your Feedback</h1>
        {/* handleNext is called onSubmit, which is attached 
            to when the Next button is clicked */}
        <form onSubmit={handleSubmit}>
            <div className="input-div">
                <p>Feeling: {answerList.feeling}</p>
                <p>Understanding: {answerList.understanding}</p>
                <p>Support: {answerList.support}</p>
                <p>Comments: {answerList.comments}</p>
                {/* When next button is clicked, handleSubmit is called for the form 
                    history.push is what navigates you to the next page*/}
                <Button 
                    variant="contained"
                    className="next-button"
                    type="submit"
                >Submit</Button>
                <Router>
                    <Link to="/comment">
                        <Button variant="contained">Back</Button>
                    </Link>
                </Router>
            </div>
        </form>
    </Paper>
    )
}
export default SubmitPage;