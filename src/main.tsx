import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router.tsx'
import { Toaster } from 'react-hot-toast'
import { AudioProvider } from './hooks/UseAudio.tsx'
import 'sweetalert2/dist/sweetalert2.min.css'

// ========================================================
// 🛑 ডার্ক রিডার (Dark Reader) ব্লক করার জাদুকরী কোড
// ========================================================
const htmlElement = document.documentElement;

const nukeDarkReader = () => {
  // ১. ডার্ক রিডারের অ্যাট্রিবিউটগুলো মুছে ফেলা
  if (
    htmlElement.hasAttribute('data-darkreader-mode') || 
    htmlElement.hasAttribute('data-darkreader-scheme') ||
    htmlElement.hasAttribute('data-darkreader-proxy-injected')
  ) {
    htmlElement.removeAttribute('data-darkreader-mode');
    htmlElement.removeAttribute('data-darkreader-scheme');
    htmlElement.removeAttribute('data-darkreader-proxy-injected');
  }

  // ২. ডার্ক রিডারের কাস্টম স্টাইলগুলো ডিলিট করা
  const darkReaderStyles = document.querySelectorAll('style.darkreader, .darkreader');
  if (darkReaderStyles.length > 0) {
    darkReaderStyles.forEach(style => style.remove());
  }
};

// অ্যাপ চালুর শুরুতেই একবার রান হবে
nukeDarkReader();

// MutationObserver দিয়ে অনবরত নজরদারি চালানো
const observer = new MutationObserver(() => {
  nukeDarkReader();
});

observer.observe(htmlElement, { attributes: true });
observer.observe(document.head, { childList: true });
// ========================================================

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AudioProvider>
  </StrictMode>,
)
