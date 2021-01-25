interface iUserLogin {
   email: string,
   password: string,
   rememberMe: boolean;
}

interface iAuthenticationContext {
   signed: boolean,
   user: object | null,
   signIn(userLogin: iUserLogin): Promise<void>,
   signOut(): void,
   loading: boolean,
   message: string
}


export type { iAuthenticationContext, iUserLogin }