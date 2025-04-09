import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Quiz Master
          </CardTitle>
          <CardDescription className="text-lg">
            Test your knowledge with our interactive quiz!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
            <h3 className="font-semibold text-lg mb-3">Instructions:</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Each quiz contains 10 multiple-choice questions</li>
              <li>You have 15 seconds to answer each question</li>
              <li>Correct answers earn 10 points</li>
              <li>Answering quickly earns bonus points</li>
              <li>Your high scores will be saved locally</li>
            </ul>
          </div>

          <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-border/50">
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <span className="font-medium">High Score:</span>
            </div>
            <span className="font-bold text-xl text-primary" id="high-score">
              0
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Link href="/quiz" className="w-full">
            <Button className="w-full h-12 text-lg" size="lg">
              Start Quiz
            </Button>
          </Link>
          <Link href="/scores" className="w-full">
            <Button variant="outline" className="w-full h-12 text-lg">
              View High Scores
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-sm">
          <span className="font-medium">Created by</span>
          <span className="font-bold text-primary">Talha Tayyab</span>
        </div>
      </div>
    </main>
  )
}

