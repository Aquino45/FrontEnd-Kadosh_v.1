import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: true,
  imports: [SearchBarComponent] // Importa el componente SearchBarComponent
})
export class HeaderComponent {
  logoSrc = 'assets/Images/logo_Kadosh-2.png';
  logoAlt = 'Logo';

  onSearch(query: string) {
    console.log('Search triggered:', query);
    // Lógica para manejar la búsqueda
  }

  onQueryChange(query: string) {
    console.log('Query changed:', query);
    // Lógica para manejar cambios en el texto de búsqueda
  }
}