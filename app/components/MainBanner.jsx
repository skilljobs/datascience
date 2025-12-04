import Image from "next/image";

export default function MainBanner() {
  return (
    <div>
      <Image src="https://studio.skill.jobs/media/django-summernote/2025-12-04/4e736d46-b3d6-4c1e-aed4-159734177a9e.jpg" alt="main banner" width={1920} height={1080} className="w-full object-cover" />
    </div>
  );
}
