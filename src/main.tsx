import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router.tsx'
import { Toaster } from 'react-hot-toast'
import { AudioProvider } from './hooks/UseAudio.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AudioProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AudioProvider>
  </StrictMode>,
)
