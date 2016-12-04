const PeopleEdit = React.createClass({
    handleSubmit() {
        let data = {
            Id: this.refs.id.value,
            Title: this.refs.title.value,
            Name: this.refs.name.value,
            ShowEdit: false
        }

        $.ajax({
            type: 'POST',
            url: '/People/SavePeople',
            data: data
        });
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="id" defaultValue={this.props.id} hidden />
                <dl>
                    <dt>
                        Title
                    </dt>
                    <dd>
                        <input type="text" ref="title" defaultValue={this.props.title} /><br />
                    </dd>
                    <dt>
                        Name
                    </dt>
                    <dd>
                        <input type="text" ref="name" defaultValue={this.props.name} /><br />
                    </dd>
                </dl>
                <button id="submitButton" className="btn btn-default" onClick={this.handleSubmit}>Save</button>
            </div>
        );
    }
});