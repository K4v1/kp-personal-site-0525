import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GitHubIcon, LinkedInIcon, XIcon, YouTubeIcon } from './Icons';

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
          <div className="container-custom">
            <div className="flex justify-end gap-2 pt-4">
              <a
                href="https://github.com/k4v1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/kavipather/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/kavi_pather"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent"
                aria-label="X"
              >
                <XIcon />
              </a>
              <a
                href="https://youtube.com/channel/UChMl5Ua89sbb9ie10bVbHTQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
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
          </div>
        </header>

        <div className={fullWidth ? 'w-full' : 'container-custom py-6'}>
          {children}
        </div>
      </div>
    </>
  );
} 