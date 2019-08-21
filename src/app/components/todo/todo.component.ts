import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todo;
  inputData: String = "";
  myClass;

  constructor() {
    this.todo = [];
    this.myClass = [];
  }

  ngOnInit() {
  }

  add() {
    if (this.inputData.length > 0) {
      this.todo.push(this.inputData);
      this.myClass.push("");
      this.inputData = "";
    }
  }

  delete(index) {
    this.todo.splice(index, 1);
    this.myClass.splice(index, 1);
  }

  onlineDeline(index) {
    if (this.myClass[index] == '')
        this.myClass[index] = 'line';
    else
        this.myClass[index] = '';
  }
}
