import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeelingPage() {
    const [feeling, setFeeling] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => { // Is event only needed on forms to call prevent default?
        event.preventDefault();

        console.log('Adding feeling rating:', feeling);

        dispatch({
            type: 'SET_FEELING',
            url: '/feeling',
            payload: { feeling: feeling }
        });
        history.push('/submit') // This is the name of the url for SubmitPage
    }

    return(
        <div className="question-container"> 
            <h1>How are you feeling today?</h1> {/* Does a form need to be around all of these routes? Or just each question? */}
            <form onSubmit={handleNext}>
                <div className="input-div">
                    <p className="input-question">Feeling?</p>
                    <input 
                        type="number"
                        value={feeling}
                        placeholder="1 - 5"
                        onChange={(event) => setFeeling(event.target.value)}
                    />
                    <button 
                        type="submit"
                        className="next-button"
                    >Next</button>
                </div>
            </form>
        </div>
    )
}

export default FeelingPage;