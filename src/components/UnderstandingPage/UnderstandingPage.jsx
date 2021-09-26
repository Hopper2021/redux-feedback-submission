import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import { HashRouter as Router, Link } from 'react-router-dom';

function UnderstandingPage () {
    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => {
    event.preventDefault();

    if ( understanding === '' ) {
        return alert('Please enter a value');
    } else if ( understanding > 5 ) {
        alert('Please enter a value between 1 and 5');
        return setUnderstanding('');
    }

    dispatch({
        type: 'SET_UNDERSTANDING',
        url: '/understanding',
        payload: { understanding: understanding }
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
            <Router>
                <Link to="/">
                    <button>Back</button>
                </Link>
            </Router>
        </div>
    )
}

export default UnderstandingPage;