import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import * as cep from 'cep-promise';
declare let require: any;
const cep = require('cep-promise');

@Component({
    selector: 'app-cep',
    templateUrl: './cep.component.html',
    styleUrls: ['./cep.component.sass']
})
export class CepComponent implements OnInit {

    form: FormGroup;

    @Input() cep: string | undefined;

    constructor(
        formBuilder: FormBuilder
    ) {
        this.form = formBuilder.group({
            cep: ['', Validators.required],
            street: ['', Validators.required],
            neighborhood: ['', Validators.required],
            state: ['', Validators.required],
            city: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        console.log(this.cep);
        cep(this.cep)
            .then((cepResult: any) => {
                this.form.patchValue(cepResult);
            });
    }

}
