import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stub-page',
  imports: [],
  templateUrl: './stub-page.html',
  styleUrl: './stub-page.css',
})
export class StubPage {
  eyebrow = input('Скоро будет готово');
  title = input('Раздел в гиперпространстве');
  description = input('Архивы ещё собираются. Загляните позже — этот сектор галактики скоро откроется.');
}
