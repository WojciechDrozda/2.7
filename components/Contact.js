 Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (<div className={'contactItem list-group-item list-group-item-action list-group-item-info'}>
              <div className={'contactItemInfo'}>
                <img className={'contactImage'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}/>
                <p className={'contactLabel'}>Imię: {this.props.item.firstName}</p>
                <a href={'mailto:' + this.props.item.email}>{this.props.item.email}</a>
              </div>
            </div>
    );
  },
});




