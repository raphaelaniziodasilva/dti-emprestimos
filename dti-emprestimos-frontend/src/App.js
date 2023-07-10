import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Post from './pages/Post/post.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Post/>} />
      </Routes>
    </Router>
  );
}

console.log(App);

export default App;
