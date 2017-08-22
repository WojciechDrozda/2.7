 ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return ( <form className={'contactForm form-inline'}>
              <input className={'form-control mb-2 mr-sm-2 mb-sm-0'} type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}></input>
              <input className={'form-control mb-2 mr-sm-2 mb-sm-0'} type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}></input>
                <div className={'input-group mb-2 mr-sm-2 mb-sm-0'}>
                  <div className={'input-group-addon'}>@
                    <input className={'form-control'} type={'email'} placeholder={'Email'} value={this.props.contact.email}></input>
                  </div>
                </div>  
              <button className={'btn btn-primary'} type={'submit'}>Dodaj kontakt</button>
            </form>
          );
    },
});
