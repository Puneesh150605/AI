"use client"

import { Key, useState } from "react"
import Image from "next/image"
import { Check, Search, Filter } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

interface ProductSelectorProps {
  onProductSelect: (productId: string) => void
  selectedProducts: string[]
  category: string
}

// Expanded product list
const makeupProducts = [
  // Lipsticks
  {
    id: "lipstick-1",
    name: "Velvet Matte Lipstick",
    category: "lipstick",
    subcategory: "matte",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#B83280", "#9B2C2C", "#742A2A", "#E53E3E"],
    brand: "Luxe Beauty",
  },
  {
    id: "lipstick-2",
    name: "Satin Finish Lipstick",
    category: "lipstick",
    subcategory: "satin",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#F56565", "#ED8936", "#D53F8C", "#805AD5"],
    brand: "Glow Cosmetics",
  },
  {
    id: "lipstick-3",
    name: "Hydrating Lip Gloss",
    category: "lipstick",
    subcategory: "gloss",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FC8181", "#F6AD55", "#F687B3", "#B794F4"],
    brand: "Luxe Beauty",
  },
  {
    id: "lipstick-4",
    name: "Long-wear Liquid Lipstick",
    category: "lipstick",
    subcategory: "liquid",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#E53E3E", "#DD6B20", "#D53F8C", "#6B46C1"],
    brand: "Elegance",
  },

  // Foundations
  {
    id: "foundation-1",
    name: "Skin Perfecting Foundation",
    category: "foundation",
    subcategory: "liquid",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#F6E5D3", "#E6CCB5", "#D7B79E", "#C19A78", "#A67C52", "#8D5B2D", "#73461A"],
    brand: "Glow Cosmetics",
  },
  {
    id: "foundation-2",
    name: "Dewy Finish Foundation",
    category: "foundation",
    subcategory: "dewy",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FEEBC8", "#ECC094", "#D4A276", "#B08968", "#8D6346", "#6F4E37", "#513A2A"],
    brand: "Luxe Beauty",
  },
  {
    id: "foundation-3",
    name: "Matte Coverage Foundation",
    category: "foundation",
    subcategory: "matte",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FFF5EB", "#ECD8C6", "#D4B499", "#B28B6B", "#8C6D4F", "#6B5039", "#4A3828"],
    brand: "Elegance",
  },
  {
    id: "foundation-4",
    name: "Mineral Powder Foundation",
    category: "foundation",
    subcategory: "powder",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FFEFE0", "#ECD5BA", "#D3B795", "#B39474", "#8F7555", "#6D573D", "#4E3C2A"],
    brand: "Natural Glow",
  },

  // Eyeshadows
  {
    id: "eyeshadow-1",
    name: "Shimmer Eyeshadow Palette",
    category: "eyeshadow",
    subcategory: "shimmer",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FEB2B2", "#FBD38D", "#9AE6B4", "#90CDF4", "#D6BCFA"],
    brand: "Glow Cosmetics",
  },
  {
    id: "eyeshadow-2",
    name: "Matte Eyeshadow Palette",
    category: "eyeshadow",
    subcategory: "matte",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FC8181", "#F6AD55", "#68D391", "#63B3ED", "#B794F4"],
    brand: "Luxe Beauty",
  },
  {
    id: "eyeshadow-3",
    name: "Metallic Eyeshadow Singles",
    category: "eyeshadow",
    subcategory: "metallic",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#F56565", "#ED8936", "#48BB78", "#4299E1", "#9F7AEA"],
    brand: "Elegance",
  },
  {
    id: "eyeshadow-4",
    name: "Cream Eyeshadow Sticks",
    category: "eyeshadow",
    subcategory: "cream",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#E53E3E", "#DD6B20", "#38A169", "#3182CE", "#805AD5"],
    brand: "Natural Glow",
  },

  // Blush
  {
    id: "blush-1",
    name: "Powder Blush",
    category: "blush",
    subcategory: "powder",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FEB2B2", "#FED7D7", "#FC8181", "#F56565"],
    brand: "Glow Cosmetics",
  },
  {
    id: "blush-2",
    name: "Cream Blush",
    category: "blush",
    subcategory: "cream",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FBB6CE", "#F687B3", "#ED64A6", "#D53F8C"],
    brand: "Luxe Beauty",
  },
  {
    id: "blush-3",
    name: "Liquid Cheek Tint",
    category: "blush",
    subcategory: "liquid",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FEB2B2", "#FC8181", "#F56565", "#E53E3E"],
    brand: "Elegance",
  },

  // Mascara
  {
    id: "mascara-1",
    name: "Volumizing Mascara",
    category: "mascara",
    subcategory: "volumizing",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000"],
    brand: "Glow Cosmetics",
  },
  {
    id: "mascara-2",
    name: "Lengthening Mascara",
    category: "mascara",
    subcategory: "lengthening",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000", "#4A5568"],
    brand: "Luxe Beauty",
  },
  {
    id: "mascara-3",
    name: "Waterproof Mascara",
    category: "mascara",
    subcategory: "waterproof",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000", "#1A202C"],
    brand: "Elegance",
  },

  // Eyeliner
  {
    id: "eyeliner-1",
    name: "Liquid Eyeliner",
    category: "eyeliner",
    subcategory: "liquid",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000", "#4A5568", "#2D3748"],
    brand: "Glow Cosmetics",
  },
  {
    id: "eyeliner-2",
    name: "Gel Eyeliner",
    category: "eyeliner",
    subcategory: "gel",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000", "#1A202C", "#2C5282"],
    brand: "Luxe Beauty",
  },
  {
    id: "eyeliner-3",
    name: "Pencil Eyeliner",
    category: "eyeliner",
    subcategory: "pencil",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000", "#4A5568", "#6B46C1"],
    brand: "Elegance",
  },
]

