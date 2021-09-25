import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeelingPage() {
    // useState is grabbing feeling from page input
    const [feeling, setFeeling] = useState('');

    // dispatch is sending feeling to feelingReducer is index.jsx
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => { // Is event only needed on forms to call prevent default?
        event.preventDefault();

        dispatch({
            type: 'SET_FEELING',
            url: '/feeling',
            payload: { feeling: feeling }
        });
        history.push('/understanding') // url of the next page
        setFeeling('');
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
                        // setFeeling sets the value of the input to feeling in useState
                        onChange={(event) => setFeeling(event.target.value)}
                    />
                    {/* When next button is clicked, handleSubmit is called for the form 
                        history.push is what navigates you to the next page*/}
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