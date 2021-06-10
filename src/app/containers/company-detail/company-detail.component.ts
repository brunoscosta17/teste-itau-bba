import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
        private router: Router,
        private toastr: ToastrService,
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesListService,
    ) { }

    ngOnInit(): void {

        const companyId = this.activatedRoute.snapshot.params.id;

        this.companiesService
            .getById(companyId)
            .subscribe((company: IBusinessModel) => {
                this.company = company;
                this.companyName = company.name;
                this.companyId = company.id;
            });
    }

    handleSubmit(company: IBusinessModel): void {
        console.log(company);
        this.toastr.success('Dados salvos com sucesso!', 'success');
        this.router.navigate(['']);
    }

}
