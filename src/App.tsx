/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  // Animation duration: 3s
  // Frame 1: 0.0s
  // Frame 2: 0.3s (0.1)
  // Frame 3: 0.6s (0.2)
  // Frame 4: 0.9s (0.3)
  // Frame 5: 1.2s (0.4)
  // Frame 6: 1.5s (0.5)
  // Frame 7: 1.8s (0.6)
  // Frame 8: 2.4s (0.8)
  // Frame 9: 3.0s (1.0)

  // Gear properties
  const radius = 60;
  const teethCount = 12;
  const toothDepth = 4;
  const gearPath = Array.from({ length: teethCount * 2 }).map((_, i) => {
    const angle = (i * Math.PI) / teethCount;
    const r = i % 2 === 0 ? radius : radius + toothDepth;
    const x = 100 + r * Math.cos(angle - Math.PI / 2);
    const y = 100 + r * Math.sin(angle - Math.PI / 2);
    return `${i === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ") + " Z";

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] relative"
      id="app-container"
    >
      {/* Checkerboard Pattern for Transparency Visualization */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #222 25%, transparent 25%),
            linear-gradient(-45deg, #222 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #222 75%),
            linear-gradient(-45deg, transparent 75%, #222 75%)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}
      />

      <div className="relative z-10 w-[500px] h-[500px]">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-2xl"
          id="logo-svg"
        >
          {/* Letter B - Navy Blue */}
          <motion.text
            x="72"
            y="112"
            textAnchor="middle"
            fill="#0B1F3B"
            className="font-black"
            style={{ fontSize: "50px", fontFamily: "Inter, sans-serif" }}
            initial={{ x: -200, opacity: 0, scale: 1 }}
            animate={{
              x: [
                -150, // 0.0s
                -150, // 0.3s (start)
                -50,  // 0.6s
                -15,  // 0.9s
                0,    // 1.2s (center)
                0,    // 1.5s
                0,    // 1.8s
                0,    // 2.4s
                0,    // 3.0s
              ],
              opacity: [
                0, // 0.0s
                0, // 0.3s
                0.8, // 0.6s
                1,   // 0.9s
                1,   // 1.2s
                1,   // 1.5s
                1,   // 1.8s
                1,   // 2.4s
                1,   // 3.0s
              ],
              scale: [
                1,   // 0.0s
                1,   // 0.3s
                1,   // 0.6s
                1.15, // 0.9s (overshoot start)
                1,   // 1.2s (impact)
                1,   // 1.5s
                1,   // 1.8s
                1,   // 2.4s
                1,   // 3.0s
              ]
            }}
            transition={{
              duration: 3,
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1],
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 0.2
            }}
            id="letter-b"
          >
            B
          </motion.text>

          {/* Letter T - White */}
          <motion.text
            x="128"
            y="112"
            textAnchor="middle"
            fill="#FFFFFF"
            className="font-black"
            style={{ fontSize: "50px", fontFamily: "Inter, sans-serif" }}
            initial={{ x: 200, opacity: 0, scale: 1 }}
            animate={{
              x: [
                150, // 0.0s
                150, // 0.3s
                50,  // 0.6s
                15,  // 0.9s
                0,   // 1.2s
                0,   // 1.5s
                0,   // 1.8s
                0,   // 2.4s
                0,   // 3.0s
              ],
              opacity: [
                0, // 0.0s
                0, // 0.3s
                0.8, // 0.6s
                1,   // 0.9s
                1,   // 1.2s
                1,   // 1.5s
                1,   // 1.8s
                1,   // 2.4s
                1,   // 3.0s
              ],
              scale: [
                1,   // 0.0s
                1,   // 0.3s
                1,   // 0.6s
                1.15, // 0.9s
                1,   // 1.2s
                1,   // 1.5s
                1,   // 1.8s
                1,   // 2.4s
                1,   // 3.0s
              ]
            }}
            transition={{
              duration: 3,
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1],
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 0.2
            }}
            id="letter-t"
          >
            T
          </motion.text>

          {/* Gear Stroke Ring - Dark Grey/Steel */}
          <motion.path
            d={gearPath}
            fill="none"
            stroke="#475569"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
            animate={{
              pathLength: [
                0,   // 0.0s
                0,   // 0.3s
                0,   // 0.6s
                0,   // 0.9s
                0,   // 1.2s
                0.33, // 1.5s (120deg)
                0.8,  // 1.8s (260deg approx)
                1,    // 2.4s (360deg)
                1,    // 3.0s
              ],
              opacity: [
                0, 0, 0, 0, 0, 1, 1, 1, 1
              ],
              rotate: [
                -20, -20, -20, -20, -20, 0, 15, 30, 35
              ],
              scale: [
                0.9, 0.9, 0.9, 0.9, 0.9, 1, 1, 1.1, 1 // Pulse at completion (2.4s)
              ]
            }}
            transition={{
              duration: 3,
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0.2
            }}
            id="gear-path"
          />

          {/* Impact Subtle Glow */}
          <motion.circle
            cx="100"
            cy="100"
            r="40"
            fill="white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0, 0, 0, 0.2, 0, 0, 0, 0],
              scale: [0, 0, 0, 0, 1.5, 2, 0, 0, 0]
            }}
            transition={{
              duration: 3,
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0.2
            }}
            id="impact-glow"
          />
        </svg>
      </div>

      {/* Frame Status (for dev context) */}
      <div className="absolute top-8 left-8 flex flex-col gap-1 font-mono text-[10px] text-zinc-600 uppercase tracking-tighter">
        <span>Badshah Tools</span>
        <span>Anim Prototype v1.0</span>
        <span>30FPS Logic // Loop Enabled</span>
      </div>

      <div className="absolute bottom-8 right-8 font-mono text-[10px] text-zinc-700 italic">
        Transparent BG Simulation
      </div>
    </div>
  );
}
