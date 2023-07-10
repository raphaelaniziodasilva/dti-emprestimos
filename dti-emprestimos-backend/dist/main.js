"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cors());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Dti Empréstimo')
        .setDescription('Empréstimo')
        .setVersion('1.0')
        .addTag('')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3030);
    console.log('http://localhost:3030/api');
}
bootstrap();
//# sourceMappingURL=main.js.map