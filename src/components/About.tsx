import Image from "next/image";

export default function About() {
  const services = [
    {
      title: "Learn & Connect",
      description:
        "Language opens doors to new cultures. Start your journey today!",
      icon: "/globe.svg?height=50&width=50",
    },
    {
      title: "Fun & Easy Learning",
      description:
        "Interactive lessons make language learning simple and enjoyable",
      icon: "/book.svg?height=50&width=50",
    },
    {
      title: "Practice with Others",
      description:
        "Join a global community and improve with real conversations.",
      icon: "/handshake.svg?height=50&width=50",
    },
    {
      title: "Start Now",
      description: "Begin your language adventure and reach fluency faster!",
      icon: "/rocket.svg?height=45&width=45",
    },
  ];

  return (
    // <section id="about" className="about-section relative py-20 ">
    <section id="about" className="lg:about-section relative  ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-2 sm:px-0">
        <div className="lg:w-1/3 mb-10 lg:mb-0 ">
          <Image
            src="/about-img.png?height=500&width=400"
            alt="About us"
            width={400}
            height={500}
          />
        </div>
        <div className="lg:w-2/3 lg:pl-12">
          <div className="grid md:grid-cols-2 gap-8 text-white">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start p-4  bg-gradient-to-r from-[#eb5b35] to-[#ea456b] rounded-2xl lg:bg-none lg:p-0 "
              >
                <div className="flex-shrink-0 mr-4 bg-white rounded-full ">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="m-4"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
