interface iUser {
   id?: number,
   name: string,
   email: string,
   password?: string,
   token_rp?: string,
   expiration_rp?: Date,
   category?: number,
   category_str ?: string,
}

export default iUser;