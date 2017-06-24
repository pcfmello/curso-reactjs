let Nav = React.createClass({
    render: () => {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">
                            React!
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
});

ReactDOM.render(
    <Nav/>,
    document.querySelector('#app')
);