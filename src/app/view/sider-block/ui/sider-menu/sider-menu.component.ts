import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider-menu',
  templateUrl: './sider-menu.component.html',
  styleUrls: ['./sider-menu.component.scss']
})
export class SiderMenuComponent implements OnInit {

  menuData = [
    {
      icon: 'upload',
      title: 'andb',
      children: [
        {
          icon: 'upload',
          title: 'dfdf',
          href: '/site/andb',
        }
      ]
    },
    {
      icon: 'bar-chart',
      title: 'jira',
      children: [
        {
          href: '/site/jira',
          icon: 'bar-chart',
          title: 'jira',
        },
      ]
    },
    {
      icon: 'cloud-o',
      title: 'astp',
      children: [
        {
          icon: 'cloud-o',
          title: 'astp',
          href: '/site/astp'
        },
      ]
    },
    {
      icon: 'appstore-o',
      title: 'google-docs',
      children: [
        {
          icon: 'appstore-o',
          title: 'google-docs',
          href: '/site/google-docs'
        },
        {
          icon: 'appstore-o',
          title: 'google-docs-filter-astp',
          href: '/site/google-docs/filter-astp'
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
