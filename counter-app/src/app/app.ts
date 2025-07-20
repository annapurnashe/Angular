import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counter-app');

   count=0
  handleIncrement(){
    this.count=this.count+1
  }
  
  handleDecrement(){
    this.count=this.count-1
  }
  handleReset(){
    this.count=0

  }
    
   
}
