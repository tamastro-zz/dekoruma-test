import React, {PureComponent} from 'react';
import _ from 'lodash'
import '../App.css';

class Contacs extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      searchQuery: ''
    }
    this.onSearch = this.onSearch.bind(this);
    this.onQueryChange = this.onQueryChange.bind(this);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        data: this.props.data
      })
    }
  }

  onSearch() {
    const newData = this.props.data.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.searchQuery)
    })
    
    this.setState({
      data: newData
    })
  }

  async onQueryChange(e) {
    await this.setState({
      searchQuery: e.target.value
    })

    setTimeout(this.onSearch(), 2000);
  }
  

  render() {
    return (
      <div className="contact-wrapper">
      <div className="contact-header">
        <h2 className="ui header messenger-header">Messenger</h2>
        <div className="ui clearing divider"></div>
        <div className="ui icon focus fluid input search-input">
          <input value={this.state.searchQuery} type="text" placeholder="Search..." onChange={this.onQueryChange} />
          <i onClick={this.onSearch} className="inverted circular search blue link icon"></i>
        </div>
      </div>
      <div className="contact-list">
        <div className="ui large celled list">
            {this.props.data === undefined ? <div class="ui placeholder">
              <div class="image header">
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div> : this.state.data.map(contact => {
            return (
              <div className="item contact-item" key={contact.id} onClick={() => this.props.onChangeContact(contact.id)}>
                <img className="ui avatar image" src={contact.avatar} alt="avatar" />
                <div className="content">
                  <div className="header">{contact.name}</div>
                  <p className="last-chat">{_.last(contact.chat) === undefined ? '' : _.last(contact.chat).message}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    )
  }
}

export default Contacs;
