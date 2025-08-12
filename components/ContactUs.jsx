'use client';

import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/css/aos.css';

export default function ContactUs() {
  const [showModal, setShowModal] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        breadcrumb={
          <>
            <a href="/">Home</a> <span className="mx-3">/</span> contact us
          </>
        }
        backgroundImage="/images/hero_2.jpg"
      />
      <section
        className="contact-section"
        style={{
          minHeight: '70vh',
          backgroundColor: '#f8f9fb',
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '5rem 1rem',
          fontFamily: "'Roboto Mono', monospace",
        }}
      >
        <div style={{ maxWidth: 600, width: '100%' }}>
          <h1
            data-aos="fade-down"
            style={{
              fontWeight: '700',
              fontSize: '2.8rem',
              marginBottom: '1rem',
              color: '#fec107',
              letterSpacing: '1.2px',
            }}
          >
            Let’s Connect & Collaborate
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: '3rem',
              color: '#555',
              fontWeight: '500',
            }}
          >
            Got a project or idea? Reach out anytime — send us an email or message us on WhatsApp, and we’ll
            get back to you fast.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              onClick={handleEmailClick}
              style={{
                backgroundColor: '#fec107',
                color: '#333',
                padding: '0.85rem 2.5rem',
                fontWeight: '700',
                fontSize: '1.1rem',
                borderRadius: '40px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                boxShadow: '0 4px 15px rgba(254, 193, 7, 0.4)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#e0ac06';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#fec107';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <i className="fa fa-envelope fa-lg" />
              Email Us
            </a>

            <a
              href="https://wa.me/212702842088"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                color: '#25D366',
                padding: '0.85rem 2.5rem',
                fontWeight: '700',
                fontSize: '1.1rem',
                borderRadius: '40px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                transition: 'transform 0.3s',
                cursor: 'pointer',
                border: '2px solid #25D366',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <i className="fa fa-whatsapp fa-lg" />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* Add Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              maxWidth: '90%',
              width: '400px',
              position: 'relative',
              animation: 'modalFade 0.3s ease',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                right: '15px',
                top: '15px',
                border: 'none',
                background: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
              }}
            >
              ×
            </button>
            <h3
              style={{
                color: '#333',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                fontWeight: '600',
              }}
            >
              Contact Email
            </h3>
            <p
              style={{
                color: '#666',
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                lineHeight: '1.6',
              }}
            >
              You can reach us at:
            </p>
            <a
              href="mailto:tmj.devgroup@protonmail.com"
              style={{
                color: '#fec107',
                fontSize: '1.2rem',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'block',
                marginBottom: '1.5rem',
              }}
            >
              tmj.devgroup@protonmail.com
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('tmj.devgroup@protonmail.com');
                alert('Email copied to clipboard!');
              }}
              style={{
                backgroundColor: '#fec107',
                border: 'none',
                color: '#333',
                padding: '0.6rem 1.2rem',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#e0ac06';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#fec107';
              }}
            >
              Copy Email
            </button>
          </div>
        </div>
      )}

      {/* Add modal animation styles */}
      <style jsx>{`
        @keyframes modalFade {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
