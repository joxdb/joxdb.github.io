import { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState("")

  return (
    <footer className="border-border/20 py-6 px-4">
      <div className="container mx-auto mt-4 pt-4 border-t border-border/50 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} JoxDB. Developed by{" "}
        <a href="https://sakshamjoshi.vercel.app/" className="font-bold" target="_blank">
          Saksham Joshi
        </a>
      </div>
    </footer>
  )
}

export default Footer
