"use client";
import { useLanguage } from "@/context/LanguageContext";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type Props = {
  imgUrl: string;
  backHeading: string;
  backText: string;
};

const Card = ({ imgUrl, backText, backHeading }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (window.innerWidth <= 768 && cardElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const cardInner = entry.target.querySelector(
              ".card-inner"
            ) as HTMLElement;

            if (entry.isIntersecting) {
              cardInner.style.transform = "rotateY(180deg)";
            } else {
              cardInner.style.transform = "rotateY(0deg)";
            }
          });
        },
        {
          threshold: 0.7,
          rootMargin: "0px",
        }
      );

      observer.observe(cardElement);

      return () => {
        if (cardElement) {
          observer.unobserve(cardElement);
        }
      };
    }
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <div className="card-inner">
        <div className="card-front">
          <div className="image-container">
            <Image
              src={`/${imgUrl}`}
              width={100}
              height={100}
              alt="Picture of the author"
              className="object-contain"
            />
          </div>
        </div>
        <div className="card-back">
          <div className="flex flex-col">
            <h2 className="text-lg mb-4">{backHeading}</h2>
            <p className="text-xs font-extralight">{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const { t, language } = useLanguage();
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="my-12 lg:mb-40" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center flex flex-col gap-4">
          {language === "en" ? (
            <>
              <p>
                See What Our Learning
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  Offers
                </span>
              </p>
              <p>
                & What We <span className="text-red-600">Provide</span>
              </p>
            </>
          ) : (
            t("services.title")
          )}
        </h2>
        <StyledWrapper>
          <div className="cards">
            <Card
              imgUrl="Trophy.png"
              backHeading={t("services.fluency")}
              backText={t("services.fluencyDesc")}
            />
            <Card
              imgUrl="Cap.png"
              backHeading={t("services.certificate")}
              backText={t("services.certificateDesc")}
            />
            <Card
              imgUrl="Collaboration.png"
              backHeading={t("services.confidence")}
              backText={t("services.confidenceDesc")}
            />
            <Card
              imgUrl="Positive.png"
              backHeading={t("services.successRate")}
              backText={t("services.successRateDesc")}
            />
          </div>
        </StyledWrapper>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }
  .card {
    width: 280px;
    height: 200px;
    perspective: 1000px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  /* Keep hover effect for desktop only */
  @media (min-width: 769px) {
    .card:hover .card-inner {
      transform: rotateY(180deg);
    }
  }
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
  }
  .card-front {
    background-color: #f8f8f8;
    color: #fff;
  }
  .card-back {
    background: linear-gradient(135deg, rgb(235, 88, 58), rgb(203, 62, 89));
    color: #fff;
    transform: rotateY(180deg);
  }
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
  }
  @media (max-width: 1024px) {
    .cards {
      justify-content: space-around;
    }
  }
  @media (max-width: 768px) {
    .cards {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default CardContainer;
