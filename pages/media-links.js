const Head = require('next/head');
const Container = require('../components/Container');
const Layout = require('../components/Layout');

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

function MediaLinks() {
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

module.exports = MediaLinks; 