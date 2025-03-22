import Image from "next/image"
import { CheckCircle2, Code, Cpu, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">About BeautyLens</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-center mb-8">
            BeautyLens is a cutting-edge virtual try-on platform that uses advanced AI technology to help users
            visualize makeup products before purchasing.
          </p>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src="p.jpg"
              alt="BeautyLens Technology"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
          <p>
            BeautyLens leverages the powerful L'Oréal Modiface API, which is the industry leader in augmented reality
            beauty technology. This technology uses advanced facial recognition and tracking to accurately apply virtual
            makeup to your photos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="flex items-start gap-4">
              <Cpu className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our system uses deep learning algorithms to analyze facial features and apply makeup with realistic
                  precision.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your photos are processed securely and never stored without your explicit permission.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get realistic previews that accurately represent how products will look on your skin tone and
                  features.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Code className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our technology is constantly learning and improving to provide even better results.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">How We're Different</h2>
          <p>
            Unlike other virtual try-on solutions, BeautyLens focuses on providing the most realistic and accurate
            representation of how makeup products will actually look on your skin. Our technology takes into account
            lighting conditions, skin tone, and facial features to deliver results that truly help you make informed
            purchasing decisions.
          </p>

          <h2 className="text-2xl font-bold my-4">Our Mission</h2>
          <p>
            At BeautyLens, we believe that shopping for beauty products should be fun, easy, and risk-free. Our mission
            is to eliminate the uncertainty of online makeup shopping by giving you the confidence to try new products
            and express yourself through beauty.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Facial recognition with 68-point mapping</li>
              <li>Real-time color adjustment based on skin tone</li>
              <li>Support for various lighting conditions</li>
              <li>Texture simulation for different product finishes (matte, glossy, etc.)</li>
              <li>Integration with L'Oréal Modiface API</li>
              <li>GDPR and CCPA compliant data handling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

