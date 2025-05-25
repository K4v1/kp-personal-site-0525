export default function Footer() {
  return (
    <footer className="mt-16 border-t pt-8 bg-black text-white">
      <div className="flex flex-wrap gap-6 md:gap-8 text-sm">
        <div className="space-y-2">
          <p><strong>Kavi Pather</strong></p>
          <p>
            <a href="mailto:email@example.com" className="hover:text-accent">
              email@example.com
            </a>
          </p>
        </div>
        <div className="space-y-2">
          <p><strong>EY</strong></p>
          <p>Johannesburg</p>
        </div>
        <div className="ml-auto">© Kavi Pather</div>
      </div>
    </footer>
  );
}
