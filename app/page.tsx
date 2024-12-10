'use client'

import { useState } from 'react'
import Link from "next/link"
import { ArrowUpRight, Menu, X } from 'lucide-react'
import BlogCard from './component/cards/page'
import cardImage from "../public/com.jpeg"
import avatar from "../public/avatar.jpeg"
import { ArrowRight } from 'lucide-react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }
  const blogPosts = [
    {
      category: "Business",
      date: "June 3, 2024",
      title: "Boost Your Website with Migration Strategies",
      excerpt: "In today's fast-paced digital landscape, a website is more than just an online storefront. It's a crucial touchpoint for businesses.",
      author: {
        name: "Sean Maximlin",
        image: avatar.src
      },
      image: cardImage.src
    },
    {
      category: "Business",
      date: "June 3, 2024",
      title: "Boost Your Website with Migration Strategies",
      excerpt: "In today's fast-paced digital landscape, a website is more than just an online storefront. It's a crucial touchpoint for businesses.",
      author: {
        name: "Sean Maximlin",
        image: avatar.src
      },
      image: cardImage.src
    },
    {
      category: "Business",
      date: "June 3, 2024",
      title: "Boost Your Website with Migration Strategies",
      excerpt: "In today's fast-paced digital landscape, a website is more than just an online storefront. It's a crucial touchpoint for businesses.",
      author: {
        name: "Sean Maximlin",
        image: avatar.src
      },
      image: cardImage.src
    },
    {
      category: "Business",
      date: "June 3, 2024",
      title: "Boost Your Website with Migration Strategies",
      excerpt: "In today's fast-paced digital landscape, a website is more than just an online storefront. It's a crucial touchpoint for businesses.",
      author: {
        name: "Sean Maximlin",
        image: avatar.src
      },
      image: cardImage.src
    },
    {
      category: "Business",
      date: "June 3, 2024",
      title: "Boost Your Website with Migration Strategies",
      excerpt: "In today's fast-paced digital landscape, a website is more than just an online storefront. It's a crucial touchpoint for businesses.",
      author: {
        name: "Sean Maximlin",
        image: avatar.src
      },
      image: cardImage.src
    },
    {
      category: "Business",
      date: "June 3, 2024",
      title: "Boost Your Website with Migration Strategies",
      excerpt: "In today's fast-paced digital landscape, a website is more than just an online storefront. It's a crucial touchpoint for businesses.",
      author: {
        name: "Sean Maximlin",
        image: avatar.src
      },
      image: cardImage.src
    },
  ]
  return (
    <div className="min-h-screen bg-[#0A0A0B] bg-gradient-to-br from-[#0A0A0B] to-[#121316]"
    >
      <header className="relative top-3 flex items-center justify-between py-4 px-4 sm:py-6 sm:px-8 border border-white/10 rounded-full bg-black/30 backdrop-blur-sm mx-2 sm:mx-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="grid w-8 h-8 bg-white/10 place-items-center rounded-md">
            <svg
              className="text-white"
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88071 3.11929 7 4.5 7C5.88071 7 7 5.88071 7 4.5C7 3.11929 5.88071 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88071 9.11929 7 10.5 7C11.8807 7 13 5.88071 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM4.5 8C3.11929 8 2 9.11929 2 10.5C2 11.8807 3.11929 13 4.5 13C5.88071 13 7 11.8807 7 10.5C7 9.11929 5.88071 8 4.5 8ZM3 10.5C3 9.67157 3.67157 9 4.5 9C5.32843 9 6 9.67157 6 10.5C6 11.3284 5.32843 12 4.5 12C3.67157 12 3 11.3284 3 10.5ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold text-white">Logo here</span>
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-8">
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 mt-2 md:mt-0 bg-black/90 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none items-center space-y-4 md:space-y-0 md:space-x-8`}>
            <Link href="/" className="text-sm text-white/90 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-sm text-white/90 hover:text-white">
              About
            </Link>
            <Link href="/projects" className="text-sm text-white/90 hover:text-white">
              Projects
            </Link>
            <Link href="/services" className="text-sm text-white/90 hover:text-white">
              Services
            </Link>
            <Link href="/blog" className="text-sm text-white/90 hover:text-white">
              Blog
            </Link>
          </nav>
          <div className="flex items-center space-x-1">
            <button
              className="text-white px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-full flex items-center"
              style={{
                background: "linear-gradient(to right, #4D49FF, #2D2AC0)",
              }}
            >
              <span className="hidden sm:inline">Get In Touch</span>
              <span className="sm:hidden">Contact</span>
            </button>

            <button className="text-white rounded-full text-center p-3 sm:px-3"
              style={{
                background: "linear-gradient(to right, #4D49FF, #2D2AC0)",
              }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-8 py-12 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-teal-400"></div>
            <p className="text-sm font-medium tracking-wider text-teal-400">LATEST BLOGS</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            From Code to Impact:{" "}
            <span className="text-teal-400">Insights</span> from a Software Engineer
          </h1>
          <p className="text-base sm:text-lg text-white/60">
            Whether you&apos;re looking to learn new skills or gain insights into the latest trends, this blog is your
            gateway to understanding the impact of technology.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        <section className="mt-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0A0A0B]" />
          <div className="relative bg-teal-400 rounded-xl p-12">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(to right, #4D49FF 1px, transparent 1px), linear-gradient(to bottom, #4D49FF 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />
            <div className="relative max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-4xl font-bold text-black">Let's Work Together</h2>
              <p className="text-black/80">
                Collaborative drives innovation. If you have an exciting project or idea, I'd love to hear about it. Let's create something amazing together!
              </p>
              <div className="pt-4">
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
                  Book A Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='mt-16'>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm tracking-wider text-teal-400">CONTACT US</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Get In <span className="text-teal-400">Touch</span><br />
                  With Us
                </h2>
              </div>
              <p className="text-white/60 text-lg">
                Have a project in mind or just want to chat about technology? Feel free
                to drop me a message. I'm always open to discussing new ideas and
                opportunities.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm text-white/60 mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[150px] resize-none"
                    placeholder="Leave us a message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 px-16 rounded-3xl text-white font-medium bg-gradient-to-r from-[#4D49FF] to-[#2D2AC0] hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-teal-400">Stay</span> in the Loop!
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Join our mailing list for updates, tips, and exclusive insights to help your business grow.
            Stay inspired—subscribe now!
          </p>
          <div className="mt-8 max-w-md mx-auto flex gap-2">
            <div className='absolute mt-[18px] ml-4'>
              <MdOutlineEmail className='text-white/60' />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-9 py-3 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              className="px-3 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#4D49FF] to-[#2D2AC0] hover:opacity-90 transition-opacity"
            >
              <ArrowRight />
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            <Link href="#" className="text-white hover:text-white">
              <FaYoutube className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white hover:text-white">
              <AiFillTikTok className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white hover:text-white">
              <FaInstagramSquare className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white hover:text-white">
              <FaFacebookSquare className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <footer className="mt-24 mb-[-80px] border-t border-white/10 py-8">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Copyright: Name here - All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/60 hover:text-white text-sm">
                Terms & Conditions
              </Link>
              <span className="text-white/60">|</span>
              <Link href="#" className="text-white/60 hover:text-white text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

