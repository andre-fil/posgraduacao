export const WHATSAPP_PHONE = "558008785129";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Tenho interesse na pós-graduação (FEMAF Digital).";

export function whatsappCourseMessage(courseTitle: string) {
  return `Olá! Tenho interesse na pós-graduação em ${courseTitle} (FEMAF Digital).`;
}

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_PHONE}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
