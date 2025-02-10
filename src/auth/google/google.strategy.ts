import {
  // GoogleCallbackParameters,
  Profile,
  Strategy,
  VerifyCallback,
} from 'passport-google-oauth20';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.APP_DOMAIN + '/api/v1/auth/google/callback',
      scope: ['profile', 'email'],
      passReqToCallback: false,
    });
  }

  async validate(
    // req: Request,
    access_token: string,
    refresh_token: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<any> {
    // console.log('accessToken', accessToken);
    // console.log('refresh_token', refresh_token);
    // console.log('refreshToken', refreshToken);
    // console.log('profile', profile);
    // console.log('done', done);

    if (!profile) {
      throw new UnauthorizedException(
        'Google profile not found. Please try again',
      );
    }

    const user: googleOauthObjectType = {
      email: profile.emails[0].value,
      first_name: profile.name.givenName,
      last_name: profile.name.familyName,
      picture: profile.photos[0].value,
      session_id: profile.id,
      access_token,
      refresh_token,
    };

    console.log('Google user', user);

    done(null, user);
  }
}
