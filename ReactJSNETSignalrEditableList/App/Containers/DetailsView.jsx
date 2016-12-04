const DetailsView = React.createClass({
    getInitialState() {
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
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
        let id = this.state.id;
        $.connection.peopleHub.client.setPerson = this.setPerson;

        $.connection.hub.start().done(function () {
            $.connection.peopleHub.server.getPerson(id);
        });
    },
    render() {
            return (
                <div>
                    {
                        this.state.showEdit
                        ? <div>
                            <PeopleEdit id={this.state.id} title={this.state.title} name={this.state.name} />
                        </div>
                        : <div>
                            <PeopleList title={this.state.title} name={this.state.name} />
                            <button className="btn btn-default" onClick={this.onClick}>Edit</button>
                        </div>
                    }
                    <br />
                    <p>Where {this.state.name} lives:</p>
                    <PeopleMap initialZoom={this.state.initialZoom} mapCenterLat={this.state.mapCenterLat} mapCenterLng={this.state.mapCenterLng} />
                    </div>
            );
        }
});

ReactDOM.render(
  <DetailsView />,
  document.getElementById('detailsContent')
);