import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeelingPage() {
    // useState is grabbing feeling from page input
    const [feeling, setFeeling] = useState('');

    // dispatch is sending feeling to feelingReducer is index.jsx
    const dispatch = useDispatch();
    // Used to bring the user to the next page after dispatch
    const history = useHistory();

    const handleNext = (event) => { // Is event only needed on forms to call prevent default?
        event.preventDefault();
        // Prevents empty values
        if ( feeling === '' ) {
            // return jumps out of function,
            // which prevents the user from continuing to the next page
            return alert('Please enter a value');
        }
        // Sends updated feeling to answerComponent to be housed in reduxStore
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
            <h1>How are you feeling today?</h1>
            {/* handleNext is called onSubmit, which is attached 
                to when the Next button is clicked */}
            <form onSubmit={handleNext}>
                <div className="input-div">
                    <p className="input-question">Feeling?</p>
                    <input 
                        // Number type does not allow text
                        type="number"
                        // default value of useState
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