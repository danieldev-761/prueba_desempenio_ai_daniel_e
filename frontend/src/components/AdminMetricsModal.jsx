import React, { useState } from 'react';
import { X, ShieldCheck, Lock, Activity, Users, Zap, Clock, DollarSign, RefreshCw, Loader2, AlertCircle } from 'lucide-react';
import { getAdminMetrics } from '../services/api';

export default function AdminMetricsModal({ isOpen, onClose }) {
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!adminKey.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await getAdminMetrics(adminKey);
      setMetrics(data);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message || 'Clave de Administrador inválida.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    if (!adminKey) return;
    setLoading(true);
    try {
      const data = await getAdminMetrics(adminKey);
      setMetrics(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 text-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-800 relative my-8 animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Portal de Telemetría de la Academia</h2>
            <p className="text-xs text-slate-400">Analítica operativa, tasa de escalamiento y estimación de costos de API</p>
          </div>
        </div>

        {!isAuthenticated ? (
          /* Authentication Login Screen */
          <form onSubmit={handleLogin} className="space-y-4 py-4 max-w-sm mx-auto">
            <div className="text-center space-y-1">
              <Lock className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-white">Autenticación de Personal Requerida</h3>
              <p className="text-xs text-slate-400">Ingresa tu clave administrativa para ver las métricas en tiempo real.</p>
            </div>

            {error && (
              <div className="p-3 bg-rose-950/60 border border-rose-800 rounded-xl text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <input
                type="password"
                required
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Ingresa clave administrativa..."
                className="w-full px-4 py-2.5 text-xs bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-60"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
              <span>Desbloquear Telemetría</span>
            </button>
          </form>
        ) : (
          /* Live Dashboard View */
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Flujo de Telemetría en Vivo Activo</span>
              </div>
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                <span>Actualizar</span>
              </button>
            </div>

            {/* Metrics KPI Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Total Inquiries */}
              <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px] font-medium">Consultas Totales</span>
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-xl font-extrabold text-white">{metrics?.total_queries_processed || 0}</div>
              </div>

              {/* Cache Hit Resolution */}
              <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px] font-medium">Resuelto por Caché</span>
                  <Zap className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xl font-extrabold text-emerald-400">{metrics?.resolved_by_cache || 0}</div>
              </div>

              {/* Escalation Rate */}
              <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px] font-medium">Tasa de Escalamiento</span>
                  <Users className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xl font-extrabold text-amber-400">{metrics?.escalation_rate_pct || 0}%</div>
              </div>

              {/* Avg Latency */}
              <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px] font-medium">Latencia Promedio</span>
                  <Clock className="w-4 h-4 text-sky-400" />
                </div>
                <div className="text-xl font-extrabold text-white">{metrics?.average_latency_ms || 0}ms</div>
              </div>
            </div>

            {/* Token Consumption & Costs Breakdown */}
            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                <span>Consumo de Tokens y Modelo Financiero</span>
              </h4>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Tokens de Entrada</span>
                  <span className="font-semibold text-white">{metrics?.total_tokens_consumed?.prompt_tokens || 0}</span>
                </div>
                <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Tokens de Salida</span>
                  <span className="font-semibold text-white">{metrics?.total_tokens_consumed?.completion_tokens || 0}</span>
                </div>
                <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Costo Total Estimado</span>
                  <span className="font-semibold text-emerald-400">${(metrics?.total_cost_usd || 0).toFixed(4)} USD</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 text-center">
              Asistente Académico Inteligente v1.0 • LangGraph + ChromaDB + SQLite
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
