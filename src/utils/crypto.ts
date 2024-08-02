import crypto from 'crypto'

const aesEncryptionKey = 'ASAC!_KYOBO_DTS_CSPM_ENCRYPT_KEY'

const algorithm = 'aes-256-cbc'
const key = Buffer.from(aesEncryptionKey, 'utf-8') // 32 bytes key
console.log(key.subarray)
const iv = Buffer.from(aesEncryptionKey.substring(0, 16), 'utf-8') // 16 bytes IV

// 암호화 함수
export function encrypt(text: string): string {
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(text, 'utf8', 'base64')
  encrypted += cipher.final('base64')
  return encrypted
}

// 복호화 함수
export function decrypt(text: string): string {
  const encryptedText: any = Buffer.from(text, 'base64')
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  let decrypted = decipher.update(encryptedText, 'base64', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}
