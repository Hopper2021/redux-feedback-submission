function CommentPage() {
    return(
        <div className="question-container">
            <h1>Any comments you want to leave?</h1>
            <div className="input-div">
                <p className="input-question">Comments?</p>
                <input type="number" />
                <button className="next-button">Next</button>
            </div>
        </div>
    )
}
export default CommentPage;