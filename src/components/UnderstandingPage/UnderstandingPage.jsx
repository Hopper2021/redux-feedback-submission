function UnderstandingPage () {
    return(
        <div className="question-container">
            <h1>How well are you understanding the content?</h1>
            <div className="input-div">
                <p className="input-question">Understanding?</p>
                <input type="number" />
                <button className="next-button">Next</button>
            </div>
        </div>
    )
}
export default UnderstandingPage;