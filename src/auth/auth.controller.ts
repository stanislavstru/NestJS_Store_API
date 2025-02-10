import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleOAuthGuard } from './google/google-oauth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleOAuthGuard)
  async googleLogin() {
    // Initiates the Google authentication process
  }

  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  async googleCallback(@Req() req, @Res() res) {
    // Successful authentication
    // const user = req.user;

    const jwt = await this.authService.googleLogin(req);

    if (!jwt)
      return res.redirect(
        `${process.env.CLIENT_APP_DOMAIN}?error=login_failed`,
      ); // Redirect with an error message

    return res.redirect(
      `${process.env.CLIENT_APP_DOMAIN}/api/auth?token=${jwt.access_token}`,
    ); // Redirect with the user's email
  }
}
