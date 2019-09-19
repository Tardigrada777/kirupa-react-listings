import React from 'react';
import IPAddress from './IPAddress';

let xhr;

class IPAddressContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ip_address: '...'
    };

    this.processRequest = this.processRequest.bind(this);
  }

  componentDidMount() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipinfo.io/json', true);
    xhr.send();

    xhr.addEventListener('readystatechange', this.processRequest(), false);
  }

  processRequest() {
    if (xhr.readeState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      this.setState({
        ip_adress: response.ip
      });
    }
  }
  render() {
    return <IPAddress ip={this.state.ip_address} />;
  }
}

export default IPAddressContainer;
