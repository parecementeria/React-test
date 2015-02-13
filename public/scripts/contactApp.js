var contacts = [
  {
    "name": "Jeanine Garner",
    "email": "jeaninegarner@kineticut.com",
    "about": "Eu sit sit quis pariatur ad reprehenderit aliquip commodo nisi voluptate enim dolore. Excepteur ex officia aliqua do quis proident sint consectetur minim excepteur nostrud tempor eu sit. Ex consectetur adipisicing cupidatat cillum veniam nulla elit ipsum in Lorem est adipisicing reprehenderit.\r\n"
  },
  {
    "name": "Consuelo Shaw",
    "email": "consueloshaw@kineticut.com",
    "about": "In do fugiat amet do. Ut irure occaecat ea sit veniam proident sunt. Nisi ut laborum in sunt cillum ad et esse eu pariatur ipsum excepteur mollit ex. Mollit mollit non ea ipsum.\r\n"
  },
  {
    "name": "Duffy Stanton",
    "email": "duffystanton@kineticut.com",
    "about": "Aute veniam Lorem cupidatat id labore ad culpa dolor proident exercitation. Anim nostrud commodo labore nostrud cillum. Lorem fugiat incididunt mollit magna. Ex deserunt pariatur occaecat reprehenderit mollit elit. Est irure quis ea aliquip excepteur. Ea Lorem ipsum mollit irure tempor ex magna et.\r\n"
  },
  {
    "name": "Dena Burton",
    "email": "denaburton@kineticut.com",
    "about": "Anim do veniam ad dolor incididunt ea irure dolor incididunt officia tempor cillum. Aute pariatur ullamco non pariatur ad velit dolore excepteur id voluptate qui nulla irure nulla. Esse laborum enim cupidatat culpa duis Lorem ut dolor cupidatat. Duis elit irure aute aliquip. Nulla sit aliqua est deserunt consequat nulla.\r\n"
  },
  {
    "name": "Burton Lewis",
    "email": "burtonlewis@kineticut.com",
    "about": "Culpa deserunt nisi amet amet. Elit aliquip dolore ad magna aute occaecat nulla laboris quis in adipisicing. Sit quis minim magna id.\r\n"
  }
];

var ContactBox = React.createClass({

  getInitialState: function(){
    return { active: 0 };
  },

  clicked: function(index){
    this.setState({active: index});
  },

  render: function() {
    var self = this;
    var contactInfo = this.props.data[this.state.active];
    return (
      <div className="contactBox container">
        <h2 className="title">React Contact List</h2>
        <div className="contactList col-md-3 list-group">
          {this.props.data.map(function (contact, index) {
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
  <ContactBox data={contacts} />,
  document.getElementById('contactApp')
);