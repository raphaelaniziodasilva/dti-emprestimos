import { Body, Controller, Post } from '@nestjs/common';
import { EmprestimoService } from './emprestimo.service';
import { EmprestimoDto } from './dto/emprestimo-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('emprestimo')
export class EmprestimoController {
  constructor(private readonly emprestimoService: EmprestimoService) {}

  @ApiTags('solicita empréstimo')
  @Post()
  createEmprestimo(@Body() data: EmprestimoDto) {
    return this.emprestimoService.createEmprestimo(data);
  }
}
