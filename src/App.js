import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import TodoList from './Components/TodoList';
import EditTodo from './Components/EditTodo';
import CreateTodo from './Components/CreateTodo';
import Container from 'react-bootstrap/Container'

import{Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Navbar bg="dark" variant="dark">
           <Navbar.Brand href="/">Todo App</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Todos</Nav.Link>
            <Nav.Link href="/create">Create Todo</Nav.Link>
           </Nav>
          </Navbar>

          <Route path ="/" exact component={TodoList}/>
          <Route path= "/edit/:id" component={EditTodo}/>
          <Route path="/create" component={CreateTodo}/>
        </Container>
       </div> 
    </Router>
    
  );
}

export default App;
