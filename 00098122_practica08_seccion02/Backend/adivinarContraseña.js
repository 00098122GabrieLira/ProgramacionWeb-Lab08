// verifyHash.js
import bcrypt from "bcrypt";

const jerryHash =
  "$2b$10$XOHI0.vg73ve9Oy73lqU5.W//tVQuqMIAKJn3n25ZA2DUF.YGm6vq";

const contras = [
  // Contraseñas comunes
  "123456789",
  "123123",
  "password",
  "qwerty",
  "admin",
  "admin123",
  "admin@123",
  "contraseña",
  "mipassword",

  // Relacionadas a Jerry (posible usuario)
  "jerry",
  "jerry1",
  "jerry123",
  "jerry@123",
  "Jerry123",
  "1234",
];

const verificar = async () => {
  for (const intento of contras) {
    const match = await bcrypt.compare(intento, jerryHash);
    if (match) {
      console.log(`✅ ¡Contraseña encontrada! Es: "${intento}"`);
      return;
    } else {
      console.log(`❌ No coincide: "${intento}"`);
    }
  }

  console.log("🚫 Ninguna coincidió.");
};

verificar();
