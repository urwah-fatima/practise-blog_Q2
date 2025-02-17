'use client'

import { useState } from 'react'

const posts = {
  1: {
    title: "The Fascinating World of Quantum Physics",
    content: "Quantum physics explores the behavior of matter and energy at the most fundamental levels. At this scale, the familiar laws of classical physics break down, and a bizarre, counterintuitive reality takes over.  It's a world where particles can be in multiple places at once, where observation changes reality, and where the very fabric of the universe appears probabilistic.  Intrigued? Let's dive into the fascinating world of quantum physics.Despite its successes, quantum physics still holds many mysteries.  How it connects with gravity, the nature of consciousness, and the ultimate structure of reality are all open questions that continue to drive research.  The journey into the quantum realm is a journey into the heart of reality itself, a journey that is both challenging and profoundly rewarding.  So, are you ready to explore the strange and wonderful world of quantum physics?"
  },
  2: {
    title: "The Rise of Artificial Intelligence: From Science Fiction to Everyday Reality",
    content: "Artificial Intelligence (AI) has made significant strides in recent years, revolutionizing various industries and aspects of our daily lives.  What was once confined to the realm of science fiction is now rapidly becoming an integral part of our reality, impacting everything from how we communicate to how we work and even how we entertain ourselves.  But just how did we get here, and where is this incredible technology taking us? The rise of artificial intelligence is transforming our world in profound ways.  From the mundane to the groundbreaking, AI is reshaping how we live, work, and interact with each other.  While challenges remain, the potential benefits of AI are undeniable.  By embracing innovation while addressing the associated risks, we can harness the power of AI to create a better future for all."  
  },
  3: {
    title: "The Future of Space Exploration: Beyond the Moon and Mars",
    content: "Space exploration has come a long way since the first moon landing in 1969. Today, private companies are joining government agencies in pushing the boundaries of what's possible, leading to a new era of innovation and discovery.  From ambitious plans for Mars colonization to the search for extraterrestrial life, the future of space exploration is brimming with exciting possibilities.The future of space exploration will likely be characterized by international collaboration and continued innovation.  By pooling resources and expertise, nations can achieve more than they could alone.  The drive to explore the cosmos is a fundamental human impulse, and as we continue to push the boundaries of what's possible, the future of space exploration looks brighter than ever.  We are on the cusp of a new golden age of space exploration, one that promises to unlock the secrets of the universe and reshape our understanding of our place within it."
  },
  4: {
    title: "The Benefits of Mindfulness Meditation",
    content: "Mindfulness meditation is a practice that focuses on cultivating awareness and presence in the moment.  It involves paying attention to your thoughts, feelings, and sensations without judgment, allowing you to observe them as they arise and pass.  This simple yet powerful technique has gained immense popularity in recent years, and for good reason. The benefits of mindfulness meditation are numerous and far-reaching, impacting both our mental and physical well-being.Mindfulness meditation is a powerful tool for cultivating inner peace and well-being.  By incorporating this practice into your daily life, you can experience a wide range of benefits for your mental and physical health.  So, take a few minutes today to quiet your mind, focus on your breath, and discover the transformative power of mindfulness."
  }
}

interface Params {
  id: keyof typeof posts;
}

export default function Post({ params }: any) {
  interface Comment {
    id: number;
    text: string;
    date: string;
  }

  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const post = posts[params.id as keyof typeof posts];

  const handleSubmitComment = (e:any) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setComments((prevComments) => [
      ...prevComments,
      {
        id: Date.now(),
        text: newComment,
        date: new Date().toISOString()
      }
    ])
    setNewComment('')
  }


  return (
    <div className="space-y-8">
      <article className="prose lg:prose-xl">
        <h1>{post.title}</h1>
        <div className="whitespace-pre-wrap">{post.content}</div>
      </article>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        
        <form onSubmit={handleSubmitComment} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-4 border rounded-lg mb-2"
            placeholder="Add a comment..."
            rows={3}
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-4">
          {comments.map(comment => (
            <div key={comment.id} className="border rounded-lg p-4">
              <p className="mb-2">{comment.text}</p>
              <time className="text-sm text-gray-500">
                {new Date(comment.date).toLocaleDateString()}
              </time>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
