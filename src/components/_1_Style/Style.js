import logo from '../../logo.svg';

// External CSS
import './Style.css';

// React
import React from 'react';



function Style() {
  
  const allparagraphCss = {
    backgroundColor:"#f2f2f2",
    color:"blue",
    padding: "1rem"
  };

  //RETURN
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-center text-warning'>
          Merhabalar Dünya
        </p>
        <hr></hr>
        <p style={{color:"yellow", backgroundColor:"blue"}}>Inline CSS</p>
      <hr></hr>
      <p style={allparagraphCss}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perspiciatis, quisquam odit sunt error consequatur minima adipisci consequuntur rerum unde optio ipsum ullam iure neque esse maiores soluta eius laboriosam!
      Officiis excepturi earum suscipit! Perferendis quaerat nulla aliquam esse deleniti amet impedit aperiam libero. Perspiciatis sequi, iste doloribus rem sapiente expedita vitae inventore ipsa mollitia maxime molestias distinctio culpa dignissimos!</p>
      </header>
    </div>
  );
}


// EXPORT
export default Style;
