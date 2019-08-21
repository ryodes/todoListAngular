import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String;
  todos: String[];;
  myClass: String[];
  inputData: String;


  constructor() {
    this.title = "My TodoList";
    this.todos = [];
    this.myClass = [];
    this.inputData = "";
  }

  @Output() todo = new EventEmitter();

  add() {
    this.todos.push(this.inputData);
    this.myClass.push("");
    this.inputData = "";
  }

  sendTodo(tableTodo) {
    this.todo.emit(tableTodo);
    console.log(tableTodo.length);
  }

  ngOnInit() {
  }
}
