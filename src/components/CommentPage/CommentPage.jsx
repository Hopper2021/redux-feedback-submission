import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function CommentPage() {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();
        
        // Blank comments are allowed

        dispatch({
            type: 'SET_COMMENT',
            url: '/comment',
            payload: { comments: comments }
        })
        history.push('/submit');
        setComments('');
    }

    return(
        <Paper elevation={6} className="question-container"> 
            <h1>Would you like to leave any comments?</h1>
            {/* handleNext is called onSubmit, which is attached 
                to when the Next button is clicked */}
            <form onSubmit={handleNext}>
                <div className="input-div">
                    <Box
                        component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                        noValidate autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Comments?" variant="outlined"
                        // Number type does not allow text
                        type="text"
                        // default value of useState
                        value={comments}
                        // setFeeling sets the value of the input to feeling in useState
                        onChange={(event) => setComments(event.target.value)}
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
export default CommentPage;