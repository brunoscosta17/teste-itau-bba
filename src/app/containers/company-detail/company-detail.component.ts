import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBusinessModel } from 'src/app/shared/models/ibusiness.model';
import { CompaniesListService } from 'src/app/shared/services/companies-list.service';

@Component({
    selector: 'app-company-detail',
    templateUrl: './company-detail.component.html',
    styleUrls: ['./company-detail.component.sass']
})
export class CompanyDetailComponent implements OnInit {

    company: IBusinessModel | undefined;
    companyName: string | undefined;
    companyId: number | undefined;

    constructor(
        private route: ActivatedRoute,
        private companiesService: CompaniesListService
    ) { }

    ngOnInit(): void {

        const companyId = this.route.snapshot.params.id;

        this.companiesService
            .getById(companyId)
            .subscribe((company: IBusinessModel) => {
                console.log(company);
                this.company = company;
                this.companyName = company.name;
                this.companyId = company.id;
            });
    }

    handleSubmit(company: IBusinessModel): void {
        console.log(company);
    }

}
