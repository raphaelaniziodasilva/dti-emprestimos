"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class EmprestimoDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Tipo da pessoa (PF/PJ).',
        required: true,
        example: 'PF',
    }),
    __metadata("design:type", String)
], EmprestimoDto.prototype, "tipoPessoa", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Documento (CPF/CNPJ).',
        required: true,
        example: '947.483.020-70',
    }),
    __metadata("design:type", String)
], EmprestimoDto.prototype, "documento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 100),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nome da Pessoa/Empresa.',
        required: true,
        minLength: 3,
        maxLength: 100,
        example: 'Halland',
    }),
    __metadata("design:type", String)
], EmprestimoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Número Documento.',
        required: true,
        example: '3.961.471',
    }),
    __metadata("design:type", String)
], EmprestimoDto.prototype, "numeroDocumento", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Valor da dívida ativa atual do cliente.',
        required: true,
        example: 50000,
    }),
    __metadata("design:type", Number)
], EmprestimoDto.prototype, "valorDivida", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Valor do empréstimo solicitado',
        required: true,
        example: 100,
    }),
    __metadata("design:type", Number)
], EmprestimoDto.prototype, "valorEemprestimo", void 0);
exports.EmprestimoDto = EmprestimoDto;
//# sourceMappingURL=emprestimo-dto.js.map