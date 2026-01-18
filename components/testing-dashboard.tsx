'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, Play, RotateCcw, CheckCircle, XCircle, Clock } from 'lucide-react'
import type { TestSuite, TestResult } from '@/lib/testing-utils'
import { runAllTests } from '@/lib/testing-utils'

export default function TestingDashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [testResults, setTestResults] = useState<TestSuite | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [expandedTests, setExpandedTests] = useState<number[]>([])

  const runTests = async () => {
    setIsRunning(true)
    // Simulate test execution delay
    setTimeout(() => {
      const results = runAllTests()
      setTestResults(results)
      setIsRunning(false)
      console.log('[v0] Dynamic testing complete:', results)
    }, 500)
  }

  const toggleTestExpand = (index: number) => {
    setExpandedTests(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  const getTestColor = (passed: boolean) => {
    return passed ? 'text-green-600' : 'text-red-600'
  }

  const getProgressColor = (passed: number, total: number) => {
    const percentage = (passed / total) * 100
    if (percentage === 100) return 'bg-green-500'
    if (percentage >= 75) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Dashboard Panel */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-96 bg-background border border-border/50 rounded-lg shadow-2xl backdrop-blur-sm p-6 mb-4 max-h-[600px] overflow-y-auto animate-in fade-in slide-in-from-bottom-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Dynamic Testing Suite</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            {testResults ? (
              <div className="space-y-4">
                {/* Summary */}
                <div className="bg-card border border-border/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">Tests Passed</span>
                    <span className="text-2xl font-bold text-green-600">
                      {testResults.passed}/{testResults.total}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${getProgressColor(testResults.passed, testResults.total)}`}
                      style={{ width: `${(testResults.passed / testResults.total) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Execution time: {testResults.duration.toFixed(2)}ms
                  </p>
                </div>

                {/* Test Results */}
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {testResults.tests.map((test, idx) => (
                    <div
                      key={idx}
                      className="bg-card border border-border/30 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleTestExpand(idx)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-primary/5 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          {test.passed ? (
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                          )}
                          <span className="font-medium text-sm">{test.name}</span>
                        </div>
                        {expandedTests.includes(idx) ? (
                          <ChevronUp className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>

                      {expandedTests.includes(idx) && (
                        <div className="px-4 py-3 border-t border-border/20 bg-primary/5 text-xs space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Result:</span>
                            <span className={getTestColor(test.passed)}>
                              {test.message}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Duration:</span>
                            <span className="text-foreground">{test.duration.toFixed(2)}ms</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Run Again Button */}
                <Button
                  onClick={runTests}
                  disabled={isRunning}
                  size="sm"
                  className="w-full bg-transparent"
                  variant="outline"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  {isRunning ? 'Running...' : 'Run Tests Again'}
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No tests run yet</p>
                <Button onClick={runTests} disabled={isRunning} className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  {isRunning ? 'Running Tests...' : 'Start Testing'}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen && !testResults && !isRunning) {
            runTests()
          }
        }}
        size="lg"
        className="rounded-full shadow-lg h-14 w-14 flex items-center justify-center"
        title="Dynamic Testing Dashboard"
      >
        {isRunning ? (
          <div className="animate-spin">
            <Clock className="w-6 h-6" />
          </div>
        ) : testResults ? (
          <CheckCircle className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </Button>
    </div>
  )
}