const clothingProducts = [
  // Tops
  {
    id: "top-1",
    name: "Classic T-Shirt",
    category: "tops",
    subcategory: "t-shirts",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FFFFFF", "#000000", "#E53E3E", "#3182CE"],
    brand: "Urban Style",
  },
  {
    id: "top-2",
    name: "Button-Up Shirt",
    category: "tops",
    subcategory: "shirts",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FFFFFF", "#E2E8F0", "#A0AEC0", "#2D3748"],
    brand: "Classic Apparel",
  },
  {
    id: "top-3",
    name: "Blouse",
    category: "tops",
    subcategory: "blouses",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FFFFFF", "#FED7E2", "#90CDF4", "#E9D8FD"],
    brand: "Elegance",
  },
  {
    id: "top-4",
    name: "Sweater",
    category: "tops",
    subcategory: "sweaters",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#F7FAFC", "#E53E3E", "#2B6CB0", "#4A5568"],
    brand: "Cozy Collection",
  },

  // Dresses
  {
    id: "dress-1",
    name: "Summer Dress",
    category: "dresses",
    subcategory: "casual",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#FED7E2", "#FED7D7", "#FEFCBF", "#C6F6D5"],
    brand: "Summer Vibes",
  },
  {
    id: "dress-2",
    name: "Evening Gown",
    category: "dresses",
    subcategory: "formal",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000", "#742A2A", "#2A4365", "#1A365D"],
    brand: "Elegance",
  },
  {
    id: "dress-3",
    name: "Cocktail Dress",
    category: "dresses",
    subcategory: "semi-formal",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000", "#9B2C2C", "#2C5282", "#702459"],
    brand: "Urban Style",
  },

  // Bottoms
  {
    id: "bottom-1",
    name: "Jeans",
    category: "bottoms",
    subcategory: "jeans",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#2B6CB0", "#2D3748", "#1A202C"],
    brand: "Denim Co.",
  },
  {
    id: "bottom-2",
    name: "Skirt",
    category: "bottoms",
    subcategory: "skirts",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000", "#718096", "#F56565", "#4299E1"],
    brand: "Urban Style",
  },
  {
    id: "bottom-3",
    name: "Trousers",
    category: "bottoms",
    subcategory: "pants",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#1A202C", "#4A5568", "#A0AEC0"],
    brand: "Classic Apparel",
  },
]

