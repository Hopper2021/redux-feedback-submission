import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 

function UnderstandingPage () {
    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => {
    event.preventDefault();

    dispatch({
        type: 'SET_UNDERSTANDING',
        url: '/understanding',
        data: { understanding: understanding }
    })
    history.push('/supported');
    setUnderstanding('');
    };

    return(
        <div className="question-container">
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleNext}>
                <div className="input-div">
                    <p className="input-question">Understanding?</p>
                    <input 
                        type="number"
                        placeholder="1 - 5"
                        value={understanding}
                        onChange={event => setUnderstanding(event.target.value)}/>
                    <button 
                        type="submit"
                        className="next-button"
                    >Next</button>
                </div>
            </form>
        </div>
    )
}

export default UnderstandingPage;