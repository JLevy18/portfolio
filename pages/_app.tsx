import '@styles/globals.css'
import '@styles/hero.css'
import '@styles/navbar.css'
import '@styles/about.css'
import '@styles/blog.css'
import '@styles/timeline.css'
import '@styles/projects.css'
import React from 'react'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
