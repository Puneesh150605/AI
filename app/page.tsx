"use client"

import { Input } from "@/components/ui/input"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Camera, Sparkles, Star, Users, Check, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 bg-background z-50">
        <Link className="flex items-center justify-center" href="/">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">BeautyLens</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/try-on">
            Try On
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/products">
            Products
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                    Virtual Try-On Experience
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                  >
                    See how makeup products look on you before you buy. Our advanced AI technology provides a realistic
                    virtual try-on experience.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <Link href="/try-on">
                    <Button size="lg" className="gap-1.5 group">
                      Try Now
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button size="lg" variant="outline">
                      Browse Products
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="flex items-center justify-center"
              >
                <div className="relative w-full max-w-[400px] aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="p.jpg"
                    alt="Virtual Try-On Demo"
                    width={800}
                    height={800}
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  How It Works
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Try Before You Buy</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our virtual try-on technology uses advanced AI to show you how makeup products will look on your face.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Upload Your Photo</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Take a selfie or upload a photo to see how products will look on you.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Select Products</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Browse our catalog and choose the makeup products you want to try.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">See the Results</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Get an instant preview of how the products look on you with our AI technology.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Featured Categories
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore Our Products</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover our wide range of products that you can try on virtually
                </p>
              </div>
            </div>

            <Tabs defaultValue="makeup" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="makeup">Makeup</TabsTrigger>
                <TabsTrigger value="clothing">Clothing</TabsTrigger>
                <TabsTrigger value="accessories">Accessories</TabsTrigger>
              </TabsList>

              <TabsContent value="makeup" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="k.jpg"
                        alt="Lipstick"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">Lipstick</h3>
                        <p className="text-sm opacity-90">12 products</p>
                      </div>
                    </div>
                    <Link
                      href="/products?category=lipstick"
                      className="absolute inset-0"
                      aria-label="View lipstick products"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Foundation"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">Foundation</h3>
                        <p className="text-sm opacity-90">8 products</p>
                      </div>
                    </div>
                    <Link
                      href="/products?category=foundation"
                      className="absolute inset-0"
                      aria-label="View foundation products"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Eyeshadow"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">Eyeshadow</h3>
                        <p className="text-sm opacity-90">10 products</p>
                      </div>
                    </div>
                    <Link
                      href="/products?category=eyeshadow"
                      className="absolute inset-0"
                      aria-label="View eyeshadow products"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Mascara"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">Mascara</h3>
                        <p className="text-sm opacity-90">6 products</p>
                      </div>
                    </div>
                    <Link
                      href="/products?category=mascara"
                      className="absolute inset-0"
                      aria-label="View mascara products"
                    />
                  </motion.div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button asChild>
                    <Link href="/products" className="group">
                      View All Makeup Products
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="clothing" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Tops"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">Tops</h3>
                        <p className="text-sm opacity-90">8 products</p>
                      </div>
                    </div>
                    <Link
                      href="/products?category=clothing"
                      className="absolute inset-0"
                      aria-label="View tops products"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Dresses"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">Dresses</h3>
                        <p className="text-sm opacity-90">6 products</p>
                      </div>
                    </div>
                    <Link
                      href="/products?category=clothing"
                      className="absolute inset-0"
                      aria-label="View dresses products"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Bottoms"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">Bottoms</h3>
                        <p className="text-sm opacity-90">5 products</p>
                      </div>
                    </div>
                    <Link
                      href="/products?category=clothing"
                      className="absolute inset-0"
                      aria-label="View bottoms products"
                    />
                  </motion.div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button asChild>
                    <Link href="/products?category=clothing" className="group">
                      View All Clothing Products
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="accessories" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Jewelry"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">Jewelry</h3>
                        <p className="text-sm opacity-90">12 products</p>
                      </div>
                    </div>
                    <Link
                      href="/products?category=accessories"
                      className="absolute inset-0"
                      aria-label="View jewelry products"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Bags"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">Bags</h3>
                        <p className="text-sm opacity-90">8 products</p>
                      </div>
                    </div>
                    <Link
                      href="/products?category=accessories"
                      className="absolute inset-0"
                      aria-label="View bags products"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Hats"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">Hats</h3>
                        <p className="text-sm opacity-90">5 products</p>
                      </div>
                    </div>
                    <Link
                      href="/products?category=accessories"
                      className="absolute inset-0"
                      aria-label="View hats products"
                    />
                  </motion.div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button asChild>
                    <Link href="/products?category=accessories" className="group">
                      View All Accessories
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  AI Technology
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Powered by Advanced AI</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our virtual try-on technology uses state-of-the-art artificial intelligence to provide realistic
                  results
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold">How Our AI Works</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  BeautyLens uses the L'Oréal Modiface API, which leverages deep learning to analyze facial features and
                  apply virtual makeup with incredible precision.
                </p>

                <ul className="space-y-2 mt-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Facial recognition with 68-point mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Real-time color adjustment based on skin tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Support for various lighting conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Texture simulation for different product finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Privacy-focused processing that respects your data</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <Button asChild>
                    <Link href="/about">Learn More About Our Technology</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative aspect-video rounded-xl overflow-hidden"
              >
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="AI Technology Visualization"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Testimonials
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See what our users are saying about their virtual try-on experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Beauty Enthusiast</p>
                  </div>
                </div>
                <div className="flex">
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "This virtual try-on tool saved me so much time and money. I could see exactly how the lipstick would
                  look on me before purchasing!"
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Michael Chen</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">First-time User</p>
                  </div>
                </div>
                <div className="flex">
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-muted stroke-muted-foreground" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "I was skeptical at first, but the results were incredibly realistic. The app helped me find the
                  perfect foundation shade."
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Priya Patel</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Makeup Artist</p>
                  </div>
                </div>
                <div className="flex">
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                  <Star className="h-5 w-5 fill-primary" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "As a professional makeup artist, I recommend this tool to all my clients. It helps them visualize
                  different looks before committing."
                </p>
              </motion.div>
            </div>

            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                View More Testimonials
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Get Started
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Try It Yourself?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience the future of beauty shopping with our virtual try-on technology
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="flex flex-col items-center text-center p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="w-full"
                >
                  <div className="rounded-full bg-primary/10 p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-10 w-10 text-primary" />
                  </div>
                  <CardContent className="space-y-2 p-0">
                    <h3 className="text-xl font-bold">Try On Makeup</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Experiment with different makeup products to find your perfect look
                    </p>
                    <Button asChild className="mt-4 w-full">
                      <Link href="/try-on?category=makeup">Try Makeup</Link>
                    </Button>
                  </CardContent>
                </motion.div>
              </Card>

              <Card className="flex flex-col items-center text-center p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="w-full"
                >
                  <div className="rounded-full bg-primary/10 p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-10 w-10 text-primary" />
                  </div>
                  <CardContent className="space-y-2 p-0">
                    <h3 className="text-xl font-bold">Try On Clothing</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      See how different clothing items look on you before purchasing
                    </p>
                    <Button asChild className="mt-4 w-full">
                      <Link href="/try-on?category=clothing">Try Clothing</Link>
                    </Button>
                  </CardContent>
                </motion.div>
              </Card>

              <Card className="flex flex-col items-center text-center p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="w-full"
                >
                  <div className="rounded-full bg-primary/10 p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-10 w-10 text-primary" />
                  </div>
                  <CardContent className="space-y-2 p-0">
                    <h3 className="text-xl font-bold">Try On Accessories</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Complete your look with virtual accessories try-on
                    </p>
                    <Button asChild className="mt-4 w-full">
                      <Link href="/try-on?category=accessories">Try Accessories</Link>
                    </Button>
                  </CardContent>
                </motion.div>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
                <p className="text-primary-foreground/90 max-w-[600px]">
                  Stay updated with the latest products, features, and special offers
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Enter your email" type="email" className="bg-primary-foreground text-primary" />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 BeautyLens. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Cookies
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

