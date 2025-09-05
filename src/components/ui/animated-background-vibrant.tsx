'use client';

interface AnimatedBackgroundVibrantProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function AnimatedBackgroundVibrant({
  className = '',
  intensity = 'medium',
}: AnimatedBackgroundVibrantProps) {
  const getIntensityValues = () => {
    switch (intensity) {
      case 'low':
        return { opacity: 0.3, blur: 'blur-2xl', scale: 0.8 };
      case 'high':
        return { opacity: 0.8, blur: 'blur-4xl', scale: 1.2 };
      default:
        return { opacity: 0.6, blur: 'blur-3xl', scale: 1 };
    }
  };

  const { opacity, blur, scale } = getIntensityValues();

  return (
    <>
      {/* Base gradient overlay with theme awareness */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-background/95 via-muted/90 to-background/95 ${className}`}
      />

      {/* Animated gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Corner coverage elements - positioned to extend beyond viewport */}
        <div
          className={`absolute -top-32 -left-32 w-[800px] h-[800px] bg-gradient-to-br from-violet-500/70 via-purple-500/80 to-fuchsia-500/70 rounded-full ${blur} animate-float-slow animate-pulse-vibrant`}
          style={{
            opacity,
            transform: `scale(${scale * 1.2})`,
            animationDelay: '0s',
          }}
        />

        <div
          className={`absolute -top-32 -right-32 w-[900px] h-[900px] bg-gradient-to-bl from-cyan-400/75 via-blue-500/85 to-indigo-600/75 rounded-full ${blur} animate-float-reverse animate-pulse-vibrant`}
          style={{
            opacity,
            transform: `scale(${scale * 1.3})`,
            animationDelay: '1s',
          }}
        />

        <div
          className={`absolute -bottom-32 -right-32 w-[1000px] h-[1000px] bg-gradient-to-tl from-rose-500/80 via-pink-500/90 to-red-500/80 rounded-full ${blur} animate-float-diagonal animate-pulse-vibrant`}
          style={{
            opacity,
            transform: `scale(${scale * 1.4})`,
            animationDelay: '2s',
          }}
        />

        <div
          className={`absolute -bottom-32 -left-32 w-[850px] h-[850px] bg-gradient-to-tr from-emerald-400/75 via-teal-500/85 to-cyan-500/75 rounded-full ${blur} animate-float-up animate-pulse-vibrant`}
          style={{
            opacity,
            transform: `scale(${scale * 1.25})`,
            animationDelay: '0.5s',
          }}
        />

        {/* Edge coverage elements */}
        <div
          className={`absolute -top-20 left-1/2 transform -translate-x-1/2 w-[120vw] h-[600px] bg-gradient-to-b from-purple-500/60 via-violet-500/70 to-transparent rounded-full ${blur} animate-float-wave animate-pulse-vibrant`}
          style={{
            opacity: opacity * 0.8,
            transform: `translateX(-50%) scale(${scale})`,
            animationDelay: '2.8s',
          }}
        />

        <div
          className={`absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[120vw] h-[600px] bg-gradient-to-t from-teal-500/60 via-cyan-500/70 to-transparent rounded-full ${blur} animate-float-reverse animate-pulse-vibrant`}
          style={{
            opacity: opacity * 0.8,
            transform: `translateX(-50%) scale(${scale})`,
            animationDelay: '1.7s',
          }}
        />

        <div
          className={`absolute -left-20 top-1/2 transform -translate-y-1/2 w-[600px] h-[120vh] bg-gradient-to-r from-green-500/60 via-emerald-500/70 to-transparent rounded-full ${blur} animate-float-up animate-pulse-vibrant`}
          style={{
            opacity: opacity * 0.8,
            transform: `translateY(-50%) scale(${scale})`,
            animationDelay: '3.2s',
          }}
        />

        <div
          className={`absolute -right-20 top-1/2 transform -translate-y-1/2 w-[600px] h-[120vh] bg-gradient-to-l from-orange-500/60 via-red-500/70 to-transparent rounded-full ${blur} animate-float-bounce animate-pulse-vibrant`}
          style={{
            opacity: opacity * 0.8,
            transform: `translateY(-50%) scale(${scale})`,
            animationDelay: '2.3s',
          }}
        />

        {/* Center rotating element - larger for better coverage */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[900px] bg-gradient-to-r from-orange-500/60 via-yellow-500/70 to-amber-500/60 rounded-full ${blur} animate-rotate-slow animate-pulse-vibrant`}
          style={{
            opacity: opacity * 0.7,
            transform: `translate(-50%, -50%) scale(${scale * 1.1})`,
            animationDelay: '1.5s',
          }}
        />

        {/* Additional vibrant floating elements - repositioned for better coverage */}
        <div
          className={`absolute top-10 left-10 w-[700px] h-[700px] bg-gradient-to-br from-lime-400/70 via-green-500/80 to-emerald-600/70 rounded-full ${blur} animate-float-bounce animate-pulse-vibrant`}
          style={{
            opacity,
            transform: `scale(${scale * 1.1})`,
            animationDelay: '0.8s',
          }}
        />

        <div
          className={`absolute bottom-10 right-10 w-[750px] h-[750px] bg-gradient-to-tl from-sky-400/65 via-blue-400/75 to-indigo-500/65 rounded-full ${blur} animate-float-wave animate-pulse-vibrant`}
          style={{
            opacity,
            transform: `scale(${scale * 1.2})`,
            animationDelay: '1.2s',
          }}
        />

        <div
          className={`absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/75 via-violet-500/85 to-fuchsia-600/75 rounded-full ${blur} animate-float-spiral animate-pulse-vibrant`}
          style={{
            opacity,
            transform: `scale(${scale})`,
            animationDelay: '0.3s',
          }}
        />

        {/* Small accent orbs for extra vibrancy */}
        <div
          className={`absolute top-16 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-pink-400/80 via-rose-500/90 to-red-400/80 rounded-full ${blur} animate-float-fast animate-pulse-vibrant`}
          style={{
            opacity: opacity * 1.2,
            transform: `scale(${scale * 0.8})`,
            animationDelay: '2.5s',
          }}
        />

        <div
          className={`absolute bottom-16 left-1/3 w-[450px] h-[450px] bg-gradient-to-l from-teal-400/75 via-cyan-500/85 to-blue-400/75 rounded-full ${blur} animate-float-zigzag animate-pulse-vibrant`}
          style={{
            opacity: opacity * 1.1,
            transform: `scale(${scale * 0.9})`,
            animationDelay: '1.8s',
          }}
        />

        <div
          className={`absolute top-2/3 left-2/3 w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/80 via-orange-500/90 to-red-500/80 rounded-full ${blur} animate-float-orbit animate-pulse-vibrant`}
          style={{
            opacity: opacity * 1.3,
            transform: `scale(${scale * 0.85})`,
            animationDelay: '3s',
          }}
        />

        {/* Additional coverage elements to fill any remaining gaps */}
        <div
          className={`absolute top-1/6 left-1/6 w-[550px] h-[550px] bg-gradient-to-br from-indigo-400/65 via-purple-400/75 to-pink-400/65 rounded-full ${blur} animate-float-spiral animate-pulse-vibrant`}
          style={{
            opacity: opacity * 0.9,
            transform: `scale(${scale * 0.95})`,
            animationDelay: '4s',
          }}
        />

        <div
          className={`absolute bottom-1/6 right-1/6 w-[580px] h-[580px] bg-gradient-to-tl from-cyan-400/70 via-teal-400/80 to-green-400/70 rounded-full ${blur} animate-float-reverse animate-pulse-vibrant`}
          style={{
            opacity: opacity * 0.9,
            transform: `scale(${scale * 1.05})`,
            animationDelay: '3.5s',
          }}
        />
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(15px) translateX(-10px);
          }
          50% {
            transform: translateY(25px) translateX(20px);
          }
          75% {
            transform: translateY(10px) translateX(-5px);
          }
        }

        @keyframes float-diagonal {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) translateX(-15px) rotate(90deg);
          }
          50% {
            transform: translateY(-30px) translateX(-30px) rotate(180deg);
          }
          75% {
            transform: translateY(-15px) translateX(-15px) rotate(270deg);
          }
        }

        @keyframes float-up {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-40px) scale(1.1);
          }
        }

        @keyframes float-bounce {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-25px) translateX(15px);
          }
          50% {
            transform: translateY(-50px) translateX(0px);
          }
          75% {
            transform: translateY(-25px) translateX(-15px);
          }
        }

        @keyframes float-wave {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(20px);
          }
          50% {
            transform: translateY(0px) translateX(0px);
          }
          75% {
            transform: translateY(10px) translateX(-20px);
          }
        }

        @keyframes float-spiral {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(20px) rotate(90deg);
          }
          50% {
            transform: translateY(0px) translateX(0px) rotate(180deg);
          }
          75% {
            transform: translateY(20px) translateX(-20px) rotate(270deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(-5px) translateX(-10px);
          }
        }

        @keyframes float-zigzag {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          20% {
            transform: translateY(-10px) translateX(15px);
          }
          40% {
            transform: translateY(-20px) translateX(-10px);
          }
          60% {
            transform: translateY(-15px) translateX(20px);
          }
          80% {
            transform: translateY(-5px) translateX(-15px);
          }
        }

        @keyframes float-orbit {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) translateX(15px) rotate(90deg);
          }
          50% {
            transform: translateY(0px) translateX(30px) rotate(180deg);
          }
          75% {
            transform: translateY(15px) translateX(15px) rotate(270deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
          }
        }

        @keyframes rotate-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes pulse-vibrant {
          0%,
          100% {
            opacity: var(--pulse-opacity-start, 0.4);
            transform: scale(1);
          }
          50% {
            opacity: var(--pulse-opacity-peak, 0.8);
            transform: scale(1.05);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        .animate-float-diagonal {
          animation: float-diagonal 12s ease-in-out infinite;
        }
        .animate-float-up {
          animation: float-up 6s ease-in-out infinite;
        }
        .animate-float-bounce {
          animation: float-bounce 7s ease-in-out infinite;
        }
        .animate-float-wave {
          animation: float-wave 9s ease-in-out infinite;
        }
        .animate-float-spiral {
          animation: float-spiral 15s linear infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .animate-float-zigzag {
          animation: float-zigzag 5s ease-in-out infinite;
        }
        .animate-float-orbit {
          animation: float-orbit 11s linear infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        .animate-pulse-vibrant {
          animation: pulse-vibrant 3s ease-in-out infinite;
          --pulse-opacity-start: 0.6;
          --pulse-opacity-peak: 1;
        }
      `}</style>
    </>
  );
}
