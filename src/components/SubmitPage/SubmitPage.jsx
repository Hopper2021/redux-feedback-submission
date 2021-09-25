import { useSelector } from 'react-redux';

function SubmitPage() {
    const reduxStore = useSelector(store => store);
    return(
        <div className="review-container">
            <h1>Review Your Feedback</h1>
            <form>
                <p>Feelings:</p>
                <p>Understanding:</p>
                <p>Support:</p>
                <p>Comments:</p>
            </form>
            <button className="submit-button">Submit</button>
        </div>
    )
}
export default SubmitPage;