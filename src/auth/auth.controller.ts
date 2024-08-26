import { Body, Controller, NotImplementedException, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() input: {email : string, password : string}) {
    return this.authService.login(input);
  }

  @Post('test')
  test(@Body() input: {email : string, password : string}) {
    return this.authService.validateUser(input);
  }
}
