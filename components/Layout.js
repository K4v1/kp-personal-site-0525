import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from './Container';
import SocialLinks from './SocialLinks';

export default function Layout({ children, title = 'Kavi Pather', fullWidth = false }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-200">
          <Container noPadding>
            <div className="pt-4">
              <SocialLinks />
            </div>
            <nav className="flex items-center justify-between py-4">
              <Link href="/" className="text-2xl md:text-3xl font-semibold hover:text-accent">
                Kavi Pather
              </Link>
              <div className="flex items-center space-x-4">
                {!isHome && (
                  <Link href="/" className="hover:text-accent">
                    Home
                  </Link>
                )}
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
                <Link href="/media-links" className="hover:text-accent">
                  Media
                </Link>
              </div>
            </nav>
          </Container>
        </header>

        <Container fullWidth={fullWidth}>
          {children}
        </Container>
      </div>
    </>
  );
} 