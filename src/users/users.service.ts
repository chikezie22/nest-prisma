import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    return await this.prismaService.user.create({ data });
  }

  getUsers() {}

  getUserById() {}
}
