import { useState } from 'react'; 

function SupportedPage() {
    const [support, setSupport] = useState('');

    const handleNext = (event) => {
        dispatch({
            type: 'SET_SUPPORT',
            url: '/supported',
            data: { support: support }
        })
    }

    return(
        <div className="question-container">
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleNext}>
                <div className="input-div">
                    <p className="input-question">Understanding?</p>
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