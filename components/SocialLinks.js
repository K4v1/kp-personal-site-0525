const { TwitterIcon, LinkedInIcon, EmailIcon, YouTubeIcon } = require('./Icons');

function SocialLinks() {
  const links = [
    {
      name: 'Twitter',
      href: 'https://x.com/kavi_pather',
      icon: TwitterIcon,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kavipather/',
      icon: LinkedInIcon,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@kavipather2638',
      icon: YouTubeIcon,
    },
    {
      name: 'Email',
      href: 'mailto:gardens_camber1f@icloud.com',
      icon: EmailIcon,
    },
  ];

  return (
    <div className="flex space-x-4 justify-end">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent transition-colors"
            aria-label={link.name}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}

module.exports = SocialLinks; 