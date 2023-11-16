import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    userCreate(data: any): Promise<unknown>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: any): string;
    remove(id: number): string;
}
