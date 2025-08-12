// components/Testimonial.jsx
'use client';

import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import '../styles/css/testimonial.css';
import '../styles/css/aos.css';

export default function Testimonial() {
  const testimonials = [
    {
      img: "/images/homme.png",
      name: "med",
      role: "Customer MarkusPub.",
      text: `Working with Markus Pub was a game-changer. They understood our fragmented 
              workflows and implemented a custom solution that automated task assignments,
              status tracking, and deadline reminders. After integration, our team productivity
              increased by over 30%, and coordination across departments is seamless.`
    },
    {
      img: "/images/femme.png",
      name: "Laura",
      role: "Customer MarkusPub.",
      text: `We hired Markus Pub to build our company’s new web portal. 
              From layout to launch, the process was smooth—creative design, responsive
              performance, and helpful training at handoff. We’re getting compliments
              on how intuitive and polished the site looks. Highly recommend.`
    },
    {
      img: "/images/homme.png",
      name: "John Smith",
      role: "Customer MarkusPub.",
      text: `The Markus Pub team didn’t just create visuals—they shaped our brand story.
              We got a cohesive identity: logo, color palette, messaging and website aligned perfectly.
              Their thoughtful approach resonated with our clients and elevated our market position at launch.`
    },
    {
      img: "/images/homme.png",
      name: "Smith",
      role: "Customer MarkusPub.",
      text: `We engaged Markus Pub for full-stack support—workflow software,
              brand identity, and the web front-end. Their holistic method delivered a
              unified platform that reflects who we are. Their team was proactive, 
              technically adept, and responsive every step of the way. A real partnership.`
    }
  ];

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      slidesToScroll: 1,
      dragFree: false,
      containScroll: 'trimSnaps',
      draggable: true,
      speed: 20,            // Slower speed for smoother transitions
      skipSnaps: false,
      startIndex: 0
    },
    [Autoplay({ 
      delay: 3000,          // 4 seconds between slides
      playOnInit: true,     // Start playing as soon as the carousel loads
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
      options: { skipInitialAnimation: false }
    })]
  );

  return (
    <div className="testimonial-section bg-light">
      <div className="testimonial-container">
        <div className="testimonial-header mb-5">
          <div className="col-md-8 text-center mx-auto">
            <h2 className="testimonial-title">Testimonial</h2>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map(({ img, name, role, text }, idx) => (
              <div className="embla__slide" key={idx}>
                <div className="testimonial-card">
                  <div className="testimonial-vcard">
                    <div className="testimonial-image">
                      <img src={img} alt={`Photo of ${name}`} />
                    </div>
                    <div className="testimonial-info">
                      <h2 className="testimonial-name">{name}</h2>
                      <span className="testimonial-role">{role}</span>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <blockquote>
                      <p>"{text}"</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
