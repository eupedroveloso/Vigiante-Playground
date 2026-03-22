import { Injectable, signal } from '@angular/core';
import type { MapPin } from '../shared/map/map.component';

export interface ProjectUser {
  name: string;
  email: string;
  status: 'ativo' | 'desativado';
}

export interface ProjectFile {
  name: string;
  thumbnailUrl: string;
}

export interface Project {
  id: string;
  name: string;
  alias: string;
  description: string;
  address: string;
  externalUrl: string;
  layerCount: number;
  locationCount: number;
  editedAt: string;
  center: [number, number];
  zoom: number;
  pins: MapPin[];
  users: ProjectUser[];
  files: ProjectFile[];
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  readonly projects = signal<Project[]>([]);

  create(data: Pick<Project, 'name' | 'alias' | 'description' | 'address' | 'externalUrl' | 'users' | 'files'>): void {
    this.projects.update(list => [
      ...list,
      {
        id: crypto.randomUUID(),
        ...data,
        layerCount: 0,
        locationCount: 0,
        editedAt: 'agora',
        center: [-15.77, -47.87] as [number, number],
        zoom: 11,
        pins: [],
      },
    ]);
  }

  duplicate(id: string): void {
    this.projects.update(list => {
      const src = list.find(p => p.id === id);
      if (!src) return list;
      return [...list, { ...src, id: crypto.randomUUID(), name: `${src.name} (cópia)`, editedAt: 'agora' }];
    });
  }

  delete(id: string): void {
    this.projects.update(list => list.filter(p => p.id !== id));
  }
}
