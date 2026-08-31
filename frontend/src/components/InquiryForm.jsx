import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendChatMessage } from '../services/api';

export default function InquiryForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: 'Inglés General e Intensivo',
    question: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.question.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Process through webhook channel
      const response = await sendChatMessage(
        `[Estudiante: ${formData.name} | Correo: ${formData.email} | Programa: ${formData.program}] Pregunta: ${formData.question}`,
        `form_${Date.now()}`,
        'webhook'
      );
      setResult(response);
    } catch (err) {
      setError(err.message || 'Error al enviar la consulta.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative my-8 animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-slate-900 mb-1">Formulario de Consulta Académica</h2>
        <p className="text-xs text-slate-500 mb-4">
          Envía tu consulta directamente a la Academia de Idiomas Colombiana para resolución inmediata o atención personalizada.
        </p>

        {result ? (
          <div className="space-y-4 py-3">
            <div className={`p-4 rounded-xl border ${
              result.escalated ? 'bg-amber-50 border-amber-200' : 'bg-emerald-50 border-emerald-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {result.escalated ? (
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                )}
                <h4 className={`text-sm font-bold ${result.escalated ? 'text-amber-900' : 'text-emerald-900'}`}>
                  {result.escalated ? 'Consulta Transferida a Asesor Académico' : 'Información Oficial Confirmada'}
                </h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">{result.response}</p>
            </div>

            <button
              onClick={() => {
                setResult(null);
                setFormData({ name: '', email: '', program: 'Inglés General e Intensivo', question: '' });
                onClose();
              }}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              Cerrar Formulario
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre Completo</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej: Carlos Rodríguez"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Correo Electrónico</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="estudiante@ejemplo.com"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Programa de Interés</label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
              >
                <option value="Inglés General e Intensivo">Inglés General e Intensivo (A1 - C1)</option>
                <option value="Francés Comunicativo y Académico">Francés Comunicativo y Académico (DELF/DALF)</option>
                <option value="Alemán Profesional y Cotidiano">Alemán Profesional y Cotidiano (Goethe-Zertifikat)</option>
                <option value="Italiano Cultural y de Negocios">Italiano Cultural y de Negocios (CELI/CILS)</option>
                <option value="Portugués Brasileño Dinámico">Portugués Brasileño Dinámico (Celpe-Bras)</option>
                <option value="Preparación TOEFL / IELTS">Preparación Exámenes Internacionales TOEFL / IELTS</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Tu Pregunta o Consulta</label>
              <textarea
                required
                rows={3}
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                placeholder="Indícanos qué información requieres sobre horarios, precios en COP, modalidades o matrícula..."
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer disabled:opacity-60"
              >
                {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                <span>Enviar Consulta</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
