'use client';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#f8f8f8] font-['PP_Neue_Montreal',sans-serif]">
      <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#e8a87c] rounded-bl-[100px] -z-10"
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#2c5530] -z-10"
      />
      
      <header className="relative z-10 px-4 lg:px-6 h-20 flex items-center max-w-7xl mx-auto w-full">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/kanoonai.png"
            alt="KanoonAI Logo"
            width={140}
            height={32}
            priority
          />
        </Link>
        <nav className="ml-auto flex gap-8">
          <Link className="text-sm font-medium hover:text-gray-600" href="#features">Features</Link>
          <Link className="text-sm font-medium hover:text-gray-600" href="#about">About</Link>
          <Link className="text-sm font-medium hover:text-gray-600" href="#contact">Contact</Link>
        </nav>
        <div className="ml-8 flex gap-4">
          <Button variant="outline" className="bg-white">Login</Button>
          <Button className="bg-black text-white hover:bg-gray-800">Get started</Button>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl leading-tight"
              >
                Supercharge Your<br />Legal Research
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-light tracking-tight text-gray-400 sm:text-3xl md:text-4xl max-w-2xl"
              >
                AI-powered discovery to find relevant cases faster and smarter
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Revolutionize your law firm's efficiency with KanoonAI's advanced legal research and document management. Find case returners in seconds, not hours.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full max-w-sm space-y-2 mt-8"
              >
                <form className="flex gap-2">
                  <Input 
                    placeholder="Enter your work email" 
                    type="email"
                    className="flex-1 bg-white border-gray-300"
                  />
                  <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                    Book a demo
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 bg-white" id="features">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Our Features</h2>
            <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-4 items-center text-center"
              >
                <svg className="w-24 h-24 mb-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="80" height="80" rx="5" stroke="black" strokeWidth="2"/>
                  <line x1="25" y1="30" x2="75" y2="30" stroke="black" strokeWidth="2"/>
                  <line x1="25" y1="50" x2="75" y2="50" stroke="black" strokeWidth="2"/>
                  <line x1="25" y1="70" x2="75" y2="70" stroke="black" strokeWidth="2"/>
                  <circle cx="80" cy="20" r="8" fill="black"/>
                  <path d="M76 20L79 23L84 18" stroke="white" strokeWidth="2"/>
                </svg>
                <h3 className="text-xl font-bold">Legal Assistant</h3>
                <p className="text-gray-600">
                  KanoonAI can help draft, analyze, answer questions, and more over any type of legal document via natural language instructions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-4 items-center text-center"
              >
                <svg className="w-24 h-24 mb-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="35" height="80" rx="5" stroke="black" strokeWidth="2"/>
                  <rect x="55" y="10" width="35" height="80" rx="5" stroke="black" strokeWidth="2"/>
                  <line x1="20" y1="30" x2="35" y2="30" stroke="black" strokeWidth="2"/>
                  <line x1="20" y1="50" x2="35" y2="50" stroke="black" strokeWidth="2"/>
                  <line x1="20" y1="70" x2="35" y2="70" stroke="black" strokeWidth="2"/>
                  <line x1="65" y1="30" x2="80" y2="30" stroke="black" strokeWidth="2"/>
                  <line x1="65" y1="50" x2="80" y2="50" stroke="black" strokeWidth="2"/>
                  <line x1="65" y1="70" x2="80" y2="70" stroke="black" strokeWidth="2"/>
                </svg>
                <h3 className="text-xl font-bold">Research</h3>
                <p className="text-gray-600">
                  Get answers to complex research questions across multiple domains in legal, regulatory, and tax. All answers are grounded in the original source material with citations to the most relevant sections.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-4 items-center text-center"
              >
                <svg className="w-24 h-24 mb-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="2"/>
                  <line x1="50" y1="10" x2="50" y2="90" stroke="black" strokeWidth="2"/>
                  <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="5" fill="black"/>
                  <circle cx="50" cy="20" r="3" fill="black"/>
                  <circle cx="50" cy="80" r="3" fill="black"/>
                  <circle cx="20" cy="50" r="3" fill="black"/>
                  <circle cx="80" cy="50" r="3" fill="black"/>
                </svg>
                <h3 className="text-xl font-bold">Workflows</h3>
                <p className="text-gray-600">
                  KanoonAI orchestrates hundreds of highly specialized models to complete full workflows beyond the scope of a single LLM, similar to how lawyers work together on complex matters.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-24" id="about">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight sm:text-5xl"
              >
                What is KanoonAI?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                KanoonAI is a groundbreaking AI-powered assistant designed to revolutionize legal research, drafting,
                and workflow management. We leverage OpenAI and our vast legal databases to securely manage your
                cases, pinpoint relevant precedents and generate comprehensive drafts. Our AI agents search through
                multiple databases including national and state laws, acts, and supreme court cases to provide you
                with the most relevant and accurate information.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="w-full py-24 bg-black text-white" id="contact">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight sm:text-5xl"
              >
                Get Started with KanoonAI
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Ready to revolutionize your legal practice? Sign up for a demo today!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full max-w-sm space-y-2 mt-8"
              >
                <form className="flex flex-col gap-2">
                  <Input placeholder="Enter your email" type="email" className="bg-white text-black" />
                  <Button type="submit" className="bg-white text-black hover:bg-gray-200">Request a Demo</Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-white">
        <p className="text-xs text-gray-600">© 2023 KanoonAI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">Terms of Service</Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
        </nav>
      </footer>
    </div>
  )
}