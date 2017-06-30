let Page = React.createClass({
    getInitialState: function() {
        return {
            listaDePessoas: [
                {
                    id: 1,
                    name: 'Paulo Cesar',
                    email: 'paulo@javascript.floripa.br',
                    subject: 'react',
                    message: 'Estou cursando ReactJS!'
                },
                {
                    id: 2,
                    name: 'Claudia Rodrigues',
                    email: 'claudia@javascript.floripa.br',
                    subject: 'jquery',
                    message: 'Estou cursando ReactJS!'
                },
                {
                    id: 3,
                    name: 'Lucas Rodrigues',
                    email: 'lucas@javascript.floripa.br',
                    subject: 'react',
                    message: 'Estou cursando ReactJS!'
                },
                {
                    id: 4,
                    name: 'Nerci Rodrigues',
                    email: 'nerci@javascript.floripa.br',
                    subject: 'css',
                    message: 'Estou cursando ReactJS!'
                }
            ]
        }
    },
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
                    <div className="row">
                        <List lista={ this.state.listaDePessoas } />
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