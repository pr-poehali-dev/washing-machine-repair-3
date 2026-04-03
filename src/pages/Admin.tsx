import { useState } from "react";
import Icon from "@/components/ui/icon";

const API_URL = "https://functions.poehali.dev/8c3d5545-f3f6-40ed-9acc-c577ab758bf2";

interface Request {
  id: number;
  name: string;
  phone: string;
  message: string;
  created_at: string;
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [requests, setRequests] = useState<Request[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const raw = await res.text();
      const data = typeof raw === "string" ? JSON.parse(raw) : raw;
      if (res.ok) {
        const list = typeof data === "string" ? JSON.parse(data) : data;
        setRequests(list.requests ?? list);
      } else {
        setError("Неверный пароль");
      }
    } catch {
      setError("Ошибка соединения");
    }
    setLoading(false);
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const raw = await res.text();
      const data = typeof raw === "string" ? JSON.parse(raw) : raw;
      const list = typeof data === "string" ? JSON.parse(data) : data;
      if (res.ok) setRequests(list.requests ?? list);
    } catch (_) {
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white font-golos">
      {/* Header */}
      <div className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#ff5f1f] flex items-center justify-center">
            <Icon name="Wrench" size={14} className="text-white" />
          </div>
          <span className="font-oswald font-bold tracking-wide">ТехНадежно</span>
          <span className="text-white/30 text-sm ml-2">/ Заявки</span>
        </div>
        {requests !== null && (
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            <Icon name="RefreshCw" size={14} />
            Обновить
          </button>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {requests === null ? (
          /* Login form */
          <div className="max-w-sm mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#ff5f1f]/10 border border-[#ff5f1f]/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Lock" size={28} className="text-[#ff5f1f]" />
              </div>
              <h1 className="font-oswald text-2xl font-bold">Вход в панель</h1>
              <p className="text-white/40 text-sm mt-2">Введите пароль для просмотра заявок</p>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Пароль"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-[#ff5f1f]/50 transition-colors"
              />
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-[#ff5f1f] hover:bg-[#e54e0e] disabled:opacity-60 transition-all px-6 py-3.5 rounded-xl text-white font-bold"
              >
                {loading ? <Icon name="Loader2" size={18} className="animate-spin" /> : <Icon name="LogIn" size={18} />}
                Войти
              </button>
            </form>
          </div>
        ) : (
          /* Requests list */
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-oswald text-3xl font-bold">Заявки</h1>
              <div className="bg-[#ff5f1f]/15 border border-[#ff5f1f]/30 rounded-full px-4 py-1 text-[#ff5f1f] text-sm font-semibold">
                {requests.length} {requests.length === 1 ? "заявка" : requests.length < 5 ? "заявки" : "заявок"}
              </div>
            </div>

            {requests.length === 0 ? (
              <div className="text-center py-20 text-white/30">
                <Icon name="Inbox" size={48} className="mx-auto mb-4 opacity-30" />
                <p>Заявок пока нет</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {requests.map((r) => (
                  <div
                    key={r.id}
                    className="rounded-2xl bg-white/4 border border-white/8 hover:border-white/15 transition-all p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#ff5f1f]/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={20} className="text-[#ff5f1f]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white">{r.name}</div>
                      {r.message && (
                        <div className="text-white/40 text-sm mt-0.5 truncate">{r.message}</div>
                      )}
                    </div>
                    <a
                      href={`tel:${r.phone}`}
                      className="flex items-center gap-2 bg-[#ff5f1f]/10 hover:bg-[#ff5f1f]/20 border border-[#ff5f1f]/20 transition-colors px-4 py-2 rounded-lg text-[#ff5f1f] font-semibold text-sm flex-shrink-0"
                    >
                      <Icon name="Phone" size={14} />
                      {r.phone}
                    </a>
                    <div className="text-white/30 text-xs flex-shrink-0 sm:text-right">
                      {r.created_at}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}