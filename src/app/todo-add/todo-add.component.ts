import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
//  @Input() todo2: string = "";
//  @Output() event = new EventEmitter<string>();

//  add(){
//   this.event.emit(this.todo2);
//   this.todo2 = "";
//  }

todo: number = 0;
todos: number[] = [];

add(){
  this.todos.push(this.todo);
  this.todo = 0;
}
}
