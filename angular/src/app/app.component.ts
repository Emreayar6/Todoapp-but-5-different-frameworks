import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoApp';

  // State
  todos: string[] = [];
  todoText = '';

  // SideEfects
  ngOnInit() {
    const Todos = localStorage.getItem('todos');
    this.todos = JSON.parse(Todos as string) || [];
  }

  // Function
  pushTodo() {
    this.todos.push(this.todoText);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todoText = '';
  }
}
