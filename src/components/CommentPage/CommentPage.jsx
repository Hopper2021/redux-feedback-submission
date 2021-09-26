import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CommentPage() {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_COMMENT',
            url: '/comment',
            payload: { comments: comments }
        })
        history.push('/submit');
        setComments('');
    }

    return(
        <div className="question-container">
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleNext}>
                <div className="input-div">
                    <p className="input-question">Comment?</p>
                    <input 
                        type="text"
                        placeholder="Comment"
                        value={comments}
                        onChange={event => setComments(event.target.value)}/>
                    <button 
                        type="submit"
                        className="next-button"
                    >Next</button>
                </div>
            </form>
        </div>
    )
}
export default CommentPage;