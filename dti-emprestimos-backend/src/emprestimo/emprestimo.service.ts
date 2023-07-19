import { BadRequestException, Injectable } from '@nestjs/common';
import { EmprestimoDto } from './dto/emprestimo-dto';
import { validarCNPJ } from 'src/utils/validar-cnpj';
import { validarCPF } from 'src/utils/validar-cpf';

@Injectable()
export class EmprestimoService {
  async createEmprestimo(data: EmprestimoDto) {
    try {
      const { tipoPessoa, documento, valorDivida, valorEemprestimo } = data;

      if (tipoPessoa === 'PF') {
        const cpfValido = validarCPF(documento);
        if (!cpfValido) {
          return new BadRequestException('O CPF está inválido.');
        }
        const emprestimo = await this.SolicitaEmprestimo(
          valorEemprestimo,
          valorDivida,
        );
        return { cpfValido, emprestimo };
      } else if (tipoPessoa === 'PJ') {
        const cnpjValido = validarCNPJ(documento);
        if (!cnpjValido) {
          return new BadRequestException('O CNPJ está inválido.');
        }
        const emprestimo = await this.SolicitaEmprestimo(
          valorEemprestimo,
          valorDivida,
        );
        return { cnpjValido, emprestimo };
      } else {
        return new BadRequestException('Digite PF ou PJ')
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async SolicitaEmprestimo(valorEmprestimo, valorDivida) {
    if (valorEmprestimo >= 50000) {
      return 'Empréstimo negado: valor maior que R$50.000,00.';
    } else if (valorEmprestimo > valorDivida / 2) {
      return 'Empréstimo negado: valor é maior que a metade da dívida.';
    } else {
      return 'Empréstimo aprovado.';
    }
  }
}
