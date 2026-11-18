export default function AdminPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070b1e] bg-cover bg-center px-4 py-12" style={{ backgroundImage: "url('/admin-orbitamos.webp')" }}>
      <div className="absolute inset-0 bg-[#070b1e]/45" aria-hidden="true" />
      <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-[#101935]/90 p-8 text-center text-white shadow-2xl backdrop-blur-xl sm:p-10">
        <div className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-cyan-300">✦ Orbitamos</div>
        <h1 className="mb-3 text-2xl font-black">Área de gestão indisponível</h1>
        <p className="text-sm leading-7 text-white/75">Este é um projeto demonstrativo. Para conhecer as soluções de gestão da Orbitamos, entre em contato com nossa equipe.</p>
        <a className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-[#101935] transition hover:bg-cyan-100" href="https://wa.me/5511949138973?text=Oi%2C%20Orbitamos!%20Vi%20a%20demonstra%C3%A7%C3%A3o%20da%20Vitrine%20Infantil." target="_blank" rel="noreferrer">Falar com a Orbitamos</a>
      </div>
    </main>
  );
}
