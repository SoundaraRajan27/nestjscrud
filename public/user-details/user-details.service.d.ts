import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserDetailsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(payload: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        name: string;
        birthYear: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDetailDto: UpdateUserDetailDto): string;
    remove(id: number): string;
}
