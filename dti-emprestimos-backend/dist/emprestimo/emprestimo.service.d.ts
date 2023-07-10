import { BadRequestException } from '@nestjs/common';
import { EmprestimoDto } from './dto/emprestimo-dto';
export declare class EmprestimoService {
    createEmprestimo(data: EmprestimoDto): Promise<BadRequestException | {
        cpfValido: any;
        emprestimo: string;
        cnpjValido?: undefined;
    } | {
        cnpjValido: any;
        emprestimo: string;
        cpfValido?: undefined;
    }>;
    SolicitaEmprestimo(valorEmprestimo: any, valorDivida: any): Promise<"Empréstimo negado: valor maior que R$50.000,00." | "Empréstimo negado: valor é maior que a metade da dívida." | "Empréstimo aprovado.">;
}
