import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleData } from 'src/app/store/google-store/const';
import { loadGoogle } from 'src/app/store/google-store/store/google.actions';
import { ColumnItemGoogle } from './const';
import { getGoogleData } from 'src/app/store/google-store/store/google.selectors'

@Component({
  selector: 'app-google-docs-page',
  templateUrl: './google-docs-page.component.html',
  styleUrls: ['./google-docs-page.component.scss']
})
export class GoogleDocsPageComponent implements OnInit {

  listOfColumns: ColumnItemGoogle[] = [
    {
      name: 'Номер',
      sortOrder: null,
      sortFn: (a: GoogleData, b: GoogleData) => a['№'].localeCompare(b['№']),
      sortDirections: [null],//['ascend', 'descend', null],
      filterMultiple: false,
      listOfFilter: [],
      //   { text: 'Joe1', value: 'Joe' },
      //   { text: 'Jim', value: 'Jim', byDefault: true }
      // ],
      filterFn: null//(list: string[], item: GoogleData) => list.some(number => item.number.indexOf(number) !== -1)
    },
    {
      name: 'Дата',
      sortOrder: 'descend',
      sortFn: (a: GoogleData, b: GoogleData) => a['Дата Создано'].localeCompare(b['Дата Создано']),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Классификация',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: GoogleData, b: GoogleData) => a['Классификация'].localeCompare(b['Классификация']),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
      // filterFn: (user: string, item: GoogleData) => item.user.indexOf(user) !== -1
    },
    {
      name: 'Приоритет',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: GoogleData, b: GoogleData) => a['Приоритет'].localeCompare(b['Приоритет']),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Исполнитель',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: GoogleData, b: GoogleData) => a['Исполнитель'].localeCompare(b['Исполнитель']),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Завершено',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: GoogleData, b: GoogleData) => a['Дата Завершено'].localeCompare(b['Дата Завершено']),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Комментарий',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: GoogleData, b: GoogleData) => a['Комментарий'].localeCompare(b['Комментарий']),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    }
  ];


  listOfData$ = this.store$.pipe(select(getGoogleData))

  constructor(
    private store$: Store
  ) { }

  onClick() {
    console.log('12')
    this.store$.dispatch(loadGoogle())
  }

  ngOnInit(): void {
  }

}
