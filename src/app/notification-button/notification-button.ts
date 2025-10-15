import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-button.html',
  styleUrls: ['./notification-button.css']
})
export class NotificationButtonComponent {
  @Input() count = 0;
  @Input() color = '#552a6f';
  @Input() icon = 'notifications_none'; // puedes cambiar por "notifications"

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
