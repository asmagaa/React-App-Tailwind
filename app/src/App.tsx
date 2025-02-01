import { useState } from "react";
import "./App.css";

function App() {
  const [tab, setTab] = useState("home");

  const blogPosts = [
    { title: "Jak skutecznie się uczyć?", description: "Poznaj metody efektywnej nauki i popraw swoje wyniki!", id: 1 },
    { title: "5 najlepszych aplikacji do nauki", description: "Sprawdź, jakie narzędzia pomogą Ci w codziennej nauce.", id: 2 },
    { title: "Jak organizować czas?", description: "Zarządzanie czasem to klucz do sukcesu – zobacz nasze porady.", id: 3 },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen">
      <header className="w-full max-w-2xl bg-gray-800 text-white flex justify-between items-center p-4 rounded-lg mt-5">
        <h1 className="text-xl font-bold">Portal Edukacyjny</h1>
        <nav className="flex gap-2">
          <button onClick={() => setTab("home")} className={`bg-gray-700 text-white px-4 py-2 ${tab === "home" ? "bg-gray-600" : ""}`}>
            Home
          </button>
          <button onClick={() => setTab("about")} className={`bg-gray-700 text-white px-4 py-2 ${tab === "about" ? "bg-gray-600" : ""}`}>
            O nas
          </button>
          <button onClick={() => setTab("contact")} className={`bg-gray-700 text-white px-4 py-2 ${tab === "contact" ? "bg-gray-600" : ""}`}>
            Kontakt
          </button>
          <button onClick={() => setTab("dashboard")} className={`bg-gray-700 text-white px-4 py-2 ${tab === "dashboard" ? "bg-gray-600" : ""}`}>
            Panel
          </button>
        </nav>
      </header>

      <main className="content">
        {tab === "home" && (
          <section className="section">
            <h2 className="text-2xl font-bold">Witamy w Portalu Edukacyjnym</h2>
            <p>Twoje miejsce do nauki i rozwoju!</p>
            <p>Sprawdź nasze kursy i dołącz do społeczności uczniów!</p>

            <h3 className="text-xl font-semibold mt-4">Najnowsze artykuły</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-bold">{post.title}</h4>
                  <p>{post.description}</p>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Przejdź</button>
                </div>
              ))}
            </div>
          </section>
        )}
        {tab === "about" && (
          <section className="section">
            <h2 className="text-2xl font-bold">O nas</h2>
            <p>Jesteśmy zespołem pasjonatów, którzy chcą pomóc uczniom w nauce.</p>
            <h3 className="text-xl font-semibold mt-4">Co oferujemy?</h3>
            <ul className="list-disc list-inside mt-2">
              <li>✅ Darmowe materiały edukacyjne</li>
              <li>✅ Dostęp do interaktywnych kursów</li>
              <li>✅ Wsparcie nauczycieli i mentorów</li>
              <li>✅ Forum dla uczniów</li>
            </ul>
          </section>
        )}
        {tab === "contact" && (
          <section className="section">
            <h2 className="text-2xl font-bold">Kontakt</h2>
            <p>Masz pytania? Skontaktuj się z nami:</p>
            <form className="flex flex-col gap-4 mt-4">
              <input type="text" placeholder="Twoje imię" className="p-2 border border-gray-300 rounded" />
              <input type="email" placeholder="Twój email" className="p-2 border border-gray-300 rounded" />
              <textarea placeholder="Twoja wiadomość" className="p-2 border border-gray-300 rounded"></textarea>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Wyślij</button>
            </form>
          </section>
        )}
        {tab === "dashboard" && (
          <section className="section">
            <h2 className="text-2xl font-bold">Panel użytkownika</h2>
            <p>Tu znajdziesz swoje kursy i materiały edukacyjne.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold">📘 Kurs HTML & CSS</h3>
                <p>Podstawy tworzenia stron internetowych</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold">📗 Kurs JavaScript</h3>
                <p>Programowanie w języku JS</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold">📙 Kurs React</h3>
                <p>Tworzenie dynamicznych aplikacji</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;