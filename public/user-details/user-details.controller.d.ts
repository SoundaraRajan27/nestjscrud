import { UserDetailsService } from './user-details.service';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
export declare class UserDetailsController {
    private readonly userDetailsService;
    constructor(userDetailsService: UserDetailsService);
    create(createUserDetailDto: CreateUserDetailDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        name: string;
        birthYear: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDetailDto: UpdateUserDetailDto): string;
    remove(id: string): string;
}
