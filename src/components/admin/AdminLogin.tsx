import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../utils/lib/supabase'

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    setLoading(false)
    if (error) {
      setError('Invalid email or password.')
    } else {
      navigate('/admin/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-slate-900 dark:text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-8"
      >
        <h1 className="text-xl font-bold mb-6 text-center">Admin Login</h1>

        {error && (
          <p className="text-rose-500 text-sm mb-4 text-center">{error}</p>
        )}

        <label className="text-xs font-medium mb-1 block">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mb-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-emerald-400"
          required
        />

        <label className="text-xs font-medium mb-1 block">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-6 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:border-emerald-400"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-2.5 rounded-full hover:scale-[1.02] transition-transform duration-200 disabled:opacity-60"
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  )
}

export default AdminLogin