import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String;
  todos: String[];
  myClass: String[];
  inputData: String;


  constructor() {
    this.title = "My TodoList";
      // Contiendra les tâche à afficher
    this.todos = [];
      // Contiendra les class des tâche pour afficher les taches rayer
    this.myClass = [];
      // Stock la saisi de l'utilisateur de l'input
    this.inputData = "";
  }

  //Emettre les deux tableau todos et myCLass au parent
  @Output() emitter = new EventEmitter();
  @Output() emitter2 = new EventEmitter();

    //ajoute les tache saisie dans le tableau todo et augmente le tableau myClass puis reset l'input
  add() {
    if (this.inputData.length > 0) {
      this.todos.push(this.inputData);
      this.myClass.push("");
      this.inputData = "";
    }
  }

  // Emet le tableau todos au parent
  sendTodo(tableTodo) {
    this.emitter.emit(tableTodo);
  }
  // Emet le tableau myClass au parent
  sendClass(tableClass) {
    this.emitter.emit(tableClass);
  }

  ngOnInit() {
  }
}
