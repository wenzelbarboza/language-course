import Image from "next/image";

export default function About() {
  return (
    <main className="container mx-auto">
      <div className="w-full h-full flex md:flex-row flex-col-reverse px-2 gap-4 md:gap-2  my-10 mb-32">
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold mb-4 md:mb-8 bg-text-gradient bg-clip-text text-transparent">
            About us
          </h1>
          <p className="mb-4 md:mb-6 leading-loose">
            Português A2 is a brand created by the RPB group. RPB is a
            consulting and professional training company that operates based on
            a policy where values such as integrity, accountability,
            transparency, continuous improvement, and ethics are considered
            fundamental. In turn, the provision of services is based on high
            standards of quality and continuous improvement, aiming to meet the
            needs and expectations of our clients and the market, always
            ensuring the highest technical and pedagogical quality.
          </p>
          <h6 className=" font-bold mb-4 md:mb-6 text-[rgb(30,75,142)]">
            In terms of Professional Training, RPB Consultores holds the
            following approvals/certifications:
          </h6>
          <div className="flex flex-col gap-8">
            <div className="flex gap-2">
              <div>
                <Image
                  src="/DGERT.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>{" "}
              <span>
                Certification by the Institute of Employment and Vocational
                Training (IEFP)
              </span>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/DGERT.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>{" "}
              <span>
                Certification by the Institute of Employment and Vocational
                Training (IEFP)
              </span>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/DGERT.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>{" "}
              <span>
                Certification by the Directorate-General for Agriculture and
                Rural Development (DGADR)
              </span>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/DGERT.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>{" "}
              <span>
                Certification by the Authority for Working Conditions (ACT)
              </span>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/DGERT.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>{" "}
              <span>
                Certification by the National Federation of Associations of Meat
                Traders (FNACC)
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 bg-slate-500 flex justify-center  md:items-start items-center">
          <div>
            <Image
              src="/aboutus-logo.png"
              width={400}
              height={400}
              alt="Picture of the author"
              className="min-w-[200px] min-h-[200px] object-contain flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
