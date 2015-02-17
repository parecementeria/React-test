
var ContactList = React.createClass({
  render: function() {
    var self = this;
    return (
      <div className="contactList col-md-3 list-group">
        {this.props.data.map(function (contact, index) {
          var classattr = 'list-group-item';
          if (self.props.active == index) {
            classattr='list-group-item active';
          }
          return <a href="#" className={classattr} onClick={self.props.onClickItem.bind(null, index)} key={index}>{contact.name}</a>
        })}
      </div>
    );
  }
});

var ContactInfo = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-md-9">
        <h3>{this.props.data.name}</h3>
        <p>{this.props.data.about}</p>
      </div>
    );
  }
});

var ContactBox = React.createClass({

  loadContactsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function(){
    return { active: 0, data:[] };
  },

  componentDidMount: function() {
    this.loadContactsFromServer();
  },

  clicked: function(index){
    this.setState({active: index});
  },

  render: function() {
    var activeItem = this.state.active;
    var contactInfo = this.state.data[this.state.active] || {};
    return (
      <div className="contactBox container">
        <h2 className="title">React Contact List</h2>
        <ContactList data={this.state.data} active={activeItem} onClickItem={this.clicked} />
        <ContactInfo data={contactInfo} />
      </div>
    );
  }
});

React.render(
  <ContactBox url="contacts.json" />,
  document.getElementById('contactApp')
);