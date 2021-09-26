import { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Link } from 'react-router-dom';

function SupportedPage() {
    const [support, setSupport] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();

        if ( support === '' ) {
            return alert('Please enter a value');
        } else if ( support > 5 ) {
            alert('Please enter a value between 1 and 5');
            return setSupport('');
        }

        dispatch({
            type: 'SET_SUPPORT',
            url: '/supported',
            payload: { support: support }
        })
        history.push('/comment');
        setSupport('');
    }

    return(
        <div className="question-container">
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleNext}>
                <div className="input-div">
                    <p className="input-question">Support?</p>
                    <input 
                        type="number"
                        placeholder="1 - 5"
                        value={support}
                        onChange={event => setSupport(event.target.value)}/>
                    <button 
                        type="submit"
                        className="next-button"
                    >Next</button>
                </div>
            </form>
            <Router>
                <Link to="/understanding">
                    <button>Back</button>
                </Link>
            </Router>
        </div>
    )
}
export default SupportedPage;