import { createUser, findUserByOpenId } from './auth.repository.js';
import type { LoginDTO, RegisterDTO } from './auth.dto.js';

export async function register(data: RegisterDTO) {
  if (data.openid) {
    const exists = await findUserByOpenId(data.openid);
    if (exists) {
      return exists;
    }
  }

  return createUser(data);
}

export async function login(data: LoginDTO) {
  return findUserByOpenId(data.openid);
}
