import React from 'react';
import Footer from './styles/footer.css';
import './styles/App.css';
import './holiday.JPG';


function App() {

const image = (
  <img className="header-logo" alt='my logo' src={require('./holiday.JPG')} />
);

  const myList = ['Home', 'About Us', 'Contact'];

  const listItems = myList.map((myList)=>{
    return <li>{myList}</li>
  })
        
  return (
    <div className="App">
      <header className="App-header"> 
      {image}
          <ul className='App-list'>{listItems}
          </ul> 
      </header>
      <Footer/>
    </div>
  );
}

export default App;
