import { Component, Input, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { ColumnItem, DataItem } from 'src/app/routing/website/routing/site/jira/pages/jira-page/const';
import { JiraData } from 'src/app/store/jira-store/const';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() listOfColumns: ColumnItem[] = []
  
  @Input() listOfData: JiraData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
