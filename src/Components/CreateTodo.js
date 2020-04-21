import React, {Component} from 'react';

export default class CreateTodo extends Component{

    constructor(props) {
        super(props);

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

    onChangeResposbile(e){
        this.setState({
            responsible : e.target.value
        });
    }

    onChangePriority(e){
        this.setState({
            priority: e.target.value
        })
    }

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
            <div style={{marginTop: 80}}>
                <p>Create a ToDo</p>
            </div>
        )
    }

}