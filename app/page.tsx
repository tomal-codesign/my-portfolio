import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="text-center bg-[#fff]/30 rounded-lg border-1 border-[#90919C]/30 p-4 backdrop-blur-md text-black">
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <h1>Home Page</h1>
          <Link href="/portfolio">Portfolio</Link>
        </div>
      </div>
    </div>
  );
}
