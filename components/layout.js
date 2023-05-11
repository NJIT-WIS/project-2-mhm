import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <div>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <main>{children}</main>
    </div>
  )
}
