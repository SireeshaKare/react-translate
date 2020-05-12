import React from 'react';
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  state= { lang: 'english' };

  onLangugeChange = (lang) => {
    this.setState({ lang });
  };

  render() {
    return (
      <div className="ui container">
      <LanguageSelector onLangugeChange={this.onLangugeChange} />
      
      <ColorContext.Provider value='red'>
      <LanguageContext.Provider value={this.state.lang}>
      <UserCreate />
      </LanguageContext.Provider>
      </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
