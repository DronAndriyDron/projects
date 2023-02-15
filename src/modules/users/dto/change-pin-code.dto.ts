import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ChangePinCodeDto {
  @IsString()
  @ApiProperty({
    example: 'test@test.com',
    required: true,
  })
  email: string;

  @IsString()
  @ApiProperty({
    example: '1234',
    required: true,
  })
  newPinCode: string;
}
