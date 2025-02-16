import Image from "next/image";

export default function Why() {
  return (
    <>
      <section className="container mx-auto my-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-4/12">
            <div className="image-wrapper relative inline-block">
              <Image
                src="/why.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="w-8/12 ">
            <h2 className="text-2xl font-medium mb-6">
              Why choose portuges A2
            </h2>
            <p className="mb-6 text-sm font-light">
              Our A2-Level Portuguese Course is designed for beginners who want
              to master the fundamentals of the Portuguese language and speak
              with confidence in just 30 days. With a structured curriculum,
              expert guidance, and practical exercises, you'll gain real-world
              communication skills and cultural insights.
            </p>
            <div className="flex gap-6 text-sm font-light  sm:flex-row flex-col">
              <span className="flex gap-2">
                <Image
                  src="/Forward.png"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                  className="w-5 h-5 object-contain flex-shrink-0"
                />{" "}
                30-Day Intensive Learning
              </span>
              <span className="flex gap-2">
                <Image
                  src="/Laptop.png"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                  className="w-5 h-5 object-contain flex-shrink-0"
                />{" "}
                100 % ONLINE
              </span>
              <span className="flex gap-2 items-center">
                {" "}
                <Image
                  src="/Paper.png"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                  className="w-5 h-5 object-contain flex-shrink-0"
                />{" "}
                NO EXAMS
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
