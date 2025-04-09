import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 mt-auto border-t bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-bold text-primary text-lg">TT</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground">Quiz Master</span>
            <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center gap-1 text-sm">
            <span>Designed & Developed by</span>
            <span className="font-bold text-primary">Talha Tayyab</span>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <Link href="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/scores" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

