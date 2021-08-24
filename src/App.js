import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";


function App() {
      const [mode, setMode] = useState('primary');
     const [alert, setAlert] = useState(null);
     const [colorva, setColorva] = useState('primary');

     const changesec = () =>{
      setMode('secondary')
  }
  const changesuc= () =>{
      setMode('success')
  }


      const showAlert = (message, type) => {
            setAlert({
                  msg:message,
                  type: type
            })
            setTimeout(() => {
                  setAlert(null);
            },2000);

      }

      



      const toggleMode = () => {
            if(mode === 'primary'){
                  setMode('dark');
                  document.body.style.backgroundColor='grey'
                   showAlert('Dark mode has been enabled', 'Success');
            }
            else{
                  setMode('primary');
                  document.body.style.backgroundColor='#7fdcf1ad'
                  showAlert('Light mode has been enabled', 'Success')
            }
      
      }
  return (
  <>
      {/* <Router> */}
  <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} color={colorva} changesec={changesec} changesuc={changesuc}/>
  <Alert alert={showAlert}  alert={alert} />
  <div className="container my-3">
  {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <Textform heading = "Enter your text here" mode={mode} toggleMode={toggleMode}/>
          {/* </Route>
        </Switch> */}
  </div>
  
  {/* </Router> */}
  </>
      );
}

      export default App;
