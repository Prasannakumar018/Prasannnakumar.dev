'use client'

import React from "react"

import { useState, useEffect, useRef } from 'react'
import { Terminal } from 'lucide-react'

interface ShellLine {
  type: 'command' | 'output' | 'info'
  content: string
}

const COMMANDS = {
  'whoami': { output: 'prasannakumar\nFull Stack Developer & Junior Pentester', type: 'output' },
  'dev-stack': { output: 'Frontend: React, Angular, HTML5/CSS3, TypeScript\nBackend: Node.js, Spring Boot, Java, Python\nDatabases: PostgreSQL, MongoDB\nDeployment: Docker, Azure, Git', type: 'output' },
  'security-tools': { output: 'Burp Suite - Web Application Security Testing\nNmap - Network Reconnaissance & Port Scanning\nOWASP Top 10 - Vulnerability Assessment\nManual Penetration Testing - Code Review & Logic Analysis', type: 'output' },
  'current-role': { output: 'TechSecure Solutions\n📍 Full-Stack Developer & Security Specialist\n2023 - Present\n✓ Secure web application development\n✓ Security audits for enterprise clients\n✓ Vulnerability assessment & remediation', type: 'output' },
  'achievements': { output: '5,000+ Users - Secure authentication system\n99.9% Uptime - Production applications\n23 Vulnerabilities Found - E-commerce security audit\n7 Critical Issues Patched - Before product launch\n95% Vulnerability Reduction - Client implementations', type: 'output' },
  'skills': { output: 'Frontend: React (90%) | Angular (85%) | HTML5/CSS3 (95%)\nBackend: Node.js (85%) | Java/Spring Boot (80%)\nSecurity: Burp Suite (80%) | Penetration Testing (75%) | OWASP (85%)\nTools: Nmap (75%) | Docker (75%) | Git (90%)\nLanguages: JavaScript | TypeScript | Java | Python', type: 'output' },
  'projects': { output: '1. SecureAuth Platform - Multi-factor authentication system (React, Node.js, PostgreSQL)\n2. E-Commerce Security Audit - Identified 23 vulnerabilities with proof-of-concept exploits\n3. Network Security Analysis - Nmap-based infrastructure assessment\n4. REST API Security - OWASP compliance & secure session management', type: 'output' },
  'dynamic-test': { output: 'Running dynamic security tests...\n✓ SQL Injection Prevention: PASS\n✓ XSS Protection: PASS\n✓ CSRF Token Validation: PASS\n✓ Authentication Flow: PASS\n✓ Session Management: PASS\n✓ API Rate Limiting: PASS\nAll tests completed successfully!', type: 'output' },
  'help': { output: 'Available commands:\n  whoami - Show profile info\n  dev-stack - View development stack\n  security-tools - View security tools used\n  current-role - View current role\n  achievements - View achievements\n  skills - View detailed skills\n  projects - View projects\n  dynamic-test - Run security tests\n  clear - Clear terminal\n  help - Show this help', type: 'output' },
  'clear': { output: '', type: 'info' }
}

export default function InteractiveShell() {
  const [history, setHistory] = useState<ShellLine[]>([
    { type: 'info', content: 'Welcome to Prasannakumar\'s Interactive Shell 🛡️\nType "help" to see available commands' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Auto-run demo commands
  useEffect(() => {
    const timer = setTimeout(() => {
      const demoCommands = ['whoami', 'dev-stack', 'security-tools']
      demoCommands.forEach((cmd, idx) => {
        setTimeout(() => {
          executeCommand(cmd)
        }, idx * 800)
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const executeCommand = (command: string) => {
    if (!command.trim()) return

    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: `$ ${command}` }])

    const cmd = command.toLowerCase().trim()
    const response = COMMANDS[cmd as keyof typeof COMMANDS]

    if (cmd === 'clear') {
      setHistory([{ type: 'info', content: 'Terminal cleared' }])
    } else if (response) {
      setHistory(prev => [...prev, { type: response.type, content: response.output }])
    } else {
      setHistory(prev => [...prev, { type: 'output', content: `Command not found: ${command}\nType "help" for available commands` }])
    }

    setInput('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-12">
      <div className="bg-foreground/5 border border-primary/30 rounded overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-primary/10 border-b border-primary/20 px-4 py-3 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary">Interactive Shell - Full Stack & Security Specialist</span>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="bg-background p-4 h-96 overflow-y-auto font-mono text-sm space-y-2"
        >
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`${
                line.type === 'command'
                  ? 'text-primary font-semibold'
                  : line.type === 'info'
                  ? 'text-accent'
                  : 'text-muted-foreground whitespace-pre-wrap'
              }`}
            >
              {line.content}
            </div>
          ))}
          {isTyping && <div className="text-primary animate-pulse">_</div>}
        </div>

        {/* Input Area */}
        <div className="bg-primary/5 border-t border-primary/20 px-4 py-3 flex items-center gap-2">
          <span className="text-primary font-semibold">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a command (type 'help' for list)..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
            autoFocus
          />
        </div>

        {/* Quick Commands */}
        <div className="bg-primary/5 border-t border-primary/20 px-4 py-3">
          <div className="text-xs text-muted-foreground mb-2">Quick Commands:</div>
          <div className="flex flex-wrap gap-2">
            {['whoami', 'dev-stack', 'security-tools', 'skills', 'dynamic-test', 'help'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded text-xs font-medium transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
