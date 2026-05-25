export const WHATSAPP_PHONE = "558008785129";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Tenho interesse em uma pós-graduação EAD da FEMAF e gostaria de mais informações.";

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
