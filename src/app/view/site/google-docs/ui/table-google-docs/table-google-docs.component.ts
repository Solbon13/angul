import { Component, Input, OnInit } from '@angular/core';
import { ColumnItemGD } from 'src/app/routing/website/routing/site/jira/pages/jira-page/const';
import { GoogleData } from 'src/app/store/google-store/const';

@Component({
  selector: 'app-table-google-docs',
  templateUrl: './table-google-docs.component.html',
  styleUrls: ['./table-google-docs.component.scss']
})
export class TableGoogleDocsComponent implements OnInit {

  @Input() listOfColumns: ColumnItemGD[] = []
  
  @Input() listOfData: GoogleData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
