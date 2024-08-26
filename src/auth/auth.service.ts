import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

type InputUser = {
    email: string;
    password: string;
}

type LoginUser = {
    id: number;
    email: string; 
    name: string; 
}

type AuthUser = {
    id: number;
    email: string;
    accessToken: string;

}
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}
    
    async login(input: InputUser): Promise<AuthUser> {
        const user = await this.validateUser(input);
        if (!user) {
            throw new UnauthorizedException('Wrong credentials');
        }
        return this.generateToken(user);
        
    }

  async validateUser({ email, password }: InputUser): Promise<LoginUser | null> {
    const foundUser = await this.prisma.user.findUnique({ where: { email } });
    if (!foundUser) {
      return null;
    }
    const isPasswordValid = await bcrypt.compare(password,foundUser.password)
    if(!isPasswordValid) {
        throw new UnauthorizedException('Wrong password');
    }
    return {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
    };
  }

  async generateToken(user: LoginUser): Promise<AuthUser> {
    const payload = {sub: user.id, email: user.email};
    const token = await this.jwtService.signAsync(payload);
    return {
        id: user.id,
        email: user.email,  
        accessToken: token
  }
}


}
