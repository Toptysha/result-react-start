import {createElement} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  // const app = document.createElement('div')
  // app.className = 'App'
  // document.body.append(app)

  // const header = document.createElement('header')
  // header.className = 'App-header'
  // app.append(header)

  // const imgLogo = document.createElement('img')
  // imgLogo.src = logo
  // imgLogo.className = 'App-logo'
  // imgLogo.alt = 'logo'
  // header.append(imgLogo)

  // const p = document.createElement('p')
  // p.textContent = 'Edit src/App.js and save to reload.'
  // header.append(p)

  // const link = document.createElement('a')
  // link.className = 'App-link'
  // link.href = "https://reactjs.org"
  // link.target="_blank"
  // link.rel="noopener noreferrer"
  // link.textContent = 'Learn React'
  // header.append(link)

  // const year = document.createElement('h2')
  // year.textContent = new Date().getFullYear()
  // header.append(year)

  return (
    createElement('div', {className: "App"}, 
      createElement('header', {className: "App-header"}, 
        createElement('img', {src: logo, className: "App-logo", alt: "logo"}),
        createElement('p', null, 
          'Edit',
          createElement('code', null, 'src/App.js'), 
          'and save to reload.'
        ),
        createElement('a', {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer"
        }, 'Learn React'),
        createElement('h2', null, new Date().getFullYear())
      )
    )
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <h2>{new Date().getFullYear()}</h2>
    //   </header>
    // </div>
  );
}

export default App;
