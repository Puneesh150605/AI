"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Camera, Upload, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductSelector } from "@/components/product-selector"
import { VirtualTryOn } from "@/components/virtual-try-on"
import { useToast } from "@/components/ui/use-toast"

export default function TryOnPage() {
  const [image, setImage] = useState<string | null>(null)
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [activeCategory, setActiveCategory] = useState("makeup")
  const { toast } = useToast()

  // Get category from URL if present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const category = params.get("category")
    if (category && ["makeup", "clothing", "accessories"].includes(category)) {
      setActiveCategory(category)
    }

    const productId = params.get("product")
    if (productId) {
      setSelectedProducts((prev) => [...prev, productId])
    }
  }, [])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 5MB",
          variant: "destructive",
        })
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
        setProcessedImage(null)
        toast({
          title: "Image uploaded",
          description: "Your photo has been uploaded successfully",
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      // This would typically open a camera view and capture a photo
      // For this example, we'll just use a placeholder
      setImage("/placeholder.svg?height=400&width=400")
      setProcessedImage(null)
      toast({
        title: "Photo captured",
        description: "Your photo has been captured successfully",
      })
    } catch (error) {
      console.error("Error accessing camera:", error)
      toast({
        title: "Camera error",
        description: "Could not access your camera. Please check permissions.",
        variant: "destructive",
      })
    }
  }

  const handleProductSelect = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId))
    } else {
      setSelectedProducts([...selectedProducts, productId])
    }
  }

  const handleTryOn = async () => {
    if (!image || selectedProducts.length === 0) return

    setIsProcessing(true)
    setProcessedImage(null)

    try {
      // In a real implementation, this would be an API call
      // For demo purposes, we'll simulate a delay and then set a processed image
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate different results based on selected products
      if (selectedProducts.some((id) => id.includes("lipstick"))) {
        setProcessedImage("/placeholder.svg?height=400&width=400&text=With+Lipstick")
      } else if (selectedProducts.some((id) => id.includes("foundation"))) {
        setProcessedImage("/placeholder.svg?height=400&width=400&text=With+Foundation")
      } else if (selectedProducts.some((id) => id.includes("dress"))) {
        setProcessedImage("/placeholder.svg?height=400&width=400&text=With+Dress")
      } else {
        setProcessedImage("/placeholder.svg?height=400&width=400&text=Processed")
      }

      toast({
        title: "Try-on complete!",
        description: "Your virtual try-on has been processed successfully",
      })
    } catch (error) {
      console.error("Error processing try-on:", error)
      toast({
        title: "Processing error",
        description: "There was an error processing your try-on request",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-2 text-center"
      >
        Virtual Try-On Experience
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto"
      >
        Upload your photo and select products to see how they look on you before buying
      </motion.p>

      <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="makeup">Makeup</TabsTrigger>
          <TabsTrigger value="clothing">Clothing</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Upload Your Photo</h2>
              <Tabs defaultValue="upload">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="upload">Upload Photo</TabsTrigger>
                  <TabsTrigger value="camera">Take Photo</TabsTrigger>
                </TabsList>
                <TabsContent value="upload" className="space-y-4">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-10 h-10 mb-3 text-gray-400 animate-bounce" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or JPEG (MAX. 5MB)</p>
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                </TabsContent>
                <TabsContent value="camera" className="space-y-4">
                  <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                    <Button onClick={handleCameraCapture} className="flex items-center gap-2 group">
                      <Camera className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      Take Photo
                    </Button>
                    <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                      Make sure your face is well-lit and centered
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              {image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <h3 className="text-lg font-medium mb-2">Your Photo</h3>
                  <div className="relative w-full max-w-md mx-auto aspect-square overflow-hidden rounded-lg">
                    <Image src={image || "/placeholder.svg"} alt="Uploaded photo" fill className="object-cover" />
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>

          <ProductSelector
            onProductSelect={handleProductSelect}
            selectedProducts={selectedProducts}
            category={activeCategory}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              onClick={handleTryOn}
              disabled={!image || selectedProducts.length === 0 || isProcessing}
              className="w-full group"
              size="lg"
            >
              {isProcessing ? (
                <>
                  <Sparkles className="h-5 w-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Try On Selected Products
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <VirtualTryOn
            originalImage={image}
            processedImage={processedImage}
            isProcessing={isProcessing}
            selectedProducts={selectedProducts}
          />
        </motion.div>
      </div>
    </div>
  )
}

