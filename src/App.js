import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TodoList from './Components/TodoList';
import EditTodo from './Components/EditTodo';
import CreateTodo from './Components/CreateTodo';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="container">
      <AppBar >
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="close">
            </IconButton>
            <Typography variant="h6">
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
      <Route path ="/" exact component={TodoList}/>
      <Route path= "/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
     </div> 
    </Router>
    
  );
}

export default App;
