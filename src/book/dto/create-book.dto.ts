import { ApiProperty } from "@nestjs/swagger"
import { Genre } from "src/enitites/genre.entity"

export class CreateBookDto {
    @ApiProperty({example: "Book"})
    name: string

    @ApiProperty({example: 22})
    price: number

    @ApiProperty({example: [1, 2]})
    genres: number[]

    @ApiProperty({example: 1})
    user: number
}

