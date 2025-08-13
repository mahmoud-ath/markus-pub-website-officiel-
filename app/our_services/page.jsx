// app/our_services/page.jsx or pages/our_services.jsx
'use client';
import Image from 'next/image';
// import Header from '@/components/n';   // your header component
import Footer from '../../components/Footer';   // your footer component
import Navbar from '../../components/Navbar';
import GetInTouch from '../../components/GetInTouch';
import FullServices from '../../components/Fullservice'; // your full services
import HeroSection from '../../components/HeroSection'; // your hero section
import '../../styles/css/aos.css';

export default function OurServices() {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Our Services"
        breadcrumb={
          <>
            <a href="/">Home</a> <span className="mx-3">/</span> Services
          </>
        }
        backgroundImage="/images/hero_services.jpg"
      />

      <FullServices />

      <GetInTouch />

      <Footer />
    </>
  );
}
