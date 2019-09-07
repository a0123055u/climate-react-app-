import React from "react";
import Titles from "./components/Titles";
import Forms from"./components/Forms";
import TableDisplay from"./components/TableDisplay";
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class App extends React.Component {

  render(){
    return (
      <div class="container">
      <Titles/>
      <Forms/>
        <TableDisplay />
    </div>
    );

  }
};

export default App;