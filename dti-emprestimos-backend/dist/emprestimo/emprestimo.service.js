"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoService = void 0;
const common_1 = require("@nestjs/common");
const validar_cnpj_1 = require("../utils/validar-cnpj");
const validar_cpf_1 = require("../utils/validar-cpf");
let EmprestimoService = class EmprestimoService {
    async createEmprestimo(data) {
        try {
            const { tipoPessoa, documento, valorDivida, valorEemprestimo } = data;
            if (tipoPessoa === 'PF') {
                const cpfValido = (0, validar_cpf_1.validarCPF)(documento);
                if (!cpfValido) {
                    return new common_1.BadRequestException('O CPF está inválido.');
                }
                const emprestimo = await this.SolicitaEmprestimo(valorEemprestimo, valorDivida);
                return { cpfValido, emprestimo };
            }
            else if (tipoPessoa === 'PJ') {
                const cnpjValido = (0, validar_cnpj_1.validarCNPJ)(documento);
                if (!cnpjValido) {
                    return new common_1.BadRequestException('O CNPJ está inválido.');
                }
                const emprestimo = await this.SolicitaEmprestimo(valorEemprestimo, valorDivida);
                return { cnpjValido, emprestimo };
            }
            else {
                return new common_1.BadRequestException('Digite PF ou PJ');
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async SolicitaEmprestimo(valorEmprestimo, valorDivida) {
        if (valorEmprestimo >= 50000) {
            return 'Empréstimo negado: valor maior que R$50.000,00.';
        }
        else if (valorEmprestimo > valorDivida / 2) {
            return 'Empréstimo negado: valor é maior que a metade da dívida.';
        }
        else {
            return 'Empréstimo aprovado.';
        }
    }
};
EmprestimoService = __decorate([
    (0, common_1.Injectable)()
], EmprestimoService);
exports.EmprestimoService = EmprestimoService;
//# sourceMappingURL=emprestimo.service.js.map