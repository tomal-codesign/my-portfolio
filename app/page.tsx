import Link from "next/link";
import CanvasAnimation from "./components/menu/CanvasAnimation/CanvasAnimation";

export default function Home() {
  return (
    <div >
      <div className="relative">
        <h1 style={{ position: "relative", zIndex: 1 }}>Welcome!</h1>
        <h1>Home Page</h1>
        <Link href="/portfolio">Portfolio</Link>
      </div>

    </div>
  );
}
