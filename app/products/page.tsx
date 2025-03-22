"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Heart, Star, Filter, Search, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Expanded product list
const products = [
  // Lipsticks
  {
    id: "lipstick-1",
    name: "Velvet Matte Lipstick",
    category: "lipstick",
    subcategory: "matte",
    description: "Long-lasting matte finish with hydrating formula",
    price: "$24.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#B83280", "#9B2C2C", "#742A2A", "#E53E3E"],
    brand: "Luxe Beauty",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "lipstick-2",
    name: "Satin Finish Lipstick",
    category: "lipstick",
    subcategory: "satin",
    description: "Creamy satin finish with vitamin E",
    price: "$22.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#F56565", "#ED8936", "#D53F8C", "#805AD5"],
    brand: "Glow Cosmetics",
    rating: 4.2,
    reviews: 96,
  },
  {
    id: "lipstick-3",
    name: "Hydrating Lip Gloss",
    category: "lipstick",
    subcategory: "gloss",
    description: "Shiny, non-sticky formula with aloe vera",
    price: "$18.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#FC8181", "#F6AD55", "#F687B3", "#B794F4"],
    brand: "Luxe Beauty",
    rating: 4.3,
    reviews: 75,
  },
  {
    id: "lipstick-4",
    name: "Long-wear Liquid Lipstick",
    category: "lipstick",
    subcategory: "liquid",
    description: "Transfer-proof formula that lasts all day",
    price: "$26.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#E53E3E", "#DD6B20", "#D53F8C", "#6B46C1"],
    brand: "Elegance",
    rating: 4.7,
    reviews: 142,
  },

  // Foundations
  {
    id: "foundation-1",
    name: "Skin Perfecting Foundation",
    category: "foundation",
    subcategory: "liquid",
    description: "Medium to full coverage with SPF 25",
    price: "$38.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#F6E5D3", "#E6CCB5", "#D7B79E", "#C19A78", "#A67C52", "#8D5B2D", "#73461A"],
    brand: "Glow Cosmetics",
    rating: 4.6,
    reviews: 215,
  },
  {
    id: "foundation-2",
    name: "Dewy Finish Foundation",
    category: "foundation",
    subcategory: "dewy",
    description: "Lightweight formula for a natural glow",
    price: "$34.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#FEEBC8", "#ECC094", "#D4A276", "#B08968", "#8D6346", "#6F4E37", "#513A2A"],
    brand: "Luxe Beauty",
    rating: 4.4,
    reviews: 183,
  },
  {
    id: "foundation-3",
    name: "Matte Coverage Foundation",
    category: "foundation",
    subcategory: "matte",
    description: "Oil-controlling formula for a flawless finish",
    price: "$36.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#FFF5EB", "#ECD8C6", "#D4B499", "#B28B6B", "#8C6D4F", "#6B5039", "#4A3828"],
    brand: "Elegance",
    rating: 4.5,
    reviews: 167,
  },
  {
    id: "foundation-4",
    name: "Mineral Powder Foundation",
    category: "foundation",
    subcategory: "powder",
    description: "Buildable coverage with natural minerals",
    price: "$32.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#FFEFE0", "#ECD5BA", "#D3B795", "#B39474", "#8F7555", "#6D573D", "#4E3C2A"],
    brand: "Natural Glow",
    rating: 4.3,
    reviews: 124,
  },

  // Eyeshadows
  {
    id: "eyeshadow-1",
    name: "Shimmer Eyeshadow Palette",
    category: "eyeshadow",
    subcategory: "shimmer",
    description: "12 highly pigmented shimmer shades",
    price: "$45.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#FEB2B2", "#FBD38D", "#9AE6B4", "#90CDF4", "#D6BCFA"],
    brand: "Glow Cosmetics",
    rating: 4.8,
    reviews: 256,
  },
  {
    id: "eyeshadow-2",
    name: "Matte Eyeshadow Palette",
    category: "eyeshadow",
    subcategory: "matte",
    description: "9 blendable matte shades for everyday looks",
    price: "$39.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#FC8181", "#F6AD55", "#68D391", "#63B3ED", "#B794F4"],
    brand: "Luxe Beauty",
    rating: 4.6,
    reviews: 198,
  },

  // Blush
  {
    id: "blush-1",
    name: "Powder Blush",
    category: "blush",
    subcategory: "powder",
    description: "Silky smooth powder for a natural flush",
    price: "$28.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#FEB2B2", "#FED7D7", "#FC8181", "#F56565"],
    brand: "Glow Cosmetics",
    rating: 4.4,
    reviews: 112,
  },
  {
    id: "blush-2",
    name: "Cream Blush",
    category: "blush",
    subcategory: "cream",
    description: "Dewy finish cream blush for a youthful glow",
    price: "$26.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#FBB6CE", "#F687B3", "#ED64A6", "#D53F8C"],
    brand: "Luxe Beauty",
    rating: 4.5,
    reviews: 87,
  },

  // Mascara
  {
    id: "mascara-1",
    name: "Volumizing Mascara",
    category: "mascara",
    subcategory: "volumizing",
    description: "Adds dramatic volume without clumping",
    price: "$22.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000"],
    brand: "Glow Cosmetics",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: "mascara-2",
    name: "Lengthening Mascara",
    category: "mascara",
    subcategory: "lengthening",
    description: "Extends lashes for a dramatic look",
    price: "$21.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#4A5568"],
    brand: "Luxe Beauty",
    rating: 4.6,
    reviews: 178,
  },

  // Eyeliner
  {
    id: "eyeliner-1",
    name: "Liquid Eyeliner",
    category: "eyeliner",
    subcategory: "liquid",
    description: "Precise applicator for perfect wings",
    price: "$19.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#4A5568", "#2D3748"],
    brand: "Glow Cosmetics",
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "eyeliner-2",
    name: "Gel Eyeliner",
    category: "eyeliner",
    subcategory: "gel",
    description: "Smudge-proof formula that glides on smoothly",
    price: "$18.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#1A202C", "#2C5282"],
    brand: "Luxe Beauty",
    rating: 4.4,
    reviews: 132,
  },

  // Clothes
  {
    id: "dress-1",
    name: "Summer Dress",
    category: "clothing",
    subcategory: "dresses",
    description: "Light and flowy dress for summer days",
    price: "$59.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#FED7E2", "#FED7D7", "#FEFCBF", "#C6F6D5"],
    brand: "Summer Vibes",
    rating: 4.3,
    reviews: 89,
  },
  {
    id: "top-1",
    name: "Classic T-Shirt",
    category: "clothing",
    subcategory: "tops",
    description: "Soft cotton tee for everyday wear",
    price: "$24.99",
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#FFFFFF", "#000000", "#E53E3E", "#3182CE"],
    brand: "Urban Style",
    rating: 4.2,
    reviews: 76,
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter products based on active category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Sort products based on sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return Number.parseFloat(a.price.replace("$", "")) - Number.parseFloat(b.price.replace("$", ""))
      case "price-high":
        return Number.parseFloat(b.price.replace("$", "")) - Number.parseFloat(a.price.replace("$", ""))
      case "rating":
        return b.rating - a.rating
      case "reviews":
        return b.reviews - a.reviews
      default:
        return 0 // featured - no specific sort
    }
  })

  // Group products by subcategory for the featured section
  const featuredSubcategories = Array.from(new Set(products.map((p) => p.subcategory))).slice(0, 3)

  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-2 text-center">Browse Products</h1>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore our wide range of products and try them on virtually before you buy
        </p>
      </motion.div>

      {/* Featured Products Section */}
      {activeCategory === "all" && !searchQuery && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSubcategories.map((subcategory) => {
              const featuredProduct = products.find((p) => p.subcategory === subcategory)
              if (!featuredProduct) return null

              return (
                <motion.div
                  key={subcategory}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={featuredProduct.image || "/placeholder.svg"}
                      alt={featuredProduct.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold mb-1 capitalize">{subcategory}s</h3>
                      <p className="text-sm opacity-90">Explore our collection</p>
                    </div>
                  </div>
                  <Link
                    href={`/products?category=${featuredProduct.category}`}
                    className="absolute inset-0"
                    aria-label={`View ${subcategory} products`}
                  />
                </motion.div>
              )
            })}
          </div>
        </section>
      )}

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-4">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <Button
                    variant={activeCategory === "all" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory("all")}
                  >
                    All Products
                  </Button>
                  <Button
                    variant={activeCategory === "lipstick" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory("lipstick")}
                  >
                    Lipstick
                  </Button>
                  <Button
                    variant={activeCategory === "foundation" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory("foundation")}
                  >
                    Foundation
                  </Button>
                  <Button
                    variant={activeCategory === "eyeshadow" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory("eyeshadow")}
                  >
                    Eyeshadow
                  </Button>
                  <Button
                    variant={activeCategory === "blush" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory("blush")}
                  >
                    Blush
                  </Button>
                  <Button
                    variant={activeCategory === "mascara" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory("mascara")}
                  >
                    Mascara
                  </Button>
                  <Button
                    variant={activeCategory === "eyeliner" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory("eyeliner")}
                  >
                    Eyeliner
                  </Button>
                  <Button
                    variant={activeCategory === "clothing" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory("clothing")}
                  >
                    Clothing
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Filter By</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Price Range</h3>
                    <div className="space-y-1">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Under $25
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        $25 - $50
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        $50 - $100
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Over $100
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Brand</h3>
                    <div className="space-y-1">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Luxe Beauty
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Glow Cosmetics
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Elegance
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Natural Glow
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Rating</h3>
                    <div className="space-y-1">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-primary" />
                          <span className="ml-2">& Up</span>
                        </div>
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-muted stroke-muted-foreground" />
                          <span className="ml-2">& Up</span>
                        </div>
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-primary mr-1" />
                          <Star className="h-4 w-4 fill-muted stroke-muted-foreground mr-1" />
                          <Star className="h-4 w-4 fill-muted stroke-muted-foreground" />
                          <span className="ml-2">& Up</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Filter className="h-4 w-4 mr-2" />
                    Sort By
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                    <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="price-low">Price: Low to High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="price-high">Price: High to Low</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="rating">Highest Rated</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="reviews">Most Reviewed</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}

          {sortedProducts.length > 0 && (
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface Product {
  id: string
  name: string
  category: string
  subcategory: string
  description: string
  price: string
  image: string
  colors: string[]
  brand: string
  rating: number
  reviews: number
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
        />
      ))
  }

  return (
    <Card
      className="overflow-hidden h-full flex flex-col group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-white/80 hover:bg-white/90 dark:bg-gray-900/80 dark:hover:bg-gray-900/90 rounded-full ${isFavorite ? "text-red-500" : "text-gray-500"}`}
          onClick={(e) => {
            e.preventDefault()
            setIsFavorite(!isFavorite)
          }}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
        </Button>

        <div
          className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent transform transition-transform ${isHovered ? "translate-y-0" : "translate-y-full"}`}
        >
          <Button className="w-full" asChild>
            <Link href={`/try-on?product=${product.id}`}>Try On</Link>
          </Button>
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base">{product.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
          </div>
          <Badge variant="outline" className="capitalize">
            {product.subcategory}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">{product.description}</p>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>
        {product.colors.length > 0 && (
          <div className="flex gap-1 mt-2">
            {product.colors.map((color, index) => (
              <motion.div
                key={index}
                className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer"
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <div className="flex justify-between items-center w-full">
          <span className="font-bold">{product.price}</span>
          <Button size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

