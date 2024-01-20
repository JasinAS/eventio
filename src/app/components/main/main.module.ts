import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { LocationsComponent } from './components/locations/locations.component';
import { AuthGuardService } from 'src/app/guards/auth.guard';

const routes = [
  {
    path: 'dashboard',
    component: LocationsComponent,
    canLoad: [AuthGuardService],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MainComponent, LocationsComponent],
})
export class MainModule {}
