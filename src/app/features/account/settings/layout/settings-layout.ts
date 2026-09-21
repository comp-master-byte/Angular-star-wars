import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar, SidebarOption } from '@shared/components/core';
import { AuthService } from '@shared/services';

@Component({
  selector: 'app-settings-layout',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './settings-layout.html',
  styleUrl: './settings-layout.css',
})
export class SettingsLayout {
  private authService = inject(AuthService);

  get sidebarOptions(): SidebarOption[] {
    const options: SidebarOption[] = [
      { id: 'appearance', label: 'Внешний вид', href: '/account/settings/appearance' },
    ];

    if (this.authService.isAuthed) {
      options.push({ id: 'security', label: 'Безопасность', href: '/account/settings/security' });
    }

    return options;
  }
}
