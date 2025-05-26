Ok here is a list of instructions:

1. Arrange files:
Create a folder called /documentation
Move the DESIGN_GUIDE.md and SETUP.md files to this folder
Make a note in Agents.md that this folder exists; list the files and what they contain

---

2. Create the homepage:
Follow these instructions and descriptions:
Of course, update setup.md
Also, copy the below into a file called PROMPTS.md; This will contain all prompts that were used to create the site. Put it in the documents folder. Update agents and any other documentation.

Build the home page:


1. Overall Layout
•Single-page structure (home page contains bio, photo, updates, contact info)
•Responsive design: should work cleanly on desktop, tablet, and mobile
•No scroll-triggered animations or JavaScript dependencies required beyond navigation (optional)

⸻

2. Header
•Name at top left: large font, split over two lines: Kavi Pather
•Navigation menu top right (horizontal list of links): Blog, Media Links, CV (these pages will need to be created later)
•Put the social logos to the left of the horizontal menu(clicking the logo goes to the site):
- LinkedIn: https://www.linkedin.com/in/kavipather/
- X: https://x.com/kavi_pather
- YouTube: https://youtube.com/channel/UChMl5Ua89sbb9ie10bVbHTQ

⸻

3. Hero Image
•Full-width image (cityscape/photo)
•Directly below the header
•Static (no slideshow or parallax)
- create a folder for images
- have the hero image link to: IMG_4753.jpeg; link to folder that will contain images

⸻

4. Intro Section
•Plain paragraph introduction with the following characteristics:
•Single-column text block
•Optional bolding for name, role, or group

Here is the text:

I'm an AI and analytics leader working at the intersection of technology, business, and human potential. With a foundation in consulting and a passion for systems thinking, I help organizations not just adopt AI—but integrate it meaningfully to reimagine how they operate, compete, and serve. My work spans agentic AI, enterprise transformation, and real-world deployment across emerging markets, with a particular focus on financial services. I’m driven by a belief that the right combination of design, data, and judgement can unlock not only performance—but purpose.


⸻

5. Update Feed (“Blog-style timeline”)
•Right-aligned dates (e.g., November 4, October 25)
•Short snippets / headlines to the right of each date
•Ordered from newest to oldest
•Use monospaced or neutral serif/sans font
•Optional “More…” link at the bottom

Blog pages in markdown will be contained in a blog folder

Leverage Next.js and create a content folder where blog posts will be stored in markdown

⸻

6. Contact Section (Modified)
•Single column layout only (not two-column like the original site)
•Contains:
•Full name
•dummy mail address for now
•Affiliation: EY
•Physical address: Johannesburg (city only)
•Use bold or <strong> tag for name and affiliation headings
•Hyperlink email (mailto:)

⸻

7. Footer
•Centered copyright
•Example: © Kavi Pather
•Small font size, light grey color (optional)

⸻

8. Non-functional Requirements
•Performance: minimal dependencies, should load fast even on slow networks
•Accessibility: all text must be readable with high contrast; images must use alt attributes
•Print-friendly: should degrade gracefully if printed

⸻

This will use the Next.js templating engine - build accordingly

⸻

Follow the guideline DESIGN_GUIDELINES document in the repo closely

---

3. Build the site ready to publish
