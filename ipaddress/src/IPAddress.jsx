import React from 'react';
import './IPAddress.css';

export default function IPAddress(props) {
  return (
    <div>
      <h1>{props.ip}</h1>
      <p>(Это ваш IP-адрес... Наверное)</p>
    </div>
  );
}
