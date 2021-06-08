import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IBusinessModel } from 'src/app/shared/models/ibusiness.model';

import { CompaniesListService } from 'src/app/shared/services/companies-list.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {

  dataSource = new MatTableDataSource<IBusinessModel>([]);

  constructor(private service: CompaniesListService) { }

  ngOnInit(): void {
    this.service
    .get()
    .subscribe((companies: IBusinessModel[]) => this.dataSource.data = companies);
  }

  filterSearchEvent(event: string): void {
    this.dataSource.filter = event.trim().toLowerCase();
  }

}
