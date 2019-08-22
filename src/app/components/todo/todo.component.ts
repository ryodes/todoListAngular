import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() myClass: String[];
  @Input() todos: String[];

  constructor() {

  }

  ngOnInit() {
  }

  //Delete avec le button les tache qu'on veut supprimer
  delete(index) {
    this.myClass.splice(index, 1);
    this.todos.splice(index, 1);
  }


  //Barre ou débarre les tache ou l'en clique dessus
  onlineDeline(index) {
    if (this.myClass[index] == '')
      this.myClass[index] = 'line';
    else
      this.myClass[index] = '';
  }
}
