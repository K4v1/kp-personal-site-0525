import Layout from '../components/Layout';
import Container from '../components/Container';

// Example of data fetching pattern (uncomment and modify as needed)
// export async function getStaticProps() {
//   return {
//     props: {
//       // Add your data here
//     }
//   };
// }

export default function Template() {
  return (
    <Layout title="Template - Kavi Pather" fullWidth>
      {/* Example of full-width content like an image */}
      <div className="w-full h-64 bg-gray-100">
        {/* Add full-width content here */}
      </div>

      <Container>
        <main className="space-y-8">
          <section className="pt-8">
            <p className="mb-4">
              Add your main content here. This section will be contained within the max-width container.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-5 pt-6 border-t border-gray-200">Section Title</h2>
            {/* Add your section content here */}
            <div className="mt-8 border-b border-gray-200"></div>
          </section>
        </main>
      </Container>
    </Layout>
  );
} 