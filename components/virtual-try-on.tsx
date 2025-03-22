"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Download, Share2, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface VirtualTryOnProps {
  originalImage: string | null
  processedImage: string | null
  isProcessing: boolean
  selectedProducts: string[]
}

export function VirtualTryOn({ originalImage, processedImage, isProcessing, selectedProducts }: VirtualTryOnProps) {
  const [beforeAfterMode, setBeforeAfterMode] = useState(false)
  const [currentView, setCurrentView] = useState<"before" | "after">("after")

  // Simulate processed image for demo purposes
  const [simulatedImage, setSimulatedImage] = useState<string | null>(null)

  useEffect(() => {
    if (originalImage && selectedProducts.length > 0 && !processedImage && !isProcessing) {
      // This is just for demonstration - in a real app, this would come from the API
      setSimulatedImage(null)
    } else if (processedImage) {
      setSimulatedImage(processedImage)
    }
  }, [originalImage, selectedProducts, processedImage, isProcessing])

  const handleDownload = () => {
    if (simulatedImage || processedImage) {
      const link = document.createElement("a")
      link.href = simulatedImage || processedImage || ""
      link.download = "virtual-try-on.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleShare = () => {
    if (navigator.share && (simulatedImage || processedImage)) {
      navigator
        .share({
          title: "My Virtual Try-On",
          text: "Check out my virtual makeup try-on!",
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing:", error))
    } else {
      alert("Sharing is not supported on this browser")
    }
  }

  const toggleBeforeAfter = () => {
    setBeforeAfterMode(!beforeAfterMode)
  }

  const toggleView = () => {
    setCurrentView(currentView === "before" ? "after" : "before")
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Virtual Try-On Result</span>
          {(simulatedImage || processedImage) && originalImage && (
            <Button variant="outline" size="sm" onClick={toggleBeforeAfter}>
              {beforeAfterMode ? "Normal View" : "Before/After View"}
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center">
        {!originalImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-8"
          >
            <p className="text-muted-foreground">Upload a photo and select products to see how they look on you</p>
          </motion.div>
        ) : isProcessing ? (
          <div className="space-y-4 w-full">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden">
              <Skeleton className="absolute inset-0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <RefreshCw className="h-12 w-12 text-primary/50 animate-spin" />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p>Processing your image...</p>
              <p className="text-sm text-muted-foreground mt-2">
                Our AI is applying the selected products to your photo
              </p>
            </motion.div>
          </div>
        ) : simulatedImage || processedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {beforeAfterMode ? (
              <div className="relative w-full max-w-md mx-auto aspect-square overflow-hidden rounded-lg">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={
                      currentView === "before" ? originalImage : simulatedImage || processedImage || "/placeholder.svg"
                    }
                    alt={currentView === "before" ? "Original photo" : "Virtual try-on result"}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 bg-black/50 text-white p-2 text-center">
                  <Button variant="ghost" className="text-white" onClick={toggleView}>
                    {currentView === "before" ? "Before (Click to see After)" : "After (Click to see Before)"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="relative w-full max-w-md mx-auto aspect-square overflow-hidden rounded-lg">
                <Image
                  src={simulatedImage || processedImage || "/placeholder.svg"}
                  alt="Virtual try-on result"
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-center"
            >
              <p className="text-sm text-muted-foreground">Here's how you look with the selected products!</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-8"
          >
            <p className="text-muted-foreground">Click "Try On Selected Products" to see the result</p>
          </motion.div>
        )}
      </CardContent>
      {(simulatedImage || processedImage) && (
        <CardFooter className="flex justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-4"
          >
            <Button variant="outline" onClick={handleDownload} className="group">
              <Download className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Download
            </Button>
            <Button variant="outline" onClick={handleShare} className="group">
              <Share2 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Share
            </Button>
          </motion.div>
        </CardFooter>
      )}
    </Card>
  )
}

