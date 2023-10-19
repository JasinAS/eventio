import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { LocationsComponent } from './components/locations/locations.component';

const routes = [
  {
    path: 'locations',
    component: LocationsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MainComponent, LocationsComponent],
})
export class MainModule {}
