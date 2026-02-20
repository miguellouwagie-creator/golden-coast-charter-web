// Centralized contact data
export const CONTACT = {
    phone: '34676262628',
    // Obfuscated email: split to prevent bots from reading it directly from HTML
    emailUser: 'Goldencoastcharterdenia',
    emailDomain: 'gmail.com',
    getEmail: () => `${CONTACT.emailUser}@${CONTACT.emailDomain}`,
    getWhatsAppLink: (message?: string) =>
        message
            ? `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`
            : `https://wa.me/${CONTACT.phone}`,
};
