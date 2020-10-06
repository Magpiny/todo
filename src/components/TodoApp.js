import React, { Component } from 'react';



class TodoApp extends Component {
    constructor(props){
        super(props);

        this.state = {
        userName : 'Sam',
        todoItems : [
            { action: 'Buy Supper', done:false},
            {action: 'Code code' , done:false},
            {action: 'Do alaundry', done:true},
            { action: 'Attend party', done:false }
        ]

       };
    }

    updateTextValue = (e) => {
    this.setState({ newItemtext: e.target.value})
     }

     createNewTodo = (task) => {
         if(!this.state.todoItems.find(item => item.action == task)){
           this.setState({
            todoItems : [ ...this.state.todoItems, { action:task, done:false } ]
            });
         }
     }
     toggleTodo = (todo) => this.setState({ todoItems : this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item )

      });

   todoTableRows = () => {
   this.state.todoItems.map(
    <TodoRow key = { item.action } item = { item } callback = { this.toggleTodo }  />

   )
   };

   render(){
      return(
          <div>
          <TodoBanner name = { this.state.userName } tasks = { this.state.todoItems}  />

              <div className = "container-fluid">
                  <TodoCreator callback = { this.createNewTodo } />

                  <table className = "table table-striped table-bordered">

                  <thead>
                  <tr>
                  <th> Description </th> <th> Done </th>
                  </tr>
                  </thead>

                  <tbody>
                  { this.todoTableRows }
                  </tbody>
                  </table>
              </div>
          
          </div>
      )
   };

 }


