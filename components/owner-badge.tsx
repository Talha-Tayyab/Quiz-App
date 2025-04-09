import { User } from "lucide-react"
import Link from "next/link"

export default function OwnerBadge({ className }: { className?: string }) {
  return (
    <Link href="/about">
      <div
        className={`group flex items-center gap-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 cursor-pointer ${className}`}
      >
        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
          <User className="h-4 w-4 text-primary" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Created by</span>
          <span className="text-sm font-bold text-primary group-hover:underline">Talha Tayyab</span>
        </div>
      </div>
    </Link>
  )
}

