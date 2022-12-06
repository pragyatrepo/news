import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import Newscomponent from './component/Newscomponent'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {
  
render() {
  
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<News key="general" category="general" />}/>
          <Route path="/science" element={<News key="science" category="science" />}/>
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>}/>
          <Route path="/technology" element={<News key="technology" category="technology" />}/>
          <Route path="/health" element={<News key="health" category="health" />}/>
          <Route path="/sports" element={<News key="sports" category="sports" />}/>
          <Route path="business" element={<News key="business" category="business"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App


