import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class EmprestimoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Tipo da pessoa (PF/PJ).',
    required: true,
    example: 'PF',
  })
  tipoPessoa!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Documento (CPF/CNPJ).',
    required: true,
    example: '947.483.020-70',
  })
  documento!: string;

  @IsString()
  @Length(3, 100)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome da Pessoa/Empresa.',
    required: true,
    minLength: 3,
    maxLength: 100,
    example: 'Halland',
  })
  nome!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Número Documento.',
    required: true,
    example: '3.961.471',
  })
  numeroDocumento!: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Valor da dívida ativa atual do cliente.',
    required: true,
    example: 50000,
  })
  valorDivida!: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Valor do empréstimo solicitado',
    required: true,
    example: 100,
  })
  valorEemprestimo!: number;
}
