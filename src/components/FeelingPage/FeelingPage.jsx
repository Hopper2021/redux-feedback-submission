import axios from 'axios';
import { useState } from 'react';

function FeelingPage() {
    const [feeling, setFeeling] = useState('');

    return(
        <div className="question-container">
            <h1>How are you feeling today?</h1>
            <div className="input-div">
                <p className="input-question">Feeling?</p>
                <input type="number" />
                <button className="next-button">Next</button>
            </div>
        </div>
    )
}

export default FeelingPage;