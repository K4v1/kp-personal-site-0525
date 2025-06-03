function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Kavi Pather. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

module.exports = Footer;
