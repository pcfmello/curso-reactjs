let Nav = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a href={ this.props.linkUrl } className="navbar-brand">
                            { this.props.title }
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
});

let Title = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <h1>{ this.props.title }</h1>
                </div>
            </div>
        );
    }
})

ReactDOM.render(
    <Nav title="React! App Learning" linkUrl="index.html" />,
    document.querySelector('#nav')
);

ReactDOM.render(
    <Title title="Componente de título!" />,
    document.querySelector('#title')
);