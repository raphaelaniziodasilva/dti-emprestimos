import { Module } from '@nestjs/common';
import { EmprestimoModule } from './emprestimo/emprestimo.module';

@Module({
  imports: [EmprestimoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
