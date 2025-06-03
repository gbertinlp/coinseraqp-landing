import { Features, Services, Wall } from "@/components";
import { featuresCompany } from "@/config/features";

export default function Home() {

  return (
    <div className='overflow-hidden'>
      <Wall />
      <Features features={featuresCompany} />
      <Services />
    </div>
  );
}
