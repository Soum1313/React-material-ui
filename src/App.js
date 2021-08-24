import React from 'react'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
import Experiment3 from './Experiment3'
import {Container, AppBar} from '@material-ui/core'
const App = (props) => {
  return (
    <Container>
    
      <div> 
      <AppBar position="static">
      </AppBar>
      </div>

      <Routes>
        <Route path="/">
          <Experiment3 id="s1"  id="s2" />
        </Route>
      </Routes>
    
    </Container>
  )
}
export default App;