"use client"

import type React from "react"
import { useState } from "react"
import { X, DollarSign, Heart, CheckCircle, CreditCard, Smartphone } from "lucide-react"

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface DonationFormData {
  donorName: string
  donorEmail: string
  donorPhone: string
  amount: number
  currency: string
  donationType: string
  purpose: string
  paymentMethod: string
  message: string
  isAnonymous: boolean
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<DonationFormData>({
    donorName: "",
    donorEmail: "",
    donorPhone: "",
    amount: 50,
    currency: "USD",
    donationType: "one-time",
    purpose: "general",
    paymentMethod: "card",
    message: "",
    isAnonymous: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/donations/process`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      )

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setStep(1)
          setFormData({
            donorName: "",
            donorEmail: "",
            donorPhone: "",
            amount: 50,
            currency: "USD",
            donationType: "one-time",
            purpose: "general",
            paymentMethod: "card",
            message: "",
            isAnonymous: false,
          })
          onClose()
        }, 3000)
      } else {
        setError(result.message || "Failed to process donation. Please try again.")
      }
    } catch (error) {
      console.error("Donation error:", error)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Step {step} of 3</span>
            <span className="text-sm text-gray-500">
              {step === 1 && "Donation Details"}
              {step === 2 && "Personal Information"}
              {step === 3 && "Payment Method"}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">Your donation has been processed successfully.</p>
              <p className="text-sm text-gray-500">You will receive a confirmation email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {/* Step 1: Donation Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount *</label>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            min="1"
                            max="100000"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="USD">USD</option>
                        <option value="KES">KES</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-3">
                      {[25, 50, 100, 250].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, amount }))}
                          className={`py-2 px-3 rounded-lg font-semibold transition-all duration-300 ${
                            formData.amount === amount
                              ? "bg-purple-500 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Donation Type *</label>
                    <select
                      name="donationType"
                      value={formData.donationType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="one-time">One-time Donation</option>
                      <option value="monthly">Monthly Donation</option>
                      <option value="yearly">Yearly Donation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="general">General Support</option>
                      <option value="education">Education Programs</option>
                      <option value="technology">Technology Access</option>
                      <option value="community">Community Development</option>
                      <option value="emergency">Emergency Relief</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="donorName"
                        value={formData.donorName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="donorEmail"
                        value={formData.donorEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="donorPhone"
                      value={formData.donorPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+254 700 123 456"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Leave a message with your donation..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isAnonymous"
                      checked={formData.isAnonymous}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label className="ml-2 text-sm text-gray-700">Make this donation anonymous</label>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Method */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Select Payment Method *</label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "card", label: "Credit/Debit Card", icon: CreditCard },
                        { value: "paypal", label: "PayPal", icon: DollarSign },
                        { value: "mobile-money", label: "Mobile Money", icon: Smartphone },
                        { value: "bank-transfer", label: "Bank Transfer", icon: DollarSign },
                      ].map((method) => (
                        <button
                          key={method.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: method.value }))}
                          className={`p-4 border-2 rounded-lg transition-all duration-300 ${
                            formData.paymentMethod === method.value
                              ? "border-purple-500 bg-purple-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <method.icon className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                          <span className="text-sm font-medium text-gray-900">{method.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Donation Summary */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Donation Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-semibold">
                          {formData.currency} {formData.amount}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="capitalize">{formData.donationType.replace("-", " ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Purpose:</span>
                        <span className="capitalize">{formData.purpose.replace("-", " ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment:</span>
                        <span className="capitalize">{formData.paymentMethod.replace("-", " ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5 mr-2" />
                        Complete Donation
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default DonationModal
