import { EmprestimoService } from './emprestimo.service';
import { EmprestimoDto } from './dto/emprestimo-dto';
export declare class EmprestimoController {
    private readonly emprestimoService;
    constructor(emprestimoService: EmprestimoService);
    createEmprestimo(data: EmprestimoDto): Promise<import("@nestjs/common").BadRequestException | {
        cpfValido: any;
        emprestimo: string;
        cnpjValido?: undefined;
    } | {
        cnpjValido: any;
        emprestimo: string;
        cpfValido?: undefined;
    }>;
}
