export default function MainBanner() {
  return (
    <div
      style={{
        backgroundSize: "100% 100vh",
      }}
      className='bg-[url("/banner.jpg")] bg-contain min-h-[600px] md:min-h-[800px] relative'
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-white"
        
      ></div>
    </div>
  );
}
