import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'projetos',
    pathMatch: 'full',
  },
  {
    path: 'projetos',
    loadComponent: () =>
      import('./pages/projetos/projetos.component').then(
        (m) => m.ProjetosComponent
      ),
  },
  {
    path: 'projeto-forms',
    loadComponent: () =>
      import('./pages/projeto-forms/projeto-forms.component').then(
        (m) => m.ProjetoFormsComponent
      ),
  },
  {
    path: 'styleguide',
    loadComponent: () =>
      import('./pages/styleguide/styleguide.component').then(
        (m) => m.StyleguideComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'colors',
        pathMatch: 'full',
      },
      {
        path: 'colors',
        loadComponent: () =>
          import('./pages/styleguide/ds-pages/ds-colors/ds-colors.component').then(
            (m) => m.DsColorsComponent
          ),
      },
      {
        path: 'typography',
        loadComponent: () =>
          import('./pages/styleguide/ds-pages/ds-typography/ds-typography.component').then(
            (m) => m.DsTypographyComponent
          ),
      },
      {
        path: 'spacing',
        loadComponent: () =>
          import('./pages/styleguide/ds-pages/ds-spacing/ds-spacing.component').then(
            (m) => m.DsSpacingComponent
          ),
      },
      {
        path: 'radii',
        loadComponent: () =>
          import('./pages/styleguide/ds-pages/ds-radii/ds-radii.component').then(
            (m) => m.DsRadiiComponent
          ),
      },
      {
        path: 'effects',
        loadComponent: () =>
          import('./pages/styleguide/ds-pages/ds-effects/ds-effects.component').then(
            (m) => m.DsEffectsComponent
          ),
      },
      {
        path: 'icons',
        loadComponent: () =>
          import('./pages/styleguide/ds-pages/ds-icons/ds-icons.component').then(
            (m) => m.DsIconsComponent
          ),
      },
      {
        path: 'components',
        children: [
          {
            path: '',
            redirectTo: 'card-project',
            pathMatch: 'full',
          },
          {
            path: 'card-project',
            loadComponent: () =>
              import('./pages/styleguide/ds-pages/ds-card-project/ds-card-project.component').then(
                (m) => m.DsCardProjectComponent
              ),
          },
          {
            path: 'context-bar',
            loadComponent: () =>
              import('./pages/styleguide/ds-pages/ds-context-bar/ds-context-bar.component').then(
                (m) => m.DsContextBarComponent
              ),
          },
          {
            path: 'breadcrumb',
            loadComponent: () =>
              import('./pages/styleguide/ds-pages/ds-breadcrumb/ds-breadcrumb.component').then(
                (m) => m.DsBreadcrumbComponent
              ),
          },
          {
            path: 'tab-bar',
            loadComponent: () =>
              import('./pages/styleguide/ds-pages/ds-tab-bar/ds-tab-bar.component').then(
                (m) => m.DsTabBarComponent
              ),
          },
        ],
      },
    ],
  },
];
