import { IsNotEmpty, IsMongoId, IsNumber, Min } from 'class-validator'
export class CreateOrderDto {
    @IsNotEmpty()
    @IsMongoId()
    readonly productId: string;

    @IsNumber()
    @Min(1)
    readonly quantity?: number;
}
