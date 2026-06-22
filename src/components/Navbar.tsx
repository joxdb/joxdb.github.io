import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

const navLinks = [
  ["Features", "#features"],
  ["Developer", "#developer"],
  ["Docs", "https://joxdb.gitbook.io"],
  ["GitHub", "https://github.com/saksham-joshi/JoxDB"],
  ["FAQ", "#faq"],
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "light") {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      setIsDark(false)
    }
  }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <img className="w-16  h-16 object-contain" src="/logo/joxdb-square-logo-bg-removed.png" />
        <a href="#" className="text-xl font-bold glow-text">
          JoxDB <span className="secondary-color-text">v1.0</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l[0]}
              href={l[1]}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l[0]}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#download" className="glow-button text-sm">
            Download
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 text-muted-foreground">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 p-4 rounded-xl">
          {navLinks.map((l) => (
            <a
              key={l[0]}
              href={l[1]}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {l[0]}
            </a>
          ))}
          <a href="#download" className="glow-button block text-center mt-3 text-sm">
            Download
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
