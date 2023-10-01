"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-20 bg-accent-700 p-4 text-center text-white">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} iamxdave. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion and Vercel
        hosting.
      </p>
    </footer>
  );
};

export default Footer;
