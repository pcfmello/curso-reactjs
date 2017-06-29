let Page = React.createClass({
    render: function() {
        return (
            <myElement>
                <Nav title="React! App Learning" linkUrl="index.html" />
                <div className="container">
                    <Title>
                        Componente de título!
                    </Title>
                    <div className="row">
                        <Form />
                        <Button textoAtivo="Carregando...">Enviar</Button>
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