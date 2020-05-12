import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
    <div>
    Select a Language:
    <i className="flag us" onClick={() => this.props.onLangugeChange('english')} />
    <i className="flag nl" onClick={() => this.props.onLangugeChange('dutch')} />
    </div>
  );
  }
}

export default LanguageSelector;
