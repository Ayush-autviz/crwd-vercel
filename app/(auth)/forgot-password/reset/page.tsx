"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, Eye, EyeOff, Lock, Check, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"

const ResetPasswordPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  })
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""
  const code = searchParams.get("code") || ""

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return 0
    if (password.length < 8) return 1
    
    let strength = 1
    if (password.length >= 10) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    
    return Math.min(strength, 4)
  }

  const passwordStrength = getPasswordStrength(formData.newPassword)
  const passwordsMatch = formData.newPassword === formData.confirmPassword && formData.confirmPassword.length > 0

  const getPasswordRequirements = () => {
    const requirements = [
      {
        text: "At least 8 characters",
        met: formData.newPassword.length >= 8,
      },
      {
        text: "Contains uppercase letter",
        met: /[A-Z]/.test(formData.newPassword),
      },
      {
        text: "Contains number",
        met: /[0-9]/.test(formData.newPassword),
      },
      {
        text: "Contains special character",
        met: /[^A-Za-z0-9]/.test(formData.newPassword),
      },
    ]
    return requirements
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords don't match", {
        description: "Please make sure both passwords are identical.",
      })
      return
    }

    if (passwordStrength < 3) {
      toast.error("Password too weak", {
        description: "Please choose a stronger password.",
      })
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      toast.success("Password reset successfully!", {
        description: "You can now sign in with your new password.",
      })
      
      // Navigate to login page
      router.push("/login")
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      })
    } finally {
      setIsLoading(false)
    }
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
                  <h1 className="text-2xl font-semibold text-gray-900">Reset your password</h1>
                  <p className="text-gray-600 text-sm">
                    Enter your new password for
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">{email}</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* New Password */}
                <div className="space-y-1">
                  <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">
                    New password
                  </label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      placeholder="••••••••"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="h-10 border-gray-300 focus-visible:border-gray-900 focus-visible:ring-gray-900/10 pl-10 pr-10 transition-colors duration-200"
                      required
                    />
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1 h-8 w-8 hover:bg-gray-100"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  </div>

                  {/* Password Strength */}
                  {formData.newPassword && (
                    <div className="mt-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={cn(
                              "h-1 flex-1 rounded-full transition-colors duration-300",
                              passwordStrength >= level
                                ? passwordStrength <= 1
                                  ? "bg-red-400"
                                  : passwordStrength <= 2
                                    ? "bg-yellow-400"
                                    : passwordStrength <= 3
                                      ? "bg-blue-400"
                                      : "bg-green-400"
                                : "bg-gray-200",
                            )}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {passwordStrength <= 1 && "Weak password"}
                        {passwordStrength === 2 && "Fair password"}
                        {passwordStrength === 3 && "Good password"}
                        {passwordStrength === 4 && "Strong password"}
                      </p>
                    </div>
                  )}

                  {/* Password Requirements */}
                  {formData.newPassword && (
                    <div className="mt-3 space-y-1">
                      {getPasswordRequirements().map((requirement, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs">
                          <div className={cn(
                            "w-3 h-3 rounded-full flex items-center justify-center",
                            requirement.met ? "bg-green-100" : "bg-gray-100"
                          )}>
                            {requirement.met && <Check className="w-2 h-2 text-green-600" />}
                          </div>
                          <span className={cn(
                            requirement.met ? "text-green-600" : "text-gray-500"
                          )}>
                            {requirement.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-1">
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm new password
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={cn(
                        "h-10 border-gray-300 focus-visible:border-gray-900 focus-visible:ring-gray-900/10 pl-10 pr-10 transition-colors duration-200",
                        formData.confirmPassword && !passwordsMatch && "border-red-300 focus-visible:border-red-500"
                      )}
                      required
                    />
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1 h-8 w-8 hover:bg-gray-100"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                    {passwordsMatch && (
                      <div className="absolute right-10 top-3 text-green-600">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  
                  {formData.confirmPassword && !passwordsMatch && (
                    <p className="text-xs text-red-600 mt-1">
                      Passwords don't match
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isLoading || !passwordsMatch || passwordStrength < 3}
                    className={cn(
                      "w-full h-10 bg-gray-900 hover:bg-gray-800 text-white font-medium",
                      "transition-colors duration-200",
                      (isLoading || !passwordsMatch || passwordStrength < 3) && "opacity-50 cursor-not-allowed",
                    )}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Resetting password...
                      </div>
                    ) : (
                      "Reset password"
                    )}
                  </Button>
                </div>
              </form>

              {/* Back to Verification */}
              <div className="text-center">
                <Link
                  href={`/forgot-password/verify?email=${encodeURIComponent(email)}`}
                  className="text-sm text-gray-700 hover:text-gray-900 hover:underline transition-colors inline-flex items-center gap-1"
                >
                  <ArrowLeft className="h-3 w-3" />
                  Back to verification
                </Link>
              </div>

              {/* Security Notice */}
              <div className="text-center">
                <p className="text-xs text-gray-500">Make sure to choose a strong password you haven't used before</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage 