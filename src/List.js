import React, { Component } from 'react';
import './style_Home.css';
import './style_Home_Text.css';
import './style.css';
<link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Kanit|Open+Sans" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
<link rel="stylesheet" href="css/style_Time.css">
<link rel="stylesheet" href="css/style.css">

export class List extends Component {

  render() {
  
      return (
   <div>
  <div id="app2"></div>
  <div id="app">
  <h2>มาลิสต์บุญกันเถอะ</h2>
  <form id="addTodo" @submit.prevent="addTodo">
    <input type="text" 
           v-model="currentTodo.text"
           placeholder="บุญที่ท่านกำลังสร้าง + วงเงิน">
           
    <button className="btn btn-primary" 
           
            type="submit">
      <i className="fa fa-plus"></i>
    </button>
  </form>


  <transition-group name="slide" tag="ul" id="todoList">
    <li className="todo" 
        v-for="(todo, index) in filteredTodos" 
        :key="todo.id">
      <div v-show="todo.editing === false">
        <div className="todo__content">
          <span @click="toggleComplete(todo)" 
                className="todo__text"
                :className="{ complete : todo.complete }"
                >
            <i v-if="!todo.complete" className="fa fa-square-o"></i>
            <i v-if="todo.complete" className="fa fa-check-square-o"></i>
            {{ todo.text }}
          </span>
          <span className="todo__buttons">
            <button className="btn btn-primary" 
                    @click="toggleEditing(todo)">
              <i className="fa fa-pencil-square-o"></i>
            </button>
            <button type="button" className="btn btn-primary">
            <a href="index_edit_list.html" target="_blank" style="color:#FFFFFF;">
              <i className="fa fa-book"></i></a>
            </button>
            <button className="btn btn-primary" 
                    @click="deleteTodo(todo)">
              <i className="fa fa-times"></i>
            </button>
          </span>
        </div>
      </div>
      <div v-show="todo.editing === true">
        <form @submit.prevent="toggleEditing(todo)"
              className="todo__content">
          <input @input="updateTodo"
                 :value="todo.text"
                 :id="todo.id"
                 className="editing todo__input"
                 ref="edit_input">
          <span className="todo__buttons">
            <button className="btn btn-primary" 
                    type="submit">
              <i className="fa fa-check"></i>
            </button>
          </span>
        </form>
      </div>
    </li>
  </transition-group>
  <div id="filterButtons">
    <button className="btn btn-primary"
            :className="filter === 'all' ? 'active' : ''"
            :disabled="filter === 'all' ? true : false"
            @click="setFilter('all')">
      <i className="fa fa-list"></i>
    </button>
    <button className="btn btn-primary"
            :className="filter === 'incomplete' ? 'active' : ''"
            :disabled="filter === 'incomplete' ? true : false"
            @click="setFilter('incomplete')">
      <i className="fa fa-square-o"></i>
    </button>
    <button className="btn btn-primary"
            :className="filter === 'complete' ? 'active' : ''"
            :disabled="filter === 'complete' ? true : false"
            @click="setFilter('complete')">
      <i className="fa fa-check-square-o"></i>
    </button>
  </div>
</div>


<script src='https://cdnjs.cloudflare.com/ajax/libs/node-uuid/1.4.7/uuid.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.4/vue.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/vuex/2.2.1/vuex.js'></script>

    <script src="js/index.js"></script>


  <script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js'></script>
  <script src="js/index_Time.js"></script>

     </div>
      );
  }
}



