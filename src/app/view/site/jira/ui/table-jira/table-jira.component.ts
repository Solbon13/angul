import { Component, Input, OnInit } from '@angular/core';
import { ColumnItem } from 'src/app/routing/website/routing/site/jira/pages/jira-page/const';
import { JiraData } from 'src/app/store/jira-store/const';

@Component({
  selector: 'app-table-jira',
  templateUrl: './table-jira.component.html',
  styleUrls: ['./table-jira.component.scss']
})
export class TableJiraComponent implements OnInit {

  @Input() listOfColumns: ColumnItem[] = []
  
  @Input() listOfData: JiraData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
