import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault()
    if (login(username, password)) {
      navigate('/')
    } else {
      setError('Неверный логин или пароль')
    }
  }

  return (
    <main id="center" style={{ justifyContent: 'center' }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Вход</h1>

        {error && <p className="login-error">{error}</p>}

        <label htmlFor="username">Логин</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />

        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <button type="submit">Войти</button>
      </form>
    </main>
  )
}
