import Container from './Container';

export default function Footer() {
  return (
    <footer className="mt-16 bg-black text-white">
      <Container>
        <div className="py-6 text-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kavi Pather
          </div>
        </div>
      </Container>
    </footer>
  );
}
