import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { JiraData } from 'src/app/store/jira-store/const';
import { loadJira } from 'src/app/store/jira-store/store/jira.actions';
import { getJiraData } from 'src/app/store/jira-store/store/jira.selectors';
import { ColumnItem } from './const';


@Component({
  selector: 'app-jira-page',
  templateUrl: './jira-page.component.html',
  styleUrls: ['./jira-page.component.scss']
})

export class JiraPageComponent implements OnInit {
  
  listOfColumns: ColumnItem[] = [
    {
      name: 'Номер',
      sortOrder: null,
      sortFn: (a: JiraData, b: JiraData) => a.number.localeCompare(b.number),
      sortDirections: [null],//['ascend', 'descend', null],
      filterMultiple: false,
      listOfFilter: [],
      //   { text: 'Joe1', value: 'Joe' },
      //   { text: 'Jim', value: 'Jim', byDefault: true }
      // ],
      filterFn: null//(list: string[], item: JiraData) => list.some(number => item.number.indexOf(number) !== -1)
    },
    {
      name: 'Заголовок',
      sortOrder: 'descend',
      sortFn: (a: JiraData, b: JiraData) => a.title.localeCompare(b.title),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Исполнитель',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: JiraData, b: JiraData) => a.user.localeCompare(b.user),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: (user: string, item: JiraData) => item.user.indexOf(user) !== -1
    },
    {
      name: 'Статус',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: JiraData, b: JiraData) => a.status.localeCompare(b.status),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: (status: string, item: JiraData) => item.status.indexOf(status) !== -1
    },
    {
      name: 'Дата',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: JiraData, b: JiraData) => a.time.localeCompare(b.time),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: (time: string, item: JiraData) => item.time.indexOf(time) !== -1
    },
    {
      name: 'Приоритет',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: JiraData, b: JiraData) => a.priority.localeCompare(b.priority),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: (priority: string, item: JiraData) => item.priority.indexOf(priority) !== -1
    }
  ];

  listOfData: JiraData[] = [
    {
      key: 1,
      number: 'John Brown',
      title: '32',
      user: 'New York No. 1 Lake Park',
      status: 'New York No. 1 Lake Park',
      time: 'New York No. 1 Lake Park',
      priority: 'New York No. 1 Lake Park',
    },
  ];
  
  listOfData$ = this.store$.pipe(select(getJiraData))

  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      let values = this.validateForm.value;

      let tempArr: any[] = []
      while (values['JiraNumbers'].length > 1) {
        let num = values['JiraNumbers'].substr(values['JiraNumbers'].indexOf('PFRPUV'), 12)
        if (tempArr.indexOf(num) === -1)
          tempArr.push(num)
        values['JiraNumbers'] = values['JiraNumbers'].slice(values['JiraNumbers'].indexOf('PFRPUV') + 12)
        if (values['JiraNumbers'].indexOf('PFRPUV') === -1) break
      }
      values['JiraNumbers'] = tempArr
      this.store$.dispatch(loadJira(values))


      console.log({
        "addressJira": "{\"JiraNumbers\":[\"PFRPUV-51132\"],\"login\":\"gomboev.solbon\",\"password\":\"OTR2jira!\"}"
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private store$: Store
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
      JiraNumbers: [null, [Validators.required]],
    });
  }

}
