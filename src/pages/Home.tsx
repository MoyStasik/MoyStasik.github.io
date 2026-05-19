import { useState } from 'react'
import surprizeImg from '../assets/surprise.png'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="home-page">
      <div className="sparkles" aria-hidden="true" />

      <section className="hero-section">
        <div className="balloons" aria-hidden="true">
          <span className="balloon b1" />
          <span className="balloon b2" />
          <span className="balloon b3" />
          <span className="balloon b4" />
          <span className="balloon b5" />
        </div>

        <p className="greeting">Дорогая Вика!</p>
        <h1 className="birthday-title">
          С Днём
          <br />
          Рождения!
        </h1>
        <div className="title-decor">
          <span className="decor-line" />
          <span className="decor-heart">&#10084;</span>
          <span className="decor-line" />
        </div>
        <p className="wish">
          Пусть каждый день будет наполнен счастьем, улыбками и любовью.
          <br />
          Ты — самое прекрасное, что случилось в моей жизни.
        </p>
      </section>

      <section className="wishes-section">
        <div className="wish-card">
          <span className="wish-icon">&#127775;</span>
          <h3>Сияй</h3>
          <p>Пусть твоя красота и обаяние освещают всё вокруг, как самая яркая звезда</p>
        </div>
        <div className="wish-card">
          <span className="wish-icon">&#127800;</span>
          <h3>Цвети</h3>
          <p>Как самый нежный цветок, пусть твоя душа всегда расцветает от радости и тепла</p>
        </div>
        <div className="wish-card">
          <span className="wish-icon">&#128150;</span>
          <h3>Люби</h3>
          <p>Пусть сердце всегда будет наполнено любовью — и ты знай, как сильно тебя любят</p>
        </div>
      </section>

      <section className="surprise-section">
        <button type="button" className="surprise-btn" onClick={() => setShowModal(true)}>
          <span className="surprise-btn-icon">&#127873;</span>
          Открой сюрприз
          <span className="surprise-btn-sparkle" />
          <span className="surprise-btn-sparkle" />
          <span className="surprise-btn-sparkle" />
        </button>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Закрыть"
            >
              &times;
            </button>
            <img
              src={surprizeImg}
              alt="Сюрприз для Вики"
              className="modal-image"
            />
            <p className="modal-caption">С любовью, для тебя &#10084;</p>
          </div>
        </div>
      )}

      <section className="cake-section">
        <div className="cake">
          <span className="cake-emoji" aria-hidden="true">&#127874;</span>
          <p className="cake-text">Самых сладких моментов<br />и исполнения всех желаний!</p>
        </div>
      </section>

      <footer className="home-footer">
        <p className="footer-text">
          С любовью, для самой лучшей Вики на свете
          <span className="footer-heart"> &#10084;</span>
        </p>
      </footer>
    </div>
  )
}
