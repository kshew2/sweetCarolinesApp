// src/pages/Home.tsx
import Layout from "../components/Layout";
import bgImage from "../assets/sweet-carolines-home-img.jpg";

export default function Home() {
  return (
    <>
      <Layout
        bg="bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0)), url(${bgImage})`,
          height: "350px",
        }}
      >
        <div className="text-white max-w-sm">
          <h1 className="text-4xl font-bold mb-4">Welcome to Home</h1>
          <p>
            Full-width background, centered content. Modern style layout.
          </p>
        </div>
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
