import { Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportGuard } from "./guards/passport.guard";

@Controller('auth-v2')
export class PassportAuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')  
    @UseGuards(PassportGuard)

    login(){
        return 'success login';
    }

}   