import Image from "next/image";

export default function About() {
  return (
    <main className="container mx-auto">
      <div className="w-full h-full flex md:flex-row flex-col-reverse px-2">
        <div className="w-3/4">
          <h1 className="text-3xl font-bold">About us</h1>
          Português A2 is a brand created by the RPB group. RPB is a consulting
          and professional training company that operates based on a policy
          where values such as integrity, accountability, transparency,
          continuous improvement, and ethics are considered fundamental. In
          turn, the provision of services is based on high standards of quality
          and continuous improvement, aiming to meet the needs and expectations
          of our clients and the market, always ensuring the highest technical
          and pedagogical quality.
          <h6 className=" font-bold">
            In terms of Professional Training, RPB Consultores holds the
            following approvals/certifications:
          </h6>
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
              Certification by the Directorate-General for Agriculture and Rural
              Development (DGADR)
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
        <div className="w-1/4 bg-slate-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio id
          facere et rem. Maiores cum amet explicabo ducimus, veniam modi.
        </div>
      </div>
    </main>
  );
}
