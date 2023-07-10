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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoController = void 0;
const common_1 = require("@nestjs/common");
const emprestimo_service_1 = require("./emprestimo.service");
const emprestimo_dto_1 = require("./dto/emprestimo-dto");
const swagger_1 = require("@nestjs/swagger");
let EmprestimoController = class EmprestimoController {
    constructor(emprestimoService) {
        this.emprestimoService = emprestimoService;
    }
    createEmprestimo(data) {
        return this.emprestimoService.createEmprestimo(data);
    }
};
__decorate([
    (0, swagger_1.ApiTags)('solicita empréstimo'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [emprestimo_dto_1.EmprestimoDto]),
    __metadata("design:returntype", void 0)
], EmprestimoController.prototype, "createEmprestimo", null);
EmprestimoController = __decorate([
    (0, common_1.Controller)('emprestimo'),
    __metadata("design:paramtypes", [emprestimo_service_1.EmprestimoService])
], EmprestimoController);
exports.EmprestimoController = EmprestimoController;
//# sourceMappingURL=emprestimo.controller.js.map