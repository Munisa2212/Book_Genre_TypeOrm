import { ApiProperty } from "@nestjs/swagger";

export class CreateGenreDto {
    @ApiProperty({example: "Drama"})
    name: string
}
