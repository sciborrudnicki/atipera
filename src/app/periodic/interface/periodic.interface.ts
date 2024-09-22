import { PeriodicElement } from './periodic-element.interface';

export interface PeriodicTableColumns {
  name: keyof PeriodicElement;
  header: string;
};
