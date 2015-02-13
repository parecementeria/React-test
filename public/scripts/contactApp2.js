
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
    var self = this;
    var contactInfo = this.state.data[this.state.active] || {};
    console.log(contactInfo);
    return (
      <div className="contactBox container">
        <h2 className="title">React Contact List</h2>
        <div className="contactList col-md-3 list-group">
          {this.state.data.map(function (contact, index) {
            var classattr = 'list-group-item';
            if (self.state.active == index) {
              classattr='list-group-item active'
            }
            return <a href="#" className={classattr} onClick={self.clicked.bind(self, index)}>{contact.name}</a>
          })}
        </div>
        <div className="jumbotron col-md-9">
        <h3>{contactInfo.name}</h3>
        <p>{contactInfo.about}</p>
        </div>
      </div>
    );
  }
});

React.render(
  <ContactBox url="contacts.json" />,
  document.getElementById('contactApp')
);