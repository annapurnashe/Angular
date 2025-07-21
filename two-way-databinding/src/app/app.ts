import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  searchText: string = '';
  imageUrl: string = '';
  characterFound: boolean = false;

   onSearch() {
    const name = this.searchText.trim().toLowerCase();
    if (name === 'doremon') {
      this.imageUrl = 'two-way-databinding/public/image.png';
      this.characterFound = true;
    } else if (name === 'sinchan') {
      this.imageUrl = '';
      this.characterFound = true;
    } else {
      this.imageUrl = '';
      this.characterFound = false;
    }
  }
}
