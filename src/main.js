let Page = React.createClass({
    render: function() {
        return (
            <myElement>
                <Nav title="React! App Learning" linkUrl="index.html" />
                <div className="container">
                    <Title title="Componente de título!" />
                    <div className="row">
                        <Form />
                        <Button title="Enviar" textoAtivo="Desligar" textoNaoAtivo="Ligar" />
                    </div>

                </div>
            </myElement>
        );
    }
});

ReactDOM.render(
    <Page />,
    document.getElementById('page')
);