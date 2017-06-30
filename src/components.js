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
        let TitleStyle = {
            color: '#777676',
            fontSize: '35px'
        };
        return (
            <div className="row">
                <h1 style={TitleStyle}>{ this.props.children }</h1>
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
        let title = this.estaClicado() ? this.props.textoAtivo : this.props.children;
        return (
            <div>
                <button onClick={ this.alternarClick } className={ btnClass }>{ title }</button>
            </div>
        )
    }
});

let Form = React.createClass({

    getInitialState: function() {
        return {
            name: '',
            email: '',
            subject: 'react',
            message: ''
        }
    },
    handleNameChange: function(name) {
        this.setState({ name: name.target.value });
        console.log(this.state.name);
    },
    render: function() {
         let InputStyle = {
             padding: '30px',
             fontSize: '20px',
             color: '#a7a5a5'
         };

         return (
             <form>
                 <div className="form-group">
                     <label htmlFor="name">Nome</label>
                     <input type="text" className="form-control" onChange={this.handleNameChange} style={InputStyle} placeholder="Digite o nome" />
                 </div>
                 <div className="form-group">
                     <label htmlFor="email">E-mail</label>
                     <input type="email" id="email" className="form-control" style={InputStyle} placeholder="Digite o e-mail" />
                 </div>
                 <div className="form-group">
                     <label htmlFor="subject">Assunto</label>
                     <select className="form-control" id="subject" defaultValue={this.state.subject}>
                         <option value="jquery">JQuery</option>
                         <option value="react">React</option>
                         <option value="css">CSS</option>
                     </select>
                 </div>
                 <div className="form-group">
                     <label htmlFor="message">Mensagem</label>
                     <textarea id="message" className="form-control" style={InputStyle} placeholder="Digite a mensagem"
                            rows={3}></textarea>
                 </div>
             </form>
         )
     }
});

let Pessoas = React.createClass({
    render: function() {
        return(
            <tr>
                <td scope="row">{ this.props.idNumber }</td>
                <td>{ this.props.name }</td>
                <td>{ this.props.email }</td>
                <td>{ this.props.subject }</td>
                <td>{ this.props.children }</td>
            </tr>
        );
    }
});

let List = React.createClass({
     render: function() {
         let ListStyle = {
             marginTop: '50px'
         };

         let listaDePessoas = this.props.lista.map(function(pessoa) {
             return (
                 <Pessoas idNumber={pessoa.id} name={pessoa.name} email={pessoa.email} subject={pessoa.subject}>
                     {pessoa.message}
                 </Pessoas>
             );
         });

         return (
            <table className="table table-striped" style={ListStyle}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>E-MAIL</th>
                        <th>ASSUNTO</th>
                        <th>MENSAGEM</th>
                    </tr>
                </thead>
                <tbody>
                    {listaDePessoas}
                </tbody>
            </table>
         );
     }
});