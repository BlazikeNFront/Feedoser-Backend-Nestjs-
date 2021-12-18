import * as crypto from 'crypto';
import { SHA512, HEX_ENCODING } from 'src/constants/names';

export default function hashPassword(password: string) {
  const hmac = crypto.createHmac(SHA512, process.env.SECRET_HASH_KEY);
  hmac.update(password);
  return hmac.digest(HEX_ENCODING);
}
