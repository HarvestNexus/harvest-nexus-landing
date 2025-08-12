import React, { useRef, useState, useEffect } from "react";
import Hand from '../assets/icons/hand.svg';
import OurServices6 from '../assets/images/our_services6.jpg';
// import OurServices5 from '../assets/images/our_services5.jpg';
import OurServices2 from '../assets/images/our_services2.jpg';
import OurServices4 from '../assets/images/our_services4.jpg';
import OurServices1 from '../assets/images/our_services1.jpg';
import OurServices3 from '../assets/images/our_services3.jpg';
import OurServices7 from '../assets/images/our_services5.jpg';
import "../styles/our-services.css";
interface Service {
  img: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    img: OurServices6,
    title: "Digital Marketplace",
    desc: "Connects farmers and buyers in real-time for fast, direct sales of fresh produce, no middlemen, no delays."
  },
  {
    img: OurServices4,
    title: "Smart Order Matching",
    desc: "Automatically pairs buyers with farmers based on location, crop availability, quantity, and price preferences."
  },
  {
    img: OurServices2,
    title: "Inventory Management for Farmers",
    desc: "Farmers can easily update available produce, set pricing, and manage incoming orders through their dashboard."
  },
  {
    img: OurServices7,
    title: "Buyer Dashboard",
    desc: "Buyers get access to a clean interface to browse available produce, place bulk or custom orders, and track delivery."
  },
  {
    img: OurServices1,
    title: "Logistics Coordination",
    desc: "We help coordinate delivery schedules and ensure produce moves quickly from farm to buyer, reducing waste."
  },
  {
    img: OurServices3,
    title: "Verified Farmer Profiles",
    desc: "Each farmer has a profile that builds trust, showcasing farm location, available crops, past ratings, and order history."
  }
];

const OurServices: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

 
  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel || !carousel.firstChild) return;

    const cardWidth = (carousel.firstChild as HTMLElement).offsetWidth + 24; // width + gap
    carousel.scrollTo({
      left: cardWidth * index,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };


  const scrollLeft = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const scrollRight = () => {
    if (activeIndex < services.length - 1) scrollToIndex(activeIndex + 1);
  };

 
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      if (!carousel.firstChild) return;
      const cardWidth = (carousel.firstChild as HTMLElement).offsetWidth + 24;
      const newIndex = Math.round(carousel.scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-sec">
       
        <img
          src="https://i.ibb.co/spKYGMxc/IMG-20250729-WA0049.jpg"
          alt="Harvest Nexus Logo"
          width={70}
          height={70}
          style={{ borderRadius: "8px", borderColor:"green", marginRight: "0.75rem" }}
        />
         <h4 className="services-subtitle">Our Services</h4>
      </div>
      <h2 className="services-title">What We Have To Offer You</h2>
      <p className="services-desc">
        We provide innovative solutions to help farmers maximize efficiency, improve sustainability,
        and achieve higher yields. From smart technology to expert guidance, we are here to transform
        the future of farming.
      </p>

      <div className="services-carousel" ref={carouselRef}>
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-img" />
            <div className="service-content">
              <div className="service-icon">
                <img src={Hand} alt="Offer Icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="carousel-controls">
        <button onClick={scrollLeft} disabled={activeIndex === 0}>&lt;</button>
        <div className="carousel-dots">
          {services.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => scrollToIndex(i)}
            ></span>
          ))}
        </div>
        <button onClick={scrollRight} disabled={activeIndex === services.length - 1}>&gt;</button>
      </div>
    </section>
  );
};

export default OurServices;
