import { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';

function SupportedPage() {
    const [support, setSupport] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();

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
        </div>
    )
}
export default SupportedPage;