import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }
  async userCreate(data: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.prisma.user.create({
          data: data
        })
        resolve(result)
      } catch (error) {
        console.log(error);
        reject(error)
      }
    })
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
