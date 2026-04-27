import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative bg-primary-teal overflow-hidden">
      {/* Mosque Silhouette SVG Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-full"
          viewBox="0 0 1440 300"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
        >
          {/* Sky gradient */}
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a6076" />
              <stop offset="100%" stopColor="#155566" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#skyGradient)" />

          {/* Left minaret */}
          <g fill="rgba(26, 60, 80, 0.6)">
            <rect x="100" y="120" width="30" height="180" />
            <rect x="95" y="100" width="40" height="30" />
            <polygon points="90,100 115,40 140,100" />
            <polygon points="115,40 115,20 120,20 117,40" />
            <ellipse cx="115" cy="85" rx="25" ry="10" />
          </g>

          {/* Left dome */}
          <g fill="rgba(26, 60, 80, 0.5)">
            <rect x="200" y="180" width="120" height="120" />
            <ellipse cx="260" cy="180" rx="60" ry="40" />
            <polygon points="260,140 260,120 265,120 262,140" />
          </g>

          {/* Center main dome */}
          <g fill="rgba(26, 60, 80, 0.7)">
            <rect x="400" y="150" width="200" height="150" />
            <ellipse cx="500" cy="150" rx="100" ry="70" />
            <polygon points="500,80 500,50 505,50 502,80" />
            <ellipse cx="500" cy="100" rx="15" ry="20" fill="rgba(26, 60, 80, 0.8)" />
          </g>

          {/* Center minaret tall */}
          <g fill="rgba(26, 60, 80, 0.65)">
            <rect x="650" y="80" width="25" height="220" />
            <rect x="645" y="60" width="35" height="25" />
            <polygon points="640,60 662,10 685,60" />
            <polygon points="662,10 662,-10 667,-10 664,10" />
            <ellipse cx="662" cy="45" rx="20" ry="8" />
            <ellipse cx="662" cy="120" rx="15" ry="6" />
          </g>

          {/* Right dome */}
          <g fill="rgba(26, 60, 80, 0.5)">
            <rect x="720" y="170" width="100" height="130" />
            <ellipse cx="770" cy="170" rx="50" ry="35" />
            <polygon points="770,135 770,115 775,115 772,135" />
          </g>

          {/* Right minaret */}
          <g fill="rgba(26, 60, 80, 0.6)">
            <rect x="880" y="100" width="28" height="200" />
            <rect x="875" y="80" width="38" height="25" />
            <polygon points="870,80 894,25 918,80" />
            <polygon points="894,25 894,5 899,5 896,25" />
            <ellipse cx="894" cy="65" rx="22" ry="9" />
          </g>

          {/* Far right structures */}
          <g fill="rgba(26, 60, 80, 0.45)">
            <rect x="1000" y="200" width="80" height="100" />
            <ellipse cx="1040" cy="200" rx="40" ry="28" />
            <rect x="1120" y="150" width="20" height="150" />
            <polygon points="1115,150 1130,110 1145,150" />
          </g>

          {/* Additional smaller domes */}
          <g fill="rgba(26, 60, 80, 0.4)">
            <ellipse cx="350" cy="220" rx="30" ry="20" />
            <rect x="320" y="220" width="60" height="80" />
          </g>

          {/* Ground line */}
          <rect x="0" y="290" width="1440" height="10" fill="rgba(26, 60, 80, 0.3)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-dm-serif mb-4 italic">
          Ürün Gruplarımız
        </h1>
        <nav className="flex items-center justify-center gap-2 text-white/80">
          <Link href="#urunler" className="hover:text-white transition-colors">
            Ana sayfa
          </Link>
          <span>»</span>
          <span className="text-white">Ürün Gruplarımız</span>
        </nav>
      </div>
    </section>
  );
};

export default HeroBanner;
