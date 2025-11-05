'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Calendar, Clock, MapPin, Phone, Instagram, Gift, Music, Users } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function BirthdayInvitation() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 20000)

    return () => clearTimeout(timer)
  }, [])

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4">
      <div className="max-w-md mx-auto">
        {/* Main Invitation Card */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden">
          {/* Header with decorative elements */}
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-center">
            <div className="absolute top-2 left-2 text-yellow-300">
              <Gift className="w-8 h-8 animate-bounce" />
            </div>
            <div className="absolute top-2 right-2 text-yellow-300">
              <Music className="w-8 h-8 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              You're Invited to
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-300">
              Tanmay's Birthday Bash!
            </h2>
            
            <div className="mt-4 flex justify-center gap-2">
              <span className="text-yellow-300">🎉</span>
              <span className="text-white">🎂</span>
              <span className="text-yellow-300">🎈</span>
              <span className="text-white">🎁</span>
              <span className="text-yellow-300">🎊</span>
            </div>
          </div>

          <CardContent className="p-6 space-y-6">
            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800">19th November 2025</p>
                  <p className="text-sm text-gray-600">Wednesday</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                <Clock className="w-5 h-5 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-800">7:00 PM – 10:00 PM</p>
                  <p className="text-sm text-gray-600">Three hours of celebration!</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">REAL URBAN DECK THE RESTRO CAFE</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-orange-600 hover:text-orange-700"
                    onClick={() => window.open('https://maps.app.goo.gl/C9kReNaFDfdoqAYXA', '_blank')}
                  >
                    View on Google Maps →
                  </Button>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-200">
              <div className="flex items-start gap-2 mb-2">
                <Users className="w-5 h-5 text-purple-600 mt-1" />
                <h3 className="font-bold text-gray-800">A Special Message</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                You are warmly invited to an unforgettable evening with good food, great company, music, and memorable moments. Your presence will make the celebration truly special!
              </p>
            </div>

            {/* Organizer Info */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">Tanmay Mishra</p>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-600">+91 9510977943</p>
                </div>
              </div>
              
              <Button
                variant="outline"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:from-purple-600 hover:to-pink-600"
                onClick={() => window.open('https://instagram.com/tanmayisdev', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                onClick={handleConfetti}
              >
                🎉 RSVP Now
              </Button>
              <Button 
                variant="outline"
                className="flex-1 border-purple-300 text-purple-600 hover:bg-purple-50"
                onClick={() => setShowModal(true)}
              >
                📷 Connect on Instagram
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-white/80">
          <p className="text-sm">Made with ❤️ for Tanmay's Special Day</p>
        </div>
      </div>

      {/* Instagram Connect Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Connect with Tanmay on Instagram!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex justify-center">
              <img 
                src="https://z-cdn-media.chatglm.cn/files/5c7c121e-6366-4ddd-8c94-f5e3eec3a51e_Snapchat-473120294%20%282%29.png?auth_key=1762352391-70cd590464ce424eaa7aa8c78b3573d7-0-510c95f9dfb41256d5e04a3700b3a506"
                alt="Tanmay Mishra"
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-200"
              />
            </div>
            <p className="text-center text-gray-600">
              Follow Tanmay for more updates and connect on social media!
            </p>
            <div className="space-y-3">
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => window.open('https://instagram.com/tanmayisdev', '_blank')}
              >
                📷 Follow on Instagram
              </Button>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => setShowModal(false)}
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}