import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('one-way-binding');
  a:number=0;
  b:number=0;
  c:number=0;
  add(){
    this.c=this.a+this.b;
    
  }
}
