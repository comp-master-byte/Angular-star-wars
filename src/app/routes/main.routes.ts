import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/main/layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@features/main/characters/characters-page').then((m) => m.CharactersPage),
      },
      {
        path: 'characters/:id',
        loadComponent: () =>
          import('@features/main/characters/character-page/character-page').then((m) => m.CharacterPage),
      },
      {
        path: 'episodes',
        loadComponent: () =>
          import('@features/main/episodes/episodes-page').then((m) => m.EpisodesPage),
      },
      {
        path: 'episodes/:id',
        loadComponent: () =>
          import('@features/main/episodes/episode-page/episode-page').then((m) => m.EpisodePage),
      },
      {
        path: 'planets',
        loadComponent: () =>
          import('@features/main/planets/planets').then((m) => m.Planets),
      },
      {
        path: 'planets/:id',
        loadComponent: () =>
          import('@features/main/planets/planet-page/planet-page').then((m) => m.PlanetPage),
      },
      {
        path: 'species',
        loadComponent: () =>
          import('@features/main/species/species').then((m) => m.Species),
      },
      {
        path: 'vehicles',
        loadComponent: () =>
          import('@features/main/vehicles/vehicles').then((m) => m.Vehicles),
      },
      {
        path: 'starships',
        loadComponent: () =>
          import('@features/main/starships/starships').then((m) => m.Starships),
      },
    ],
  },
];
