import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    }

}
