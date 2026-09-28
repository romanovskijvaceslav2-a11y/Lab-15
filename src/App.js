import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Head() {
  return (
    <header className="head">
      <nav>
        <Link to="/news">Новости</Link>
        <Link to="/about">О проекте</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
}

function Footer() {
  const date = new Date();
  const creationYear = 2026;
  return (
    <footer className="footer">
      <p>© {creationYear} - {date.getFullYear()} | Автор: Лыгин Богдан Владимрович</p>
      <p>Дата создания: {creationYear}</p>
    </footer>
  );
}

function Section() {
  return (
    <section className="section">
      <img 
        src="https://via.placeholder.com/200x150?text=Картинка" 
        alt="Пример изображения"
      />
    </section>
  );
}

function Aside() {
  return (
    <aside className="aside">
      <p>Лыгин</p>
      <p>Богдан</p>
      <p>Владмирович</p>
    </aside>
  );
}

function Article() {
  return (
    <article className="article">
      <Routes>
        <Route path="/news" element={
          <>
            <h1>Последние новости</h1>
            <p>Сегодня вышла новая версия React.</p>
          </>
        } />
        <Route path="/about" element={
          <>
            <h1>Южный федеральный университет</h1>
            <p>ЮФУ — крупный вуз юга России.</p>
          </>
        } />
        <Route path="/contacts" element={
          <>
            <h1>Контакты</h1>
            <p>Телефон: +7 (950) 856-92-08</p>
          </>
        } />
        <Route path="*" element={
          <>
            <h1>404</h1>
            <p>Страница не найдена</p>
          </>
        } />
      </Routes>
    </article>
  );
}

function Main() {
  return (
    <main className="main">
      <Section />
      <Article />
      <Aside />
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <Head />
      <Main />
      <Footer />
    </div>
  );
}

export default App;