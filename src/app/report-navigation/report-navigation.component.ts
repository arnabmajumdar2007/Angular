import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-navigation',
  templateUrl: './report-navigation.component.html',
  styleUrls: ['./report-navigation.component.css']
})
export class ReportNavigationComponent implements OnInit {
  reportNavigation = [
    {
      title: 'Menu Item 1',
      url: '/',
      target: '_blank',
      iconClass: 'fa-fw fa-dashboard'
    },
    {
      title: 'Menu Item 2',
      active: true,
      iconClass: 'fa-fw fa-dashboard',
      navigationItems: [
        {
          title: 'Sub-Menu Item 1',
          url: '/',
          iconClass: 'fa-fw fa-dashboard'
        },
        {
          title: 'Sub-Menu Item 2',
          url: '/',
          iconClass: 'fa-fw fa-dashboard'
        }
      ]
    }
  ];
  constructor() { }
  ngOnInit() {
  }
}
