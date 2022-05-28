import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  nodes = [
    {
      title: 'Работа с АС ТП',
      key: '1',
      expanded: true,
      icon: 'smile',
      children: [
        { title: 'Формирование фильтра', key: '11', icon: 'meh', isLeaf: true },
        // { title: 'leaf', key: '12', icon: 'frown', isLeaf: true }
      ]
    },
    {
      title: 'Работа с JIRA',
      key: '2',
      expanded: false,
      icon: 'smile',
      children: [
        { title: 'Информация по инцидентам', key: '21', icon: 'frown', isLeaf: true },
        // { title: 'leaf', key: '22', icon: 'frown', isLeaf: true }
      ]
    },
    {
      title: 'Работа с Google Docs',
      key: '3',
      expanded: false,
      icon: 'smile',
      children: [
        { title: 'Считывание с ГД', key: '31', icon: 'frown', isLeaf: true },
        { title: 'Формирование фильтра АСТП', key: '32', icon: 'frown', isLeaf: true },
        { title: 'Информация из Jira', key: '32', icon: 'frown', isLeaf: true }
      ]
    },
    {
      title: 'Работа с аналитической БД',
      key: '4',
      expanded: false,
      icon: 'smile',
      children: [
        { title: 'Полная информация по гуидам заявления, гуидам решений, внешнему номеру заявления, регистрационному номеру заявления', key: '41', icon: 'frown', isLeaf: true },
        { title: 'Поиск по гуиду заявления с возможностью выбора таблиц и ПУВ', key: '42', icon: 'frown', isLeaf: true }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
