import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({example: "Munisa"})
    userName: string

    @ApiProperty({example: "1234"})
    password: string
}
