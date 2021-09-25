import { useState } from 'react';

function CommentPage() {
    const [comment, setComment] = useState('');

    return(
        <div className="question-container">
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleNext}>
                <div className="input-div">
                    <p className="input-question">Understanding?</p>
                    <input 
                        type="number"
                        placeholder="1 - 5"
                        value={comment}
                        onChange={event => setComment(event.target.value)}/>
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