const accessoriesProducts = [
  // Jewelry
  {
    id: "jewelry-1",
    name: "Necklace",
    category: "jewelry",
    subcategory: "necklaces",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#D69E2E", "#718096", "#E2E8F0"],
    brand: "Glimmer",
  },
  {
    id: "jewelry-2",
    name: "Earrings",
    category: "jewelry",
    subcategory: "earrings",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#D69E2E", "#718096", "#E2E8F0"],
    brand: "Elegance",
  },
  {
    id: "jewelry-3",
    name: "Bracelet",
    category: "jewelry",
    subcategory: "bracelets",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#D69E2E", "#718096", "#E2E8F0"],
    brand: "Glimmer",
  },

  // Bags
  {
    id: "bag-1",
    name: "Handbag",
    category: "bags",
    subcategory: "handbags",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000", "#A0AEC0", "#9B2C2C", "#2A4365"],
    brand: "Luxe Accessories",
  },
  {
    id: "bag-2",
    name: "Clutch",
    category: "bags",
    subcategory: "clutches",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#000000", "#718096", "#9B2C2C", "#2A4365"],
    brand: "Elegance",
  },

  // Hats
  {
    id: "hat-1",
    name: "Sun Hat",
    category: "hats",
    subcategory: "summer",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#F7FAFC", "#ECC94B", "#F56565"],
    brand: "Summer Vibes",
  },
  {
    id: "hat-2",
    name: "Beanie",
    category: "hats",
    subcategory: "winter",
    image: "/placeholder.svg?height=100&width=100",
    colors: ["#1A202C", "#4A5568", "#E53E3E", "#2B6CB0"],
    brand: "Cozy Collection",
  },
]

export function ProductSelector({ onProductSelect, selectedProducts, category }: ProductSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSubcategory, setActiveSubcategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  let products: any[] = []
  let subcategories: { [key: string]: string } = {}

  if (category === "makeup") {
    products = makeupProducts
    subcategories = {
      all: "All Makeup",
      lipstick: "Lipstick",
      foundation: "Foundation",
      eyeshadow: "Eyeshadow",
      blush: "Blush",
      mascara: "Mascara",
      eyeliner: "Eyeliner",
    }
  } else if (category === "clothing") {
    products = clothingProducts
    subcategories = {
      all: "All Clothing",
      tops: "Tops",
      dresses: "Dresses",
      bottoms: "Bottoms",
    }
  } else if (category === "accessories") {
    products = accessoriesProducts
    subcategories = {
      all: "All Accessories",
      jewelry: "Jewelry",
      bags: "Bags",
      hats: "Hats",
    }
  }

  // Filter products by subcategory and search query
  const filteredProducts = products.filter((product) => {
    const matchesSubcategory = activeSubcategory === "all" || product.category === activeSubcategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSubcategory && matchesSearch
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    } else if (sortBy === "brand") {
      return a.brand.localeCompare(b.brand)
    }
    return 0
  })

  const subcategoryTabs = Object.entries(subcategories).map(([key, label]) => (
    <TabsTrigger key={key} value={key}>
      {label}
    </TabsTrigger>
  ))

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Select Products to Try On</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="brand">Brand</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" value={activeSubcategory} onValueChange={setActiveSubcategory} className="mb-4">
          <TabsList className="w-full flex flex-wrap h-auto">{subcategoryTabs}</TabsList>
        </Tabs>

        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No products found. Try adjusting your filters.
              </div>
            ) : (
              sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    selectedProducts.includes(product.id)
                      ? "bg-primary/10 border border-primary"
                      : "bg-background hover:bg-muted/50 border"
                  }`}
                  onClick={() => onProductSelect(product.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative w-16 h-16 rounded overflow-hidden">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{product.name}</h3>
                      <Badge variant="outline" className="ml-2">
                        {product.subcategory}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                    {product.colors.length > 0 && (
                      <div className="flex gap-1 mt-1">
                        {product.colors.map((color: any, index: Key | null | undefined) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-gray-300 transition-transform hover:scale-125"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  {selectedProducts.includes(product.id) && <Check className="h-5 w-5 text-primary ml-2" />}
                </motion.div>
              ))
            )}
          </div>
        </ScrollArea>

        {selectedProducts.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm font-medium">Selected Products: {selectedProducts.length}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedProducts.map((id) => {
                const product = products.find((p) => p.id === id)
                return product ? (
                  <Badge
                    key={id}
                    variant="secondary"
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => onProductSelect(id)}
                  >
                    {product.name}
                    <span className="ml-1 text-xs">×</span>
                  </Badge>
                ) : null
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

