import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-docs-page',
  templateUrl: './google-docs-page.component.html',
  styleUrls: ['./google-docs-page.component.scss']
})
export class GoogleDocsPageComponent implements OnInit {

  constructor() { }

  onClick() {
    console.log('12')
  }

  ngOnInit(): void {
  }

}
