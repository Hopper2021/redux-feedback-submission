import { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

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
        <Paper elevation={6} className="question-container"> 
            <h1>How well are you being supported?</h1>
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
                        value={support}
                        // setFeeling sets the value of the input to feeling in useState
                        onChange={(event) => setSupport(event.target.value)}
                    />
                    </Box>
                    {/* When next button is clicked, handleSubmit is called for the form 
                        history.push is what navigates you to the next page*/}
                        <Button variant="contained"
                            className="next-button"
                            type="submit"
                        >Next</Button>
                    <Router>
                        <Link to="/">
                            <Button variant="contained">Back</Button>
                        </Link>
                    </Router>
                </div>
            </form>
        </Paper>
    )
}
export default SupportedPage;