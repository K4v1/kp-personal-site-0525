import { GitHubIcon, LinkedInIcon, XIcon, YouTubeIcon } from './Icons';

export default function SocialLinks() {
  return (
    <div className="flex justify-end gap-2">
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
  );
} 