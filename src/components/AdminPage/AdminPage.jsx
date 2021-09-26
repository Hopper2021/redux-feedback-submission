import axios from 'axios';
import { useState, useEffect } from 'react'

function AdminPage() {
    const [answerList, setAnswerList] = useState([]);

    useEffect(() => {
        getAnswers()
    },[]);

    const getAnswers = () => {
        axios({
            method: 'GET',
            url: '/answers'
        }).then(response => {
            setAnswerList(response.data);
        }).catch(error => {
            alert('Something went wrong!');
            console.log('Error in GET getAnswers',error);
        });
    }

    return(
        <>
        <h1>Admin Page</h1>
        <table className="admin-table">
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {answerList.map(answer => (
                    <tr key={answer.id}>
                        <td>{answer.feeling}</td>
                        <td>{answer.understanding}</td>
                        <td>{answer.support}</td>
                        <td>{answer.comments}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default AdminPage;