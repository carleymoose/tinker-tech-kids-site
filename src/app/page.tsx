export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold mb-4">Tinker Tech Kids</h1>
      <p className="text-xl text-zinc-400 mb-8">Site is live and working!</p>
      
      <div className="flex gap-4">
        <a href="/pricing" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200">
          View Pricing
        </a>
        <a href="/login" className="border border-white px-8 py-4 rounded-full hover:bg-white/10">
          Login
        </a>
      </div>
    </div>
  );
}