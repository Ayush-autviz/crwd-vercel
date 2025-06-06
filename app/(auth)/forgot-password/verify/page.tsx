"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ArrowLeft, Mail, RefreshCw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"

const VerifyCodePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return // Prevent multiple characters

    const newCode = [...code]
    newCode[index] = value

    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    const newCode = [...code]
    
    for (let i = 0; i < 6; i++) {
      newCode[i] = pastedData[i] || ""
    }
    
    setCode(newCode)
    
    // Focus last filled input or next empty input
    const lastFilledIndex = pastedData.length - 1
    if (lastFilledIndex >= 0 && lastFilledIndex < 5) {
      inputRefs.current[lastFilledIndex + 1]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const verificationCode = code.join("")
    
    if (verificationCode.length !== 6) {
      toast.error("Please enter the complete verification code")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      toast.success("Code verified successfully!", {
        description: "You can now reset your password.",
      })
      
      // Navigate to reset password screen
      router.push(`/forgot-password/reset?email=${encodeURIComponent(email)}&code=${verificationCode}`)
    } catch (error) {
      toast.error("Invalid verification code", {
        description: "Please check your code and try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      toast.success("New code sent!", {
        description: "Check your email for the new verification code.",
      })
      
      setTimeLeft(300) // Reset timer
      setCode(["", "", "", "", "", ""]) // Clear current code
      inputRefs.current[0]?.focus()
    } catch (error) {
      toast.error("Failed to resend code", {
        description: "Please try again later.",
      })
    } finally {
      setIsResending(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] [background-size:20px_20px]"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center p-4 md:p-8 min-h-screen">
        <div className="w-full max-w-md">
          <Card className="border border-gray-200 shadow-sm bg-white">
            <CardContent className="p-8 space-y-6">
              {/* Logo and Header */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Image src="/logo3.png" width={80} height={80} alt="CRWD Logo" className="drop-shadow-sm" />
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl font-semibold text-gray-900">Check your email</h1>
                  <p className="text-gray-600 text-sm">
                    We sent a 6-digit verification code to
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">{email}</span>
                  </div>
                </div>
              </div>

              {/* Verification Code Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Code Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block text-center">
                    Enter verification code
                  </label>
                  <div className="flex justify-center gap-2">
                    {code.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          inputRefs.current[index] = el
                        }}
                        type="text"
                        inputMode="numeric"
                        pattern="\d*"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition-colors duration-200"
                      />
                    ))}
                  </div>
                </div>

                {/* Timer */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Code expires in{" "}
                    <span className="font-medium text-gray-900">{formatTime(timeLeft)}</span>
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading || code.join("").length !== 6}
                  className={cn(
                    "w-full h-10 bg-gray-900 hover:bg-gray-800 text-white font-medium",
                    "transition-colors duration-200",
                    (isLoading || code.join("").length !== 6) && "opacity-50 cursor-not-allowed",
                  )}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Verifying...
                    </div>
                  ) : (
                    "Verify code"
                  )}
                </Button>
              </form>

              {/* Resend Code */}
              <div className="text-center">
                {timeLeft > 0 ? (
                  <p className="text-sm text-gray-500">
                    Didn't receive the code?{" "}
                    <span className="text-gray-400">Resend in {formatTime(timeLeft)}</span>
                  </p>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={handleResendCode}
                    disabled={isResending}
                    className="text-sm text-gray-700 hover:text-gray-900 hover:underline p-0 h-auto font-normal"
                  >
                    {isResending ? (
                      <div className="flex items-center gap-2">
                        <RefreshCw className="h-3 w-3 animate-spin" />
                        Resending...
                      </div>
                    ) : (
                      "Resend verification code"
                    )}
                  </Button>
                )}
              </div>

              {/* Back to Email */}
              <div className="text-center">
                <Link
                  href="/forgot-password"
                  className="text-sm text-gray-700 hover:text-gray-900 hover:underline transition-colors inline-flex items-center gap-1"
                >
                  <ArrowLeft className="h-3 w-3" />
                  Back to email entry
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default VerifyCodePage 