import Image from "next/image"

export default function Services() {
  const skills = [
    { name: "Website Analysis", percentage: 84 },
    { name: "SEO Reports", percentage: 88 },
    { name: "Page Optimizations", percentage: 94 },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Our services"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-bold mb-6">
            Grow your website with our <span className="text-blue-600">SEO</span> service &amp;{" "}
            <span className="text-red-600">Project</span> Ideas
          </h2>
          <p className="text-gray-600 mb-8">
            Space Dynamic Next.js template is free to use for your website projects. However, you are not permitted to
            redistribute the template ZIP file on any CSS template collection websites. Please contact us for more
            information. Thank you for your kind cooperation.
          </p>
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

