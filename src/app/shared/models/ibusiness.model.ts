export class IBusinessModel {

    constructor(
        public id?: number,
        public name?: string,
        public business?: string,
        public valuation?: number,
        public active?: boolean,
        public cep?: string,
        public cnpj?: number,
    ) {}

}
