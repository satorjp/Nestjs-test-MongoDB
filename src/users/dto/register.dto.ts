import { IsString, IsNumber, IsOptional, IsBoolean, isString } from 'class-validator'

export class RegisterDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;

    @IsString()
    readonly firstname: string;

    @IsString()
    readonly lastname: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly phone: string;

    @IsString()
    readonly address: string;

    @IsString()
    @IsOptional()
    readonly userimage?: string;
    
}