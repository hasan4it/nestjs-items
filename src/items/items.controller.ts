import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import {createItemDto} from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string{
        return 'All items are here';
    }

    @Get(':id')
    findOne(@Param('id') id): string{
        return 'One item returning of'+ id;
    }

    @Post()
    createItem(@Body() createItemDto: createItemDto): string{
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description} `;
    }

}
