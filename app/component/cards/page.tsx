import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from 'lucide-react'

interface BlogCardProps {
  category: string
  date: string
  title: string
  excerpt: string
  author: {
    name: string
    image: string
  }
  image: string;
}

export default function BlogCard({
  category,
  date,
  title,
  excerpt,
  author,
  image
}: BlogCardProps) {
  return (
    <Link 
      href="#" 
      className="group block overflow-hidden rounded-2xl p-1"
    >
      <div className="h-full rounded-xl bg-indigo-600 p-4">
        <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex gap-4">
          <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/60 hover:bg-white/20">
            {category}
          </span>
          <time className="flex items-center text-sm text-white/60">
            <Calendar className="mr-1 h-4 w-4" />
            {date}
          </time>
        </div>
        <h3 className="mt-4 line-clamp-2 text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/60">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center text-sm text-white/90">
            <User className="mr-1 h-4 w-4" />
            {author.name}
          </div>
        </div>
      </div>
    </Link>
  )
}

