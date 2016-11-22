var IndexView = React.createClass({
    getInitialState() {
        return {
            data: [],
        };
    },
    setPeople(data) {
        this.setState({
            data: data
        });
    },
    onClick: function () {
        this.setState({ showEdit: true });
    },
    componentWillMount: function () {
        $.connection.peopleHub.client.setPeople = this.setPeople;

        $.connection.hub.start().done(function () {
            $.connection.peopleHub.server.getPeople();
        });
    },
    render() {
        return (
            <PeopleTable data={this.state.data} />
        );
    }
});

ReactDOM.render(
  <IndexView />,
  document.getElementById('content')
);
