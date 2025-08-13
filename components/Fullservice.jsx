// components/FullService.jsx
import '../styles/css/aos.css';

export default function FullServices() {
  const services = [
    {
      icon: 'icon icon-cursor',
      title: 'Custom Software Solutions',
      text: 'We build smart, scalable, and reliable software tailored to your needs. From internal tools to SaaS platforms, we ensure performance and security.',
      delay: ''
    },
    {
      icon: 'icon icon-badge',
      title: 'Website Design & Development',
      text: 'We craft modern, responsive websites that reflect your brand — from landing pages to full-scale business websites.',
      delay: '100'
    },
    {
      icon: 'icon icon-fire',
      title: 'Brand Identity & Design',
      text: 'Your brand is more than a logo. We create powerful identities with cohesive visuals, voice, and strategy that stand out.',
      delay: '200'
    },
    {
      icon: 'icon icon-layers',
      title: 'SaaS Product Development',
      text: 'From backend systems to user-friendly dashboards, we develop full-stack SaaS products that scale with your business.',
      delay: ''
    },
    {
      icon: 'icon icon-mouse',
      title: 'Automation Tools',
      text: 'We automate repetitive tasks to save you time and money using intelligent, customized solutions and system integrations.',
      delay: '100'
    },
    {
      icon: 'icon icon-magnet',
      title: 'Creative Direction',
      text: 'From social media assets to visual guidelines, we help you craft a compelling visual story for your audience.',
      delay: '200'
    },
    {
      icon: 'icon icon-paper-plane',
      title: 'Digital Growth Support',
      text: 'We help you grow with strategic UI/UX, marketing integrations, analytics setup, and performance tracking.',
      delay: '0'
    },
    {
      icon: 'icon icon-handbag',
      title: 'SEO & Performance',
      text: 'We optimize your site for speed, search engines, and conversion—boosting visibility and engagement.',
      delay: '100'
    },
    {
      icon: 'icon icon-rocket',
      title: 'Project Management Platforms',
      text: 'We build intuitive platforms to streamline team collaboration, workflows, and task tracking—tailored to your process.',
      delay: '200'
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 mb-5 text-center"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service">
                <span className={`${service.icon} mb-4 d-block`}></span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
