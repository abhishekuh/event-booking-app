import { Event } from './models/event.model';

export interface AppState {
  readonly event: Event[];
}