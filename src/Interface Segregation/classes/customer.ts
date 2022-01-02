import {
  IEnterpriseCustomer,
  IIndividualCustomer,
} from "./interfaces/customer-protocol";

export class IndividualCustomer implements IIndividualCustomer {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = cnpj;
  }
}

export class EnterpriseCustomer implements IEnterpriseCustomer {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
