import Head from 'next/head';
import Container from '../components/Container';
import Layout from '../components/Layout';

function LinkedInIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.203 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
    </svg>
  );
}

const mediaLinks = [
  {
    title: "Design Thinking for Data Scientists and Actuaries",
    type: "Presentation",
    link: "https://www.youtube.com/watch?v=8nLEgnO0ezw",
    description: "A presentation exploring the application of design thinking methodologies in data science and actuarial contexts."
  },
  {
    title: "Managing Risk Associated with Models",
    type: "Presentation",
    link: "https://www.actuarialsociety.org.za/download/models-mistakes-mayhem-kavi-pather-idelia-hoberg-2018/",
    description: "A conference presentation discussing strategies for managing risks related to statistical and predictive models."
  },
  {
    title: "Use of Machine Learning in Insurance Telematics",
    type: "Article",
    link: "https://www.youtube.com/watch?v=B3Hc_auajfA",
    description: "An article examining how machine learning is utilized in insurance telematics to enhance data analysis and decision-making."
  },
  {
    title: "Pivoting from Data Expert to Innovation Leader",
    type: "Press",
    link: "https://www.cmu.edu/iii/about/news/2022/alumni-spotlight-pather-pivoting-from-data-expert-to-innovation-leader.html",
    description: "A press feature highlighting the transition from data expertise to leading innovation initiatives within organizations."
  },
  {
    title: "Improving Customer Experience through A.I.",
    type: "Article",
    link: "https://insights.pecb.com/improving-customer-experience-through-artificial-intelligence/",
    description: "An authored article discussing how artificial intelligence can be leveraged to enhance customer experiences across various industries."
  },
  {
    title: "IFRS17 Panel Discussion at 2018 Actuarial Seminar",
    type: "Panel",
    link: "https://iono.fm/e/601627",
    description: "A panel discussion focusing on the implications and challenges of implementing IFRS17 in the actuarial field."
  },
  {
    title: "Business Talk – Kavi Pather from EY on Why You Need to Pay Attention to How AI is Changing Business",
    type: "Podcast",
    link: "https://www.youtube.com/watch?v=B3Hc_auajfA",
    description: "A podcast episode where Kavi Pather discusses the transformative impact of artificial intelligence on modern business practices."
  },
  {
    title: "Artificial Intelligence: Why SA is on the Brink of a Data-Driven Gold Rush",
    type: "Opinion Article",
    link: "https://www.businesslive.co.za/bd/opinion/2022-04-25-artificial-intelligence-why-sa-is-on-the-brink-of-a-data-driven-gold-rush/",
    description: "This article explores how South Africa stands on the verge of an AI-driven transformation, underpinned by its expanding data assets, improving infrastructure, and emerging talent pool. It calls for proactive investment and ecosystem building to harness the opportunity."
  },
  {
    title: "Why Firms Need to Prepare for Arrival of ChatGPT and Large-Language Models",
    type: "Opinion Article",
    link: "https://www.businesslive.co.za/bd/opinion/2023-02-16-kavi-pather-why-firms-need-to-prepare-for-arrival-of-chatgpt-and-large-language-models/",
    description: "This article outlines the disruptive impact of generative AI models like ChatGPT on business operations, especially in digital marketing and customer engagement, and offers practical guidance for leaders to prepare their organisations for this shift."
  },
  {
    title: "Can We Develop AI That Everyone Can Trust?",
    type: "Opinion Article",
    link: "https://www.businesslive.co.za/bd/opinion/2024-10-16-kavi-pather-can-we-develop-ai-that-everyone-can-trust/",
    description: "A thoughtful reflection on the challenges of building trustworthy AI systems, this piece discusses governance, transparency, bias mitigation, and the balance between innovation and ethical responsibility."
  }
];

export default function MediaLinks() {
  return (
    <Layout title="Media Links - Kavi Pather">
      <div className="container-custom">
        <section>
          <h2 className="text-2xl font-semibold mb-6 pt-6 border-t border-gray-200">Media Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaLinks.map((item, index) => (
              <div 
                key={index} 
                className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap">{item.type}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="pt-2">
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-sm inline-flex items-center"
                    >
                      View Resource →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
} 