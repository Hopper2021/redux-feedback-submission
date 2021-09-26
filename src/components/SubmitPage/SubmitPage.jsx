import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Link } from 'react-router-dom';

function SubmitPage() {
    const answerList = useSelector(store => store.answerReducer);
    const history = useHistory();
    // Might need to make a POST to the server 
    // and a GET to display the information
    const handleSubmit = (event) => {
    event.preventDefault();

    axios({
        method: 'POST',
        url: '/answers',
        data: answerList
        }).then(response => {
            // Would a get go here? I dont think so.
            // There is nothing I want to display on this page...
            history.push('/thankYou')
        }).catch(error => {
            console.log('Error in POST answers: ', error);
        })
    }

    return(
        <div className="review-container">
            <h1>Review Your Feedback</h1>
            {/* {JSON.stringify(answerList)} */}
            <form onSubmit={handleSubmit}>
                <p>Feeling: {answerList.feeling}</p>
                <p>Understanding: {answerList.understanding}</p>
                <p>Support: {answerList.support}</p>
                <p>Comments: {answerList.comments}</p>
                <button 
                    type="submit"
                    className="submit-button">Submit</button>
            </form>
            <Router>
                <Link to="/comment">
                    <button>Back</button>
                </Link>
            </Router>
        </div>
    )
}
export default SubmitPage;