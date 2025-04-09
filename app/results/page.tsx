"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Share2, Trophy, RotateCcw, Clock, CheckCircle, Home } from "lucide-react"
import OwnerBadge from "@/components/owner-badge"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [highScore, setHighScore] = useState(0)

  const score = Number.parseInt(searchParams.get("score") || "0")
  const correctAnswers = Number.parseInt(searchParams.get("correct") || "0")
  const totalQuestions = Number.parseInt(searchParams.get("total") || "10")
  const timeSpent = Number.parseInt(searchParams.get("time") || "0")

  const accuracy = Math.round((correctAnswers / totalQuestions) * 100)
  const isNewHighScore = score > highScore

  useEffect(() => {
    // Get high score from localStorage
    const storedHighScore = localStorage.getItem("highScore")
    if (storedHighScore) {
      setHighScore(Number.parseInt(storedHighScore))
    }

    // Update high score if current score is higher
    if (score > Number.parseInt(storedHighScore || "0")) {
      localStorage.setItem("highScore", score.toString())
      setHighScore(score)
    }
  }, [score])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Quiz Results",
        text: `I scored ${score} points with ${accuracy}% accuracy in the Quiz Master app!`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(`I scored ${score} points with ${accuracy}% accuracy in the Quiz Master app!`)
      alert("Results copied to clipboard!")
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <main className="container flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Quiz Results</CardTitle>
          {isNewHighScore && (
            <div className="mt-2 flex items-center justify-center gap-2 text-yellow-500">
              <Trophy className="h-5 w-5" />
              <span className="font-bold">New High Score!</span>
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">{score}</span>
            <span className="text-muted-foreground">points</span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Accuracy</span>
                <span className="text-sm font-medium">{accuracy}%</span>
              </div>
              <Progress value={accuracy} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Correct</span>
                </div>
                <span className="text-xl font-bold">
                  {correctAnswers}/{totalQuestions}
                </span>
              </div>

              <div className="bg-muted p-4 rounded-lg flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Time</span>
                </div>
                <span className="text-xl font-bold">{formatTime(timeSpent)}</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3 w-full">
            <Button onClick={() => router.push("/quiz")} className="w-full">
              <RotateCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button variant="outline" onClick={handleShare} className="w-full">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
          <Button variant="ghost" onClick={() => router.push("/")} className="w-full">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </CardFooter>
      </Card>
      <div className="fixed bottom-4 right-4 z-10">
        <OwnerBadge />
      </div>
    </main>
  )
}

