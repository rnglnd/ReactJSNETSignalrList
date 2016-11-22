var DetailsView = React.createClass({
    getInitialState() {
        var url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        return {
            id: id,
            title: "",
            name: "",
            showEdit: false,
            initialZoom: 15,
            mapCenterLat: 54.604632,
            mapCenterLng: -5.911847,
        };
    },
    setPerson(Id, Title, Name, showEdit) {
        this.setState({
            id: Id,
            title: Title,
            name: Name,
            showEdit: showEdit
        });
    },
    onClick: function () {
        this.setState({ showEdit: true });
    },
    componentWillMount: function () {
        var id = this.state.id;
        $.connection.peopleHub.client.setPerson = this.setPerson;

        $.connection.hub.start().done(function () {
            $.connection.peopleHub.server.getPerson(id);
        });
    },
    render() {
        if (this.state.showEdit) {
            return (
                <div>
                    <PeopleEdit id={this.state.id} title={this.state.title} name={this.state.name} />
                </div>
            );
        } else {
            return (
                <div>
                    <PeopleList title={this.state.title} name={this.state.name} />
                    <button className="btn btn-default" onClick={this.onClick}>Edit</button>
                    <p>Where {this.state.name} lives:</p>
                    <PeopleMap initialZoom={this.state.initialZoom} mapCenterLat={this.state.mapCenterLat} mapCenterLng={this.state.mapCenterLng} />
                </div>
            );
        }
    }
});

ReactDOM.render(
  <DetailsView />,
  document.getElementById('detailsContent')
);