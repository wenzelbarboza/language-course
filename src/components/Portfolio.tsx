import Image from "next/image"

export default function Portfolio() {
  const portfolioItems = [
    { title: "SEO Analysis", description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto." },
    { title: "Website Reporting", description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto." },
    { title: "Performance Tests", description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto." },
    { title: "Data Analysis", description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto." },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          See What Our Agency <span className="text-blue-600">Offers</span> &amp; What We{" "}
          <span className="text-red-600">Provide</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

