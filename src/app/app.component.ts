import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly sidebarService: NbSidebarService, private readonly themeService: NbThemeService) {
  }
  title = 'formula-one';

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true
    },
    {
      title: 'Circuits',
      icon: 'flag-outline',
      link: '/circuits',
      home: true
    },
    {
      title: 'Drivers',
      icon: 'person-outline',
      link: '/drivers',
      home: true
    },

  ];

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }

  /*
  changeTheme() {
    this.themeService.changeTheme('dark');
  }
   */
}
