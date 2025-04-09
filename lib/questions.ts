export interface Question {
  question: string
  answers: string[]
  correctAnswer: number
  category: string
  difficulty: "easy" | "medium" | "hard"
}

export const questions: Question[] = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    category: "Geography",
    difficulty: "easy",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "easy",
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2,
    category: "Art",
    difficulty: "easy",
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3,
    category: "Geography",
    difficulty: "easy",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "easy",
  },
  {
    question: "In which year did World War II end?",
    answers: ["1943", "1945", "1947", "1950"],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium",
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "medium",
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Marie Curie"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "medium",
  },
  {
    question: "What is the currency of Japan?",
    answers: ["Yuan", "Won", "Yen", "Ringgit"],
    correctAnswer: 2,
    category: "Geography",
    difficulty: "medium",
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: ["Java", "Python", "Cobra", "Crocodile"],
    correctAnswer: 3,
    category: "Technology",
    difficulty: "hard",
  },
]

