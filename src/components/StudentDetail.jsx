export const StudentDetail = (props) => {
    return <div>
        <h1>Entered Student Detail</h1>
        <table>
            <thead>
                <th>Name</th>
                <th>Comment</th>
                <th>City</th>
                <th>Gender</th>
                <th>Language</th>
            </thead>
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.comment}</td>
                    <td>{props.city}</td>
                    <td>{props.gender}</td>
                    <td>{props.languages?.toString()}</td>
                </tr>
            </tbody>
        </table>
    </div>
}