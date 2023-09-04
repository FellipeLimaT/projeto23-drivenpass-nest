import { Module } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CredentialsController } from './credentials.controller';
import { CredentialsRepository } from './credentials.repository';

@Module({
    controllers: [CredentialsController],
    providers: [CredentialsService, CredentialsRepository],
    exports: [CredentialsService],
})
export class CredentialsModule { }