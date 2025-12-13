// src/pages/Home.jsx
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout bg="bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Welcome to Home</h1>
        <p className="text-gray-700">
          Full-width background, centered content. Modern style layout.
        </p>
      </Layout>

      <Layout bg="bg-white border-t border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-4">Another Section</h2>
        <p className="text-gray-700">
          You can alternate section backgrounds to make pages visually appealing.
        </p>
      </Layout>
    </>
  );
}
