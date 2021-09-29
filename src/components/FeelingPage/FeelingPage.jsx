import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

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
        } else if ( feeling > 5 || feeling < 1 ) {
            alert('Please enter a value between 1 and 5');
            return setFeeling('');
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
        <Paper elevation={6} className="question-container"> 
            <h1>How are you feeling today?</h1>
            {/* handleNext is called onSubmit, which is attached 
                to when the Next button is clicked */}
            <form onSubmit={handleNext}>
                <div className="input-div">
                    <Box
                        component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                        noValidate autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="1 - 5" variant="outlined"
                        // Number type does not allow text
                        type="number"
                        // default value of useState
                        value={feeling}
                        // setFeeling sets the value of the input to feeling in useState
                        onChange={(event) => setFeeling(event.target.value)}
                    />
                    </Box>
                    {/* When next button is clicked, handleSubmit is called for the form 
                        history.push is what navigates you to the next page*/}
                        <Button variant="contained"
                            className="next-button"
                            type="submit"
                        >Next</Button>
                </div>
            </form>
        </Paper>
    )
}

export default FeelingPage;