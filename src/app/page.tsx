import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: "The Fascinating World of Quantum Physics",
    excerpt: "Quantum physics explores the behavior of matter and energy at the most fundamental levels...",
    date: "2024-02-17"
  },
  {
    id: 2,
    title: "The Rise of Artificial Intelligence",
    excerpt: "Artificial Intelligence (AI) has made significant strides in recent years...",
    date: "2024-02-16"
  },
  {
    id: 3,
    title: "The Future of Space Exploration",
    excerpt: "Space exploration has come a long way since the first moon landing in 1969...",
    date: "2024-02-15"
  },
  {
    id: 4,
    title: "The Benefits of Mindfulness Meditation",
    excerpt: "Mindfulness meditation is a practice that focuses on cultivating awareness...",
    date: "2024-02-14"
  }
]

export default function Home() {
  return (
    <div className="space-y-8">
      {posts.map(post => (
        <article key={post.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <Link href={`/posts/${post.id}`}>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <time className="text-sm text-gray-500">{post.date}</time>
          </Link>
        </article>
      ))}
    </div>
  )
}
