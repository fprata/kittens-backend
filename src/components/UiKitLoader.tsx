'use client'

import { useEffect } from 'react'

export default function UIkitLoader() {
  useEffect(() => {
    // Dynamically create and append <script> tags for uikit
    const uikitScript = document.createElement('script')
    uikitScript.src = '/assets/js/uikit.min.js'
    uikitScript.async = true
    document.body.appendChild(uikitScript)
    return () => {
      document.body.removeChild(uikitScript)
    }
  }, [])

  return null
}
