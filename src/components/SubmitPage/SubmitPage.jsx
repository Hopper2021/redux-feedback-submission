import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Link } from 'react-router-dom';

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
        <div className="review-container">
            <h1>Review Your Feedback</h1>
            {/* {JSON.stringify(answerList)} */}

            {/* Displays answer properties from previous pages inputs */}
            <form onSubmit={handleSubmit}>
                <p>Feeling: {answerList.feeling}</p>
                <p>Understanding: {answerList.understanding}</p>
                <p>Support: {answerList.support}</p>
                <p>Comments: {answerList.comments}</p>
                <button 
                    type="submit"
                    className="submit-button">Submit</button>
            </form>
            {/* Allows user to navigate to previous page to change input answers */}
            <Router>
                <Link to="/comment">
                    <button>Back</button>
                </Link>
            </Router>
        </div>
    )
}
export default SubmitPage;