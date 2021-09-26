import axios from 'axios';

function AdminPage() {

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
                <tr>
                    <td>A feeling</td>
                    <td>something I understand</td>
                    <td>I feel supported</td>
                    <td>A comment about stuff</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default AdminPage;