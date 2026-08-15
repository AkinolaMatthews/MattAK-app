import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../utils/lib/supabase'
import { HiOutlineTrash, HiOutlinePencil, HiOutlinePlus, HiOutlineArrowRightOnRectangle } from 'react-icons/hi2'

type Project = {
  id: number
  title: string
  tag: string
  description: string
  features: string
  tech: string
  link: string
  image_url: string
  color: string
  in_development: boolean
}

const emptyForm = {
  title: '', tag: '', description: '', features: '', tech: '',
  link: '', color: 'from-sky-500 to-blue-400', in_development: false,
}

function AdminDashboard() {
  const [session, setSession] = useState<any>(null)
  const [checking, setChecking] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])
  const [form, setForm] = useState(emptyForm)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [saving, setSaving] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate('/admin')
      } else {
        setSession(data.session)
      }
      setChecking(false)
    })
  }, [navigate])

  useEffect(() => {
    if (session) fetchProjects()
  }, [session])

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
    if (data) setProjects(data as Project[])
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    let imageUrl = editingId ? projects.find(p => p.id === editingId)?.image_url || '' : ''

    if (imageFile) {
  const cleanName = imageFile.name
    .replace(/[^a-zA-Z0-9.\-_]/g, '-')  // replace anything not alphanumeric/dot/dash/underscore with a dash
    .replace(/-+/g, '-')                 // collapse multiple dashes into one
  const fileName = `${Date.now()}-${cleanName}`

  const { error: uploadError } = await supabase.storage
    .from('project-images')
    .upload(fileName, imageFile)

      if (uploadError) {
        alert('Image upload failed: ' + uploadError.message)
        setSaving(false)
        return
      }

      const { data: publicUrlData } = supabase.storage
        .from('project-images')
        .getPublicUrl(fileName)
      imageUrl = publicUrlData.publicUrl
    }

    const payload = { ...form, image_url: imageUrl }

    if (editingId) {
      await supabase.from('projects').update(payload).eq('id', editingId)
    } else {
      await supabase.from('projects').insert([payload])
    }

    setForm(emptyForm)
    setImageFile(null)
    setEditingId(null)
    setSaving(false)
    fetchProjects()
  }

  const handleEdit = (p: Project) => {
    setForm({
      title: p.title, tag: p.tag, description: p.description,
      features: p.features, tech: p.tech, link: p.link,
      color: p.color, in_development: p.in_development,
    })
    setEditingId(p.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this project?')) return
    await supabase.from('projects').delete().eq('id', id)
    fetchProjects()
  }

  if (checking) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  return (
    <div className="min-h-screen text-slate-900 dark:text-white px-4 sm:px-6 md:px-20 py-24">
      <div className="flex justify-between items-center mb-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Project Manager</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-rose-400 hover:text-rose-500 transition-colors"
        >
          <HiOutlineArrowRightOnRectangle className="w-4 h-4" />
          Log Out
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-6 mb-10 space-y-4"
      >
        <h2 className="font-semibold text-lg flex items-center gap-2">
          <HiOutlinePlus className="w-5 h-5" />
          {editingId ? 'Edit Project' : 'Add New Project'}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
            required
          />
          <input
            placeholder="Tag (e.g. Real Estate)"
            value={form.tag}
            onChange={(e) => setForm({ ...form, tag: e.target.value })}
            className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
          />
        </div>

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={2}
          className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
        />

        <input
          placeholder="Features (comma-separated)"
          value={form.features}
          onChange={(e) => setForm({ ...form, features: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
        />

        <input
          placeholder="Tech (comma-separated, e.g. WordPress,PHP)"
          value={form.tech}
          onChange={(e) => setForm({ ...form, tech: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            placeholder="Live link"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
          />
          <select
            value={form.color}
            onChange={(e) => setForm({ ...form, color: e.target.value })}
            className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
          >
            <option value="from-sky-500 to-blue-400">Blue</option>
            <option value="from-emerald-500 to-green-400">Green</option>
            <option value="from-rose-500 to-pink-400">Pink</option>
            <option value="from-amber-500 to-yellow-400">Amber</option>
            <option value="from-purple-500 to-fuchsia-400">Purple</option>
            <option value="from-cyan-500 to-sky-400">Cyan</option>
            <option value="from-orange-500 to-red-400">Orange</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium mb-1 block">Project Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="text-sm"
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.in_development}
            onChange={(e) => setForm({ ...form, in_development: e.target.checked })}
          />
          In Development
        </label>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-6 py-2 rounded-full text-sm hover:scale-105 transition-transform duration-200 disabled:opacity-60"
          >
            {saving ? 'Saving...' : editingId ? 'Update Project' : 'Add Project'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => { setEditingId(null); setForm(emptyForm) }}
              className="px-6 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="max-w-4xl mx-auto space-y-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-slate-900 shadow-sm rounded-xl p-4 flex items-center gap-4"
          >
            {p.image_url && (
              <img src={p.image_url} alt={p.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">{p.title}</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs truncate">{p.tag}</p>
            </div>
            <button
              onClick={() => handleEdit(p)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 hover:border-sky-400 hover:text-sky-500 transition-colors flex-shrink-0"
            >
              <HiOutlinePencil className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDelete(p.id)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 hover:border-rose-400 hover:text-rose-500 transition-colors flex-shrink-0"
            >
              <HiOutlineTrash className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard