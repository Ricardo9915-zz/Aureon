import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public gridData: any[] = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        UnitPrice: 18,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages'
        }
    },
    {
       /*...*/
    }
];

}
