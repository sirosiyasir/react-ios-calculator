import React from "react"

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  const copyrightYear = "Copyright " + year + " by Yasir Çeşmeci"
  return (
    <div className="footer footer-center my-1">
      <p>{copyrightYear}</p>
    </div>
  )
}
export default Footer
