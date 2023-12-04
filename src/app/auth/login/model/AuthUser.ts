type TokenType = {
  token: string,
  ttl: string,
}

export class AuthUser {
  id: string;
  email: string;
  token: TokenType;

  constructor(id: string, email: string, token: TokenType) {
    this.id = id;
    this.email = email;
    this.token = token;
  }
}
