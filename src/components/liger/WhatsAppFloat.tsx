'use client';

import { motion } from 'framer-motion';
import { CONTACT } from '@/lib/liger-data';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Liger Tours Namibia on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[var(--color-liger-whatsapp)] shadow-lg transition-shadow hover:bg-[var(--color-liger-whatsapp-hover)] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 sm:flex"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.742 3.054 9.378L1.054 31.29l6.118-1.962C9.724 30.876 12.764 32 16.004 32 24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.306 22.606c-.39 1.1-1.932 2.014-3.168 2.28-.844.18-1.946.324-5.66-1.216-4.748-1.97-7.804-6.78-8.038-7.094-.226-.314-1.886-2.512-1.886-4.79s1.194-3.398 1.618-3.864c.39-.428.852-.536 1.136-.536.282 0 .566.002.812.016.262.012.614-.1.96.732.356.854 1.21 2.95 1.316 3.164.108.214.18.466.036.748-.136.282-.204.458-.408.706-.214.248-.448.554-.638.744-.214.214-.436.446-.188.876.248.428 1.104 1.82 2.37 2.948 1.63 1.452 3.004 1.902 3.432 2.116.428.214.676.18.924-.108.248-.288 1.064-1.24 1.348-1.666.282-.428.566-.356.952-.214.39.142 2.478 1.168 2.902 1.382.428.214.712.322.818.498.108.178.108 1.022-.282 2.12z" />
      </svg>
    </motion.a>
  );
}
