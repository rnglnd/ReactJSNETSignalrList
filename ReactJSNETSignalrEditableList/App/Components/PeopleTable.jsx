var PeopleTable = React.createClass({
    render() {
        return (
            <div className='table'>
                <table id="peopleTable">
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(function (person) {
                            var url = "/Home/Details/" + person.Id;
                            return (
                                <tr key={person.Id}>
                                    <td>
                                        {person.Title}
                                    </td>
                                    <td>
                                        <a href={url}>{person.Name}</a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});