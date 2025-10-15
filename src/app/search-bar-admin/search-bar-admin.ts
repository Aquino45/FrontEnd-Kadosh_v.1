import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar-admin.html',
  styleUrls: ['./search-bar-admin.css']
})
export class SearchBarAdminComponent {
  query: string = '';

  /** Se emite cuando el usuario presiona Enter o el botón */
  @Output() search = new EventEmitter<string>();

  onSubmit() {
    const term = this.query.trim();
    if (term) this.search.emit(term);
  }
}
