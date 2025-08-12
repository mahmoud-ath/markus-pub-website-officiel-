// components/HeroSection.jsx
'use client';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/aos.css';

export default function HeroSection({ title, breadcrumb, backgroundImage }) {
  return (
    <div
      className="slider-item innerp overlay"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row slider-text align-items-center justify-content-center text-center">
          <div className="col-lg-12 col-sm-12">
            <h1 className="mb-4">{title}</h1>
            <p className="custom-breadcrumbs">
              {breadcrumb}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumb: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};
