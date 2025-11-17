import { ContentSection } from "@/components/content-section";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <div className="flex flex-col">
      <ContentSection />
      <Features />
    </div>
  );
}

