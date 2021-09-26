import { useSelector } from 'react-redux';
import axios from 'axios';

function SubmitPage() {
    const answerList = useSelector(store => store.answerReducer);
    // Might need to make a POST to the server 
    // and a GET to display the information
    const handleSubmit = (event) => {
    event.preventDefault();

    axios({
        method: 'POST',
        url: '/answers',
        data: { answerList }
        })
        history.push('/thankYou')
    }

    return(
        <div className="review-container">
            <h1>Review Your Feedback</h1>
            {/* {JSON.stringify(answerList)} */}
            <form onSubmit={handleSubmit}>
                <p>Feeling: {answerList[0]}</p>
                <p>Understanding: {answerList[1]}</p>
                <p>Support: {answerList[2]}</p>
                <p>Comments: {answerList[3]}</p>
                <button 
                    type="submit"
                    className="submit-button">Submit</button>
            </form>
        </div>
    )
}
export default SubmitPage;