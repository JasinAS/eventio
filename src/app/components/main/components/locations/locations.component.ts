import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations = [
    {
      name: 'Metropolis SCC',
      address: 'Vrbanja 1, Sarajevo 71000',
      hoursStart: '08:00',
      hoursEnd: '22:00',
      website: 'www.metropolis.ba',
      description:
        'Metropolis tradicija stara već 25 godina je dobila potpuno novu web stranicu I web shop, gdje imate priliku “doživjeti” sve naše nove okuse I recepture ljetnog jelovnika, koji je pomno odabran I pripremljen od strane Metropolis tima.',
      image: '/assets/metropolis.png',
    },
    {
      name: 'Metropolis Ferhadija',
      address: 'Grbavica 14b, Sarajevo 71000',
      hoursStart: '08:00',
      hoursEnd: '22:00',
      website: 'www.metropolis.ba',
      description:
        'Metropolis tradicija stara već 25 godina je dobila potpuno novu web stranicu I web shop, gdje imate priliku “doživjeti” sve naše nove okuse I recepture ljetnog jelovnika, koji je pomno odabran I pripremljen od strane Metropolis tima.',
      image: '/assets/metropolis2.png',
    },
    {
      name: 'Metropolis Bingo City Center',
      address: 'Dzemala Bijedica 174a, Sarajevo 71000',
      hoursStart: '08:00',
      hoursEnd: '22:00',
      website: 'www.metropolis.ba',
      description:
        'Metropolis tradicija stara već 25 godina je dobila potpuno novu web stranicu I web shop, gdje imate priliku “doživjeti” sve naše nove okuse I recepture ljetnog jelovnika, koji je pomno odabran I pripremljen od strane Metropolis tima.',
      image: '/assets/metropolis.png',
    },
    {
      name: 'Metropolis SCC',
      address: 'Vrbanja 1, Sarajevo 71000',
      hoursStart: '08:00',
      hoursEnd: '22:00',
      website: 'www.metropolis.ba',
      description:
        'Metropolis tradicija stara već 25 godina je dobila potpuno novu web stranicu I web shop, gdje imate priliku “doživjeti” sve naše nove okuse I recepture ljetnog jelovnika, koji je pomno odabran I pripremljen od strane Metropolis tima.',
      image: '/assets/metropolis.png',
    },
    {
      name: 'Metropolis Ferhadija',
      address: 'Grbavica 14b, Sarajevo 71000',
      hoursStart: '08:00',
      hoursEnd: '22:00',
      website: 'www.metropolis.ba',
      description:
        'Metropolis tradicija stara već 25 godina je dobila potpuno novu web stranicu I web shop, gdje imate priliku “doživjeti” sve naše nove okuse I recepture ljetnog jelovnika, koji je pomno odabran I pripremljen od strane Metropolis tima.',
      image: '/assets/metropolis2.png',
    },
    {
      name: 'Metropolis Bingo City Center',
      address: 'Dzemala Bijedica 174a, Sarajevo 71000',
      hoursStart: '08:00',
      hoursEnd: '22:00',
      website: 'www.metropolis.ba',
      description:
        'Metropolis tradicija stara već 25 godina je dobila potpuno novu web stranicu I web shop, gdje imate priliku “doživjeti” sve naše nove okuse I recepture ljetnog jelovnika, koji je pomno odabran I pripremljen od strane Metropolis tima.',
      image: '/assets/metropolis.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
