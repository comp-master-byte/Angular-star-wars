import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@shared/services';
import { ContextMenu, ContextMenuOption } from '@shared/components/ui';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive, ContextMenu],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  private router = inject(Router);
  private authService = inject(AuthService);
  public isContextMenuVisible = signal(false);

  public routes = [
    { path: '/', name: 'Персонажи' },
    { path: '/episodes', name: 'Фильмы' },
    { path: '/planets', name: 'Планеты' },
    { path: '/species', name: 'Биологический вид' },
    { path: '/starships', name: 'Зведные корабли' },
    { path: '/vehicles', name: 'Транспортные средства' },
  ];

  get contextMenuOptions(): ContextMenuOption[] {
    if (!this.authService.isAuthed) {
      return [
        { id: 'sign-in', label: 'Войти', variant: 'accent', icon: '/svg/sign-in.svg' },
        { id: 'favorites', label: 'Избранное', variant: 'default', icon: '/svg/favorites.svg' },
        { id: 'settings', label: 'Настройки', variant: 'default', icon: '/svg/settings.svg' },
      ];
    }

    return [
      { id: 'profile', label: 'Профиль', variant: 'default', icon: '/svg/profile.svg' },
      { id: 'favorites', label: 'Избранное', variant: 'default', icon: '/svg/favorites.svg' },
      { id: 'settings', label: 'Настройки', variant: 'default', icon: '/svg/settings.svg' },
      { id: 'logout', label: 'Выйти', variant: 'danger', icon: '/svg/logout.svg' },
    ];
  }

  handleProfileClick() {
    this.isContextMenuVisible.update((isVisible) => !isVisible);
  }

  handleProfileMenuSelect(option: ContextMenuOption) {
    if (option.id === 'sign-in') {
      this.router.navigate(['/sign-in']);
    }

    if (option.id === 'profile') {
      this.router.navigate(['/account/profile']);
    }

    if (option.id === 'favorites') {
      this.router.navigate(['/account/favorites']);
    }

    if (option.id === 'settings') {
      this.router.navigate(['/account/settings/appearance']);
    }

    if (option.id === 'logout') {
      this.authService.logout();
    }

    this.isContextMenuVisible.set(false);
  }
}
