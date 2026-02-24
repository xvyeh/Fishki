"use client";

import { useState } from 'react';

const categories = {
  "Podstawowe": [
    { german: "Hallo", polish: "Cześć" },
    { german: "Danke", polish: "Dziękuję" },
    { german: "Bitte", polish: "Proszę" },
    { german: "Ja", polish: "Tak" },
    { german: "Nein", polish: "Nie" },
    { german: "Entschuldigung", polish: "Przepraszam" },
    { german: "Tschüss", polish: "Pa" },
    { german: "Wie geht's?", polish: "Jak się masz?" },
    { german: "Guten Morgen", polish: "Dzień dobry" },
    { german: "Guten Abend", polish: "Dobry wieczór" }
  ],
  "Czasowniki": [
    { german: "sein", polish: "być" },
    { german: "haben", polish: "mieć" },
    { german: "gehen", polish: "iść" },
    { german: "kommen", polish: "przyjść" },
    { german: "essen", polish: "jeść" },
    { german: "trinken", polish: "pić" },
    { german: "sehen", polish: "widzieć" },
    { german: "sprechen", polish: "mówić" },
    { german: "lesen", polish: "czytać" },
    { german: "schlafen", polish: "spać" }
  ],
  "Liczby": [
    { german: "eins", polish: "jeden" },
    { german: "zwei", polish: "dwa" },
    { german: "drei", polish: "trzy" },
    { german: "vier", polish: "cztery" },
    { german: "fünf", polish: "pięć" },
    { german: "sechs", polish: "sześć" },
    { german: "sieben", polish: "siedem" },
    { german: "acht", polish: "osiem" },
    { german: "neun", polish: "dziewięć" },
    { german: "zehn", polish: "dziesięć" }
  ],
  "Kolory": [
    { german: "rot", polish: "czerwony" },
    { german: "blau", polish: "niebieski" },
    { german: "grün", polish: "zielony" },
    { german: "schwarz", polish: "czarny" },
    { german: "weiß", polish: "biały" },
    { german: "gelb", polish: "żółty" },
    { german: "braun", polish: "brązowy" },
    { german: "grau", polish: "szary" },
    { german: "rosa", polish: "różowy" },
    { german: "lila", polish: "fioletowy" }
  ],
  "Jedzenie": [
    { german: "Brot", polish: "chleb" },
    { german: "Wasser", polish: "woda" },
    { german: "Milch", polish: "mleko" },
    { german: "Apfel", polish: "jabłko" },
    { german: "Käse", polish: "ser" },
    { german: "Fleisch", polish: "mięso" },
    { german: "Fisch", polish: "ryba" },
    { german: "Ei", polish: "jajko" },
    { german: "Butter", polish: "masło" },
    { german: "Reis", polish: "ryż" }
  ],
  "Rodzina": [
    { german: "Mutter", polish: "matka" },
    { german: "Vater", polish: "ojciec" },
    { german: "Bruder", polish: "brat" },
    { german: "Schwester", polish: "siostra" },
    { german: "Kind", polish: "dziecko" },
    { german: "Oma", polish: "babcia" },
    { german: "Opa", polish: "dziadek" },
    { german: "Tante", polish: "ciocia" },
    { german: "Onkel", polish: "wujek" },
    { german: "Cousin", polish: "kuzyn" }
  ],
  "Szkoła": [
    { german: "Schule", polish: "szkoła" },
    { german: "Lehrer", polish: "nauczyciel" },
    { german: "Schüler", polish: "uczeń" },
    { german: "Buch", polish: "książka" },
    { german: "Stift", polish: "długopis" },
    { german: "Heft", polish: "zeszyt" },
    { german: "Klasse", polish: "klasa" },
    { german: "Tafel", polish: "tablica" },
    { german: "Pause", polish: "przerwa" },
    { german: "Prüfung", polish: "egzamin" }
  ],
  "Podróże": [
    { german: "Auto", polish: "samochód" },
    { german: "Zug", polish: "pociąg" },
    { german: "Flughafen", polish: "lotnisko" },
    { german: "Hotel", polish: "hotel" },
    { german: "Ticket", polish: "bilet" },
    { german: "Reise", polish: "podróż" },
    { german: "Pass", polish: "paszport" },
    { german: "Stadt", polish: "miasto" },
    { german: "Fahrrad", polish: "rower" },
    { german: "Boot", polish: "łódź" }
  ]
};

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quizCards, setQuizCards] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleCategorySelect = (category: string) => {
    const categoryCards = categories[category as keyof typeof categories];
    const shuffled = [...categoryCards].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    setQuizCards(selected);
    setSelectedCategory(category);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizFinished(false);
  };

  const getOptions = (correctPolish: string, allCards: any[]) => {
    const incorrect = allCards.filter(card => card.polish !== correctPolish).map(card => card.polish);
    const options = [correctPolish, ...incorrect.slice(0, 3)].sort(() => Math.random() - 0.5);
    return options;
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === quizCards[currentIndex].polish) {
      setScore(prev => Math.min(prev + 1, 10));
    }
  };

  const nextQuestion = () => {
    if (currentIndex < quizCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-white">🐟Fishki🐟</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className="bg-white rounded-2xl shadow-lg p-6 text-xl font-semibold text-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Quiz zakończony!</h2>
        <p className="text-xl mb-6">Twój wynik: {score} / 10</p>
        <button onClick={() => setSelectedCategory(null)} className="bg-black text-white px-6 py-2 rounded-xl">
          Powrót do kategorii
        </button>
      </div>
    );
  }

  const currentCard = quizCards[currentIndex];
  const options = getOptions(currentCard.polish, Object.values(categories).flat());

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedCategory}</h2>
      <p className="text-sm mb-4">Pytanie {currentIndex + 1} / 10</p>
      <div className="bg-white w-full max-w-xl h-40 rounded-2xl shadow-2xl flex items-center justify-center text-3xl font-bold mb-6">
        {currentCard.german}
      </div>
      <div className="grid grid-cols-1 gap-4 w-full max-w-xl">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            disabled={showResult}
            className={`p-4 rounded-xl text-lg font-semibold transition ${
              showResult
                ? option === currentCard.polish
                  ? 'bg-green-500 text-white'
                  : selectedAnswer === option
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-700'
                : 'bg-white shadow-lg hover:bg-gray-100'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && (
        <button onClick={nextQuestion} className="mt-6 bg-black text-white px-6 py-2 rounded-xl">
          {currentIndex < quizCards.length - 1 ? 'Następne pytanie' : 'Zakończ quiz'}
        </button>
      )}
      <button onClick={() => setSelectedCategory(null)} className="mt-8 bg-black text-white px-6 py-2 rounded-xl">
        ← Powrót
      </button>
    </div>
  );
}