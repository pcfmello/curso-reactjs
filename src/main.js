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
});

let Button = React.createClass({
    getInitialState: function() {
        return {
            click: false
        };
    },

    alternarClick: function() {
        this.setState({
            click: !this.state.click
        });
    },

    estaClicado: function() {
        return !!this.state.click;
    },

    render: function() {
        let btnClass = this.estaClicado() ? 'btn btn-danger' : 'btn btn-success';
        let title = this.estaClicado() ? this.props.textoAtivo : this.props.textoNaoAtivo;

        return (
            <div className="container">
                <button onClick={ this.alternarClick } className={ btnClass }>{ title }</button>
            </div>
        )
    }
});

ReactDOM.render(
    <Nav title="React! App Learning" linkUrl="index.html" />,
    document.querySelector('#nav')
);

ReactDOM.render(
    <Title title="Componente de título!" />,
    document.querySelector('#title')
);

ReactDOM.render(
    <Button title="Meu botão" textoAtivo="Desligar" textoNaoAtivo="Ligar" />,
    document.querySelector('#button')
);