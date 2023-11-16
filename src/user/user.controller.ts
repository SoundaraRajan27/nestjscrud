import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express'
import response from 'src/helper';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('/Create')
  async create(@Res() res: Response, @Body() body: any) {
    try {
      const finalData = await this.userService.userCreate(body)
      return res.status(200).json(
        await response(
          "Success",
          finalData,
          200,
          true,
          "",
        )
      )
    } catch (error) {
      console.log(error);
      return res.status(400).json(
        await response(
          "Failed",
          null,
          400,
          false,
          error
        )
      )
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
