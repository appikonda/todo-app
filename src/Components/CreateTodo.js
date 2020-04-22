import React, {Component} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap'

export default class CreateTodo extends Component{
    constructor(props) {
        super(props);

        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { 
            description: '',
            responsible: '',
            priority: '',
            completed: false
        }
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeResponsible(e){
        this.setState({
            responsible : e.target.value
        });
    }

  

     onChangePriority = (event) => {
        this.setState({priority : event.target.value});
      };

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.description}`);
        console.log(`Todo Responsible: ${this.state.responsible}`);
        console.log(`Todo Priority: ${this.state.priority}`);
        console.log(`Todo Completed: ${this.state.completed}`);

        this.setState({
            description: '',
            responsible: '',
            priority: '',
            completed: false
        })
    }

    render(){
        return(
            <div style={{marginTop: 40}}>
               <Form>
                <Form.Group as={Row} controlId="description">
                  <Form.Label column sm={2}>Description</Form.Label>
                  <Col sm={10}>
                   <Form.Control type="text" placeholder="description"  
                   value ={this.state.description}
                   onChange = {this.onChangeDescription.bind(this)}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="responsible">
                    <Form.Label column sm={2}>
      Responsible
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Responsible"
      value ={this.state.responsible}
      onChange = {this.onChangeResponsible.bind(this)} />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Priority
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="low"
          name="priority"
          id="low"
          value="low"
          checked={this.state.priority==='low'} 
          onChange={this.onChangePriority.bind(this)}
        />
        <Form.Check
          type="radio"
          label="medium"
          name="priority"
          id="medium"
          value="medium"
          checked={this.state.priority==='medium'} 
          onChange={this.onChangePriority}
        />
        <Form.Check
          type="radio"
          label="high"
          name="priority"
          id="high"
          value="high"
          checked={this.state.priority==='high'} 
          onChange={this.onChangePriority}
        />
      </Col>
    </Form.Group>
  </fieldset>
 

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" onSubmit={this.onSubmit.bind(this)}>Submit</Button>
    </Col>
  </Form.Group>
</Form>
                
            
            </div>
        )
    }
}