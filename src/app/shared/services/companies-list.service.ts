import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBusinessModel } from 'src/app/shared/models/ibusiness.model';


@Injectable({ providedIn: 'root' })
export class CompaniesListService {

    private API_URL = 'https://60820a0e827b350017cfbaea.mockapi.io/api/v1/itau_teste';

    constructor(private http: HttpClient) {}

    get(): Observable<IBusinessModel[]> {
        return this.http.get<IBusinessModel[]>(this.API_URL);
    }

    getById(id: number): Observable<IBusinessModel> {
        return this.http.get<IBusinessModel>(this.API_URL + `/${id}`);
    }

}
