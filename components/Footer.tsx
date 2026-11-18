import { store } from "@/data/store";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-8 text-white sm:px-10 lg:px-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-coral text-xl" aria-hidden="true">✦</div>
          <div>
            <p className="font-black text-sm">{store.name}</p>
            <p className="text-xs text-white/50 font-semibold">Projeto demonstrativo · Orbitamos</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 sm:text-right">
          <a href={store.instagram} target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-white transition-colors font-semibold">
            @orbitamosbr
          </a>
          <a
            href={`https://wa.me/${store.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/70 hover:text-white transition-colors font-semibold"
          >
            {store.whatsappLabel}
          </a>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-5 text-center text-xs text-white/30 font-semibold">
        <p className="mb-4">Este é um portfólio demonstrativo. Não há estoque, pedidos ou pagamentos.</p>
        © {new Date().getFullYear()} Orbitamos · Produtos e preços meramente ilustrativos
      </div>
    </footer>
  );
}
