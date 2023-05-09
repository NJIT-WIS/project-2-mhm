import React from 'react';
import styles from '../styles/policy.module.css';

export default function Policy() {
  return (
    <div className={styles.privPol}>
      <h1>Privacy Policy</h1>

      <h2>Introduction</h2>
      <p>
        We are committed to protecting your privacy and handling your personal data in an open and transparent manner. This Privacy Policy explains how we collect, use, and share your personal data when you use our website MyWebClass.org. Please read this Privacy Policy carefully to understand our practices regarding your personal data.
      </p>

      <h2>Personal Data We Collect</h2>
      <p>We may collect the following categories of personal data from you when you use our Site:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>IP address</li>
        <li>Location data</li>
        <li>Browsing history</li>
      </ul>
      <p>We collect this personal data to provide services to you, improve our Site, and for marketing purposes. We may also collect personal data from third-party sources, such as social media platforms and public databases.</p>

      <h2>Use of Personal Data</h2>
      <p>We use your personal data for the following purposes:</p>
      <ul>
        <li>To provide services to you, including processing orders, responding to inquiries, and delivering content.</li>
        <li>To improve our Site, including analyzing user behavior, personalizing your experience, and developing new features.</li>
        <li>For marketing purposes, including sending promotional emails, advertising, and creating personalized content and advertising.</li>
      </ul>

      <h2>Sharing of Personal Data</h2>
      <p>We may share your personal data with the following third-party service providers:</p>
      <ul>
        <li>Payment processors</li>
        <li>Email service providers</li>
        <li>Analytics providers</li>
        <li>Advertising networks</li>
      </ul>
      <p>We may also share personal data with government or law enforcement authorities if required by law or to protect our legal rights or those of our users.</p>

      <h2>Retention of Personal Data</h2>
      <p>We retain your personal data for as long as necessary to provide services to you and for other legitimate purposes, such as complying with legal obligations, resolving disputes, and enforcing our agreements.</p>

      <h2>Data Subject Rights</h2>
      <p>Under the GDPR, you have the following rights with respect to your personal data:</p>
      <ul>
        <li>The right to access and obtain a copy of your personal data.</li>
        <li>The right to rectify any inaccurate or incomplete personal data.</li>
        <li>The right to erasure of your personal data under certain circumstances.</li>
        <li>The right to restrict processing of your personal data under certain circumstances.</li>
        <li>The right to object to processing of your personal data under certain circumstances.</li>
        <li>The right to data portability under certain circumstances.</li>
      </ul>
      <p>To exercise your rights under the GDPR, please contact us using the information provided in the "Contact Us" section below.</p>

      <h2>Cookies</h2>
      <p>We may use cookies and similar technologies to collect and store information about your use of our Site. Please see our <a href="../pages/cookie-policy">Cookie Policy</a> for more information.</p>

      <h2>International Data Transfers</h2>

      <p>Your personal data may be transferred to and processed in countries outside of the European Economic Area (EEA), which may have data protection laws that are different from those of your country of residence. We will take appropriate measures to ensure that personal data remains protected and is only transferred in accordance with applicable law.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or concerns about our Privacy Policy, please contact us at [insert contact email or address].</p>

      <h2>Changes to this Privacy Policy</h2>
      <p>We reserve the right to update this Privacy Policy at any time to reflect changes to our data processing practices or applicable law. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on our Site. We encourage you to review this Privacy Policy periodically for any changes.</p>
     </div>
  )
}