import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Globe, Github, Linkedin, Twitter } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <Card className="w-full max-w-md border-none shadow-lg bg-gradient-to-b from-card to-card/80">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-primary/20 to-primary/30 rounded-t-lg" />

        <CardHeader className="text-center relative z-10 pt-16">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary/70 p-1">
              <div className="h-full w-full rounded-full bg-card flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">TT</span>
              </div>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold mt-8">Talha Tayyab</CardTitle>
          <p className="text-muted-foreground">Creator & Owner</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="text-center italic">
              "I created Quiz Master to make learning fun and interactive. Challenge yourself, expand your knowledge,
              and compete with friends!"
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="h-6 w-1 bg-primary rounded-full"></span>
              About Me
            </h3>
            <p className="text-muted-foreground">
              I am a passionate developer and quiz enthusiast. Quiz Master is my creation designed to help people test
              their knowledge in a fun and engaging way. I believe that learning should be enjoyable and interactive.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="h-6 w-1 bg-primary rounded-full"></span>
              The App
            </h3>
            <p className="text-muted-foreground">
              Quiz Master features multiple-choice questions with timers, score tracking, and performance metrics.
              Challenge yourself with questions across various categories and difficulty levels!
            </p>
          </div>

          <div className="flex justify-center space-x-4 pt-2">
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
              <Twitter className="h-5 w-5 text-primary" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
              <Github className="h-5 w-5 text-primary" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
              <Linkedin className="h-5 w-5 text-primary" />
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <div className="w-full p-4 bg-muted/50 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">talha@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm">talhatayyab.com</span>
            </div>
          </div>

          <Button className="w-full" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Quiz
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

