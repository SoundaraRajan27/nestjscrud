import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(res: Response, body: any): Promise<Response<any, Record<string, any>>>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
