var PeopleMap = React.createClass({  
    componentDidMount() {
        var mapOptions = {
            center: this.mapCenterLatLng(),
            zoom: this.props.initialZoom
        },
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        this.setState({ map: map });
    },

    mapCenterLatLng() {
        return new google.maps.LatLng(this.props.mapCenterLat, this.props.mapCenterLng);
    },

    componentDidUpdate() {
        var map = this.state.map;

        map.panTo(this.mapCenterLatLng());
    },
    render() {
        var style = {
            width: '100%',
            height: '500px'
        };

        return (
            <div id='map' style={style}></div>
        );
    }
});