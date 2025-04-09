"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Clock } from "lucide-react"
import { questions } from "@/lib/questions"
import { cn } from "@/lib/utils"
import OwnerBadge from "@/components/owner-badge"

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [isAnswered, setIsAnswered] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const currentQuestion = questions[currentQuestionIndex]

  // Initialize timer when component mounts
  useEffect(() => {
    setStartTime(Date.now())

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          if (!isAnswered) {
            handleAnswer(null)
          }
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestionIndex, isAnswered])

  const handleAnswer = (answerIndex: number | null) => {
    if (isAnswered) return

    setIsAnswered(true)
    setSelectedAnswer(answerIndex)
    setAnsweredQuestions((prev) => prev + 1)

    // Calculate time bonus (faster answers get more points)
    const timeBonus = Math.floor((timeLeft / 15) * 5)

    if (answerIndex === currentQuestion.correctAnswer) {
      const questionScore = 10 + timeBonus
      setScore((prevScore) => prevScore + questionScore)
      setCorrectAnswers((prev) => prev + 1)
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
        setSelectedAnswer(null)
        setIsAnswered(false)
        setTimeLeft(15)
      } else {
        // Quiz completed
        setQuizCompleted(true)
        const quizTime = Math.floor((Date.now() - startTime) / 1000)

        // Save results to localStorage
        const results = {
          score,
          correctAnswers: correctAnswers + (answerIndex === currentQuestion.correctAnswer ? 1 : 0),
          totalQuestions: questions.length,
          timeSpent: quizTime,
          date: new Date().toISOString(),
        }

        // Get existing scores or initialize empty array
        const existingScores = JSON.parse(localStorage.getItem("quizScores") || "[]")
        existingScores.push(results)
        existingScores.sort((a: any, b: any) => b.score - a.score)
        localStorage.setItem("quizScores", JSON.stringify(existingScores))

        // Update high score
        const highScore = Math.max(...existingScores.map((s: any) => s.score), 0)
        localStorage.setItem("highScore", highScore.toString())

        // Navigate to results page
        router.push(
          `/results?score=${results.score}&correct=${results.correctAnswers}&total=${results.totalQuestions}&time=${results.timeSpent}`,
        )
      }
    }, 1500)
  }

  return (
    <main className="container flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="relative">
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="text-sm">
              Question {currentQuestionIndex + 1}/{questions.length}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Score: {score}
            </Badge>
          </div>
          <Progress value={(currentQuestionIndex / questions.length) * 100} className="h-2" />
          <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className={cn(timeLeft < 5 && "text-red-500 font-bold")}>{timeLeft} seconds left</span>
          </div>
          <CardTitle className="text-xl mt-4">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQuestion.answers.map((answer, index) => (
            <Button
              key={index}
              variant={
                isAnswered
                  ? index === currentQuestion.correctAnswer
                    ? "success"
                    : index === selectedAnswer && index !== currentQuestion.correctAnswer
                      ? "destructive"
                      : "outline"
                  : "outline"
              }
              className={cn("w-full justify-start text-left h-auto py-4 px-4", isAnswered && "cursor-default")}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
            >
              <div className="flex items-center gap-2">
                {isAnswered && index === currentQuestion.correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                )}
                {isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                )}
                <span>{answer}</span>
              </div>
            </Button>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" onClick={() => router.push("/")}>
            Quit Quiz
          </Button>
          <Button variant="outline" onClick={() => handleAnswer(null)} disabled={isAnswered}>
            Skip Question
          </Button>
        </CardFooter>
      </Card>
      <div className="fixed bottom-4 right-4 z-10">
        <OwnerBadge />
      </div>
    </main>
  )
}

