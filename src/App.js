import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
function App(){
  return (
      <form onSubmit="" className="form-group" id="login-form">
        <div class="form-group">
          <label for=""></label>
          <input type="text"
            class="form-control" name="" id="" aria-describedby="helpId" placeholder="Username"/>
        </div>
        <div class="form-group">
          <label for=""></label>
          <input type="password"
            class="form-control" name="" id="" aria-describedby="helpId" placeholder="Password"/>
        </div>
        <button type="submit" class="btn btn-primary">Log in</button>
      </form>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
