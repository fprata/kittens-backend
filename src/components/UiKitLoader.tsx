'use client'

import { useEffect } from 'react'

export default function UIkitLoader() {
  useEffect(() => {
    // Dynamically create and append <script> tags for uikit
    const uikitScript = document.createElement('script')
    uikitScript.src = '/assets/js/uikit.min.js'
    uikitScript.async = true

    const iconsScript = document.createElement('script')
    iconsScript.src = '/assets/js/uikit-icons.min.js'
    iconsScript.async = true

    document.body.appendChild(uikitScript)
    document.body.appendChild(iconsScript)

    return () => {
      document.body.removeChild(uikitScript)
      document.body.removeChild(iconsScript)
    }
  }, [])

  return null
}
