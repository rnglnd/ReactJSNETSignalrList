const PeopleList = React.createClass({
    render() {
        return (
            <dl>
                <dt>
                    Title
                </dt>
                <dd>
                    {this.props.title}
                </dd>
                <dt>
                    Name
                </dt>
                <dd>
                    {this.props.name}
                </dd>
            </dl>
        );
    }
});