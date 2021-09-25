import { useState } from 'react';
import { useDispatch } from 'react-redux';

function UnderstandingPage () {
    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();

    dispatch({
        type: 'SET_UNDERSTANDING',
        url: '/understanding',
        data: { understanding: understanding }
    }).then({
        
    })
    

    return(
        <div className="question-container">
            <h1>How well are you understanding the content?</h1>
            <div className="input-div">
                <p className="input-question">Understanding?</p>
                <input 
                    type="number"
                    placeholder="1 - 5" 
                    value={understanding}
                    onChange={event => setUnderstanding(event.target.value)}/>
                <button 
                    className="next-button"
                >Next</button>
            </div>
        </div>
    )
}
export default UnderstandingPage;