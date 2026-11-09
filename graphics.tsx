import React from "react";

/** Decorative, original scientific illustrations. Schematic only, not data. */

export function DnaHelix({ className = "" }: { className?: string }) {
  const rungs = Array.from({ length: 14 }, (_, i) => i);
  return (
    <svg viewBox="0 0 200 420" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="dnaA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        d={`M40 10 ${rungs.map((i) => `C ${i % 2 ? 40 : 160} ${10 + i * 30 + 15}, ${i % 2 ? 40 : 160} ${10 + i * 30 + 15}, ${i % 2 ? 160 : 40} ${10 + (i + 1) * 30}`).join(" ")}`}
        fill="none" stroke="url(#dnaA)" strokeWidth="3" strokeLinecap="round"
      />
      <path
        d={`M160 10 ${rungs.map((i) => `C ${i % 2 ? 160 : 40} ${10 + i * 30 + 15}, ${i % 2 ? 160 : 40} ${10 + i * 30 + 15}, ${i % 2 ? 40 : 160} ${10 + (i + 1) * 30}`).join(" ")}`}
        fill="none" stroke="#14b8a6" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round"
      />
      {rungs.map((i) => {
        const y = 10 + i * 30 + 15;
        const w = 40 + Math.abs(Math.sin((i + 0.5) * (Math.PI / 1))) * 0;
        return (
          <g key={i} opacity={0.5}>
            <line x1={55 + (i % 2) * 5} y1={y} x2={145 - (i % 2) * 5} y2={y} stroke="#67e8f9" strokeWidth="2" strokeDasharray="3 4" />
            <circle cx={55 + (i % 2) * 5} cy={y} r="3.5" fill="#2dd4bf" />
            <circle cx={145 - (i % 2) * 5} cy={y} r="3.5" fill="#67e8f9" />
          </g>
        );
      })}
    </svg>
  );
}

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 400 240" role="img" aria-label={label} className="h-full w-full">
      <rect width="400" height="240" fill="#081529" />
      <g opacity=".35">
        {Array.from({ length: 12 }).map((_, i) =>
          Array.from({ length: 8 }).map((__, j) => (
            <circle key={`${i}-${j}`} cx={20 + i * 34} cy={20 + j * 30} r="1.2" fill="#67e8f9" />
          ))
        )}
      </g>
      {children}
    </svg>
  );
}

/** NK cell with NCR3/NKp30 receptors, schematic of an immune-signalling concept. */
export function Ncr3Graphic() {
  const spikes = Array.from({ length: 14 }, (_, i) => (i / 14) * Math.PI * 2);
  return (
    <Frame label="Schematic of an NK cell with NCR3/NKp30 surface receptors and a gene-expression heatmap strip">
      <g transform="translate(125 120)">
        <circle r="62" fill="#0f766e" fillOpacity=".35" stroke="#2dd4bf" strokeWidth="2" />
        <circle r="24" fill="#12305c" stroke="#67e8f9" strokeWidth="1.5" />
        <circle cx="-30" cy="26" r="5" fill="#2dd4bf" /><circle cx="22" cy="-34" r="4" fill="#67e8f9" />
        <circle cx="34" cy="28" r="3.5" fill="#2dd4bf" />
        {spikes.map((a, i) => {
          const x1 = Math.cos(a) * 62, y1 = Math.sin(a) * 62;
          const x2 = Math.cos(a) * 80, y2 = Math.sin(a) * 80;
          const hot = i % 3 === 0;
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={hot ? "#67e8f9" : "#2dd4bf"} strokeWidth="2" />
              <circle cx={x2} cy={y2} r={hot ? 5 : 3.5} fill={hot ? "#67e8f9" : "#2dd4bf"} />
            </g>
          );
        })}
        <text y="110" textAnchor="middle" fill="#9db0c7" fontSize="11" fontFamily="Inter, sans-serif">NK cell · NCR3/NKp30</text>
      </g>
      {/* heatmap strip */}
      <g transform="translate(240 50)">
        <text y="-10" fill="#9db0c7" fontSize="11" fontFamily="Inter, sans-serif">Transcriptomic workflow</text>
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 8 }).map((__, c) => {
            const v = (Math.sin(r * 2.1 + c * 1.3) + 1) / 2;
            return (
              <rect key={`${r}-${c}`} x={c * 18} y={r * 18} width="16" height="16" rx="2"
                fill={`rgba(${Math.round(20 + v * 25)}, ${Math.round(120 + v * 92)}, ${Math.round(140 + v * 100)}, ${0.3 + v * 0.7})`} />
            );
          })
        )}
        <text y="115" fill="#9db0c7" fontSize="10" fontFamily="Inter, sans-serif">DESeq2 → PPI → ML → validation</text>
      </g>
    </Frame>
  );
}

/** LPA gene with KIV-2 repeat block and an Lp(a) particle. */
export function LpaGraphic() {
  return (
    <Frame label="Schematic of the LPA gene with a variable block of KIV-2 repeats and an Lp(a) particle">
      <text x="24" y="40" fill="#9db0c7" fontSize="11" fontFamily="Inter, sans-serif">LPA gene · schematic</text>
      <g transform="translate(24 52)">
        <rect width="70" height="26" rx="5" fill="#12305c" stroke="#67e8f9" />
        <text x="35" y="17" textAnchor="middle" fill="#e8f0f8" fontSize="10" fontFamily="Inter, sans-serif">KIV-1</text>
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x={78 + i * 30} width="26" height="26" rx="5" fill="#0f766e" stroke="#2dd4bf" />
        ))}
        <text x={78 + 3 * 30 - 2} y="46" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontFamily="Inter, sans-serif">KIV-2 repeats (variable copy number)</text>
        <text x={78 + 6 * 30 + 6} y="17" fill="#2dd4bf" fontSize="13">×n</text>
        <rect x="290" width="60" height="26" rx="5" fill="#12305c" stroke="#67e8f9" />
        <text x="320" y="17" textAnchor="middle" fill="#e8f0f8" fontSize="10" fontFamily="Inter, sans-serif">KIV-3…10</text>
      </g>
      {/* Lp(a) particle */}
      <g transform="translate(110 168)">
        <circle r="38" fill="#12305c" stroke="#67e8f9" strokeWidth="2" />
        <circle r="22" fill="#0f766e" fillOpacity=".6" />
        <path d="M30 -20 C 70 -50, 100 -10, 78 14 S 60 40, 90 40" fill="none" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" />
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={52 + i * 12} cy={-24 + (i % 2) * 22} r="5" fill="#67e8f9" />
        ))}
      </g>
      <text x="200" y="215" fill="#9db0c7" fontSize="11" fontFamily="Inter, sans-serif">Lp(a): LDL-like particle + apo(a)</text>
    </Frame>
  );
}

/** Protein + ligand docking concept. */
export function HmpvGraphic() {
  return (
    <Frame label="Schematic of a ligand docking into a protein binding pocket">
      <g transform="translate(150 120)">
        <path d="M-90 -20 C -80 -80, -20 -90, 10 -60 C 50 -80, 90 -40, 70 0 C 100 40, 60 80, 20 70 C -10 100, -80 90, -80 40 C -110 20, -105 -5, -90 -20 Z"
          fill="#0f766e" fillOpacity=".4" stroke="#2dd4bf" strokeWidth="2" />
        <path d="M-40 -10 C -10 -30, 20 -30, 40 0" fill="none" stroke="#081529" strokeWidth="14" strokeLinecap="round" />
        <path d="M-70 10 q 20 -25 40 0 t 40 0 t 40 0" fill="none" stroke="#67e8f9" strokeWidth="2" strokeOpacity=".7" />
      </g>
      <g transform="translate(300 70)">
        <polygon points="0,-18 16,-9 16,9 0,18 -16,9 -16,-9" fill="none" stroke="#67e8f9" strokeWidth="2.5" />
        <polygon points="16,-9 36,-18 52,-9 52,9 36,18 16,9" fill="none" stroke="#67e8f9" strokeWidth="2.5" />
        <line x1="0" y1="-18" x2="0" y2="-34" stroke="#67e8f9" strokeWidth="2.5" />
        <circle cy="-38" r="5" fill="#2dd4bf" />
      </g>
      <path d="M290 78 C 250 90, 215 105, 190 118" stroke="#67e8f9" strokeWidth="2" strokeDasharray="4 5" fill="none" />
      <text x="24" y="40" fill="#9db0c7" fontSize="11" fontFamily="Inter, sans-serif">HMPV F protein · ligand docking (schematic)</text>
      <text x="24" y="222" fill="#9db0c7" fontSize="11" fontFamily="Inter, sans-serif">Docking → interaction analysis → MD</text>
    </Frame>
  );
}

/** Generic biomarker panel concept, with no data shown. */
export function PcosGraphic() {
  return (
    <Frame label="Abstract schematic of a molecular biomarker panel">
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${60 + i * 62} ${60 + (i % 2) * 40})`}>
          <circle r="22" fill="#12305c" stroke={i % 2 ? "#67e8f9" : "#2dd4bf"} strokeWidth="2" />
          <circle r="7" fill={i % 2 ? "#67e8f9" : "#2dd4bf"} fillOpacity=".7" />
        </g>
      ))}
      <path d="M60 60 L122 100 L184 60 L246 100 L308 60" stroke="#2dd4bf" strokeOpacity=".5" fill="none" strokeDasharray="4 5" />
      <text x="24" y="200" fill="#9db0c7" fontSize="11" fontFamily="Inter, sans-serif">Biomarker discovery · conceptual</text>
    </Frame>
  );
}

export function ProjectGraphic({ kind }: { kind: "ncr3" | "lpa" | "hmpv" | "pcos" }) {
  if (kind === "ncr3") return <Ncr3Graphic />;
  if (kind === "lpa") return <LpaGraphic />;
  if (kind === "hmpv") return <HmpvGraphic />;
  return <PcosGraphic />;
}
