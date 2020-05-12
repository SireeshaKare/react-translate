import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static conetextType = LanguageContext;

  render() {
    const text = this.conetext === 'english' ? 'Name': 'Naam';
    return (
      <div className="ui field">
      <label>{text}</label>
      <input />
      </div>
    );
  }
}

export default Field;
