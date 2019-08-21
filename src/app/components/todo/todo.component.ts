import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  inputData: String = "";
  myClass;
  @Input() todos: String[];

  constructor() {

  }

  ngOnInit() {
  }

  delete(index) {
    this.todos.splice(index, 1);
    this.myClass.splice(index, 1);
  }

  onlineDeline(index) {
    if (this.myClass[index] == '')
        this.myClass[index] = 'line';
    else
        this.myClass[index] = '';
  }
}
