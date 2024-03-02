import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './ToDo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos: ToDo[] = [];
  newTodo: string;
  newValue: string;
  
  saveTodo() {
    if (this.newTodo) {
      let todo = new ToDo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';

      console.log(this.todos)
    }
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((v, i) => i !== id);
    //recebe o id do todo e filtra todos os valores(v = value) do array, o que não tiver o v do id é mantido.
  }

  updateTodo(id: number) {
    let newValue = prompt("Informe um valor");

    // caso o usuário passe um usuário deixe o prompt vazio o valor continua o mesmo.
    if (newValue) {
      if (newValue !== '') {
        this.todos[id].name = newValue; //se diferente de vazio atualiza.
      }
    }
  }
}
