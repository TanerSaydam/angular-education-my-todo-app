import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges {
  @Input() todo: number = 0;
  @Input() todos: number[] = [];

ngOnChanges(changes:SimpleChanges){
  console.log(changes);
}
  // add(event:any){
  //   console.log(event);
  //   this.todos.push(event)
  // }
}
