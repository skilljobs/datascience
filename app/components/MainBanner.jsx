import Image from "next/image";

export default function MainBanner() {
  return (
    <div>
      <Image src="/banner.jpg" alt="main banner" width={1920} height={1080} />
    </div>
  )
}
