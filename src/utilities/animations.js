/**
 * Animation Utilities - WindFlow Framework
 * Advanced animations, keyframes, and interactive effects
 */

module.exports = function generateAnimations(config) {
  let output = [];
  output.push('/* Animation Utilities - WindFlow Improvements */');
  
  // Keyframe definitions
  output.push(`@keyframes wf-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes wf-ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes wf-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}

@keyframes wf-bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}`);

  // Enhanced animations
  output.push(`@keyframes wf-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes wf-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes wf-slide-in-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes wf-slide-in-left {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes wf-slide-in-up {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

@keyframes wf-slide-in-down {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

@keyframes wf-zoom-in {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

@keyframes wf-zoom-out {
  from { transform: scale(1); }
  to { transform: scale(0); }
}

@keyframes wf-shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

@keyframes wf-wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes wf-flip {
  from { transform: perspective(400px) rotateY(0); }
  to { transform: perspective(400px) rotateY(360deg); }
}

@keyframes wf-heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}

@keyframes wf-rubber-band {
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
  100% { transform: scale3d(1, 1, 1); }
}

@keyframes wf-jello {
  11.1% { transform: skewX(-12.5deg) skewY(-12.5deg); }
  22.2% { transform: skewX(6.25deg) skewY(6.25deg); }
  33.3% { transform: skewX(-3.125deg) skewY(-3.125deg); }
  44.4% { transform: skewX(1.5625deg) skewY(1.5625deg); }
  55.5% { transform: skewX(-0.78125deg) skewY(-0.78125deg); }
  66.6% { transform: skewX(0.390625deg) skewY(0.390625deg); }
  77.7% { transform: skewX(-0.1953125deg) skewY(-0.1953125deg); }
  88.8% { transform: skewX(0.09765625deg) skewY(0.09765625deg); }
  100% { transform: skewX(0deg) skewY(0deg); }
}

@keyframes wf-swing {
  20% { transform: rotate3d(0, 0, 1, 15deg); }
  40% { transform: rotate3d(0, 0, 1, -10deg); }
  60% { transform: rotate3d(0, 0, 1, 5deg); }
  80% { transform: rotate3d(0, 0, 1, -5deg); }
  100% { transform: rotate3d(0, 0, 1, 0deg); }
}

@keyframes wf-tada {
  0% { transform: scale3d(1, 1, 1); }
  10%, 20% { transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }
  30%, 50%, 70%, 90% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }
  40%, 60%, 80% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }
  100% { transform: scale3d(1, 1, 1); }
}

@keyframes wf-wobble {
  0% { transform: translate3d(0, 0, 0); }
  15% { transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }
  30% { transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }
  45% { transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }
  60% { transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }
  75% { transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }
  100% { transform: translate3d(0, 0, 0); }
}

@keyframes wf-roll-in {
  0% { opacity: 0; transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}

@keyframes wf-roll-out {
  0% { opacity: 1; }
  100% { opacity: 0; transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); }
}

@keyframes wf-light-speed-in {
  0% { transform: translate3d(100%, 0, 0) skewX(-30deg); opacity: 0; }
  60% { transform: skewX(20deg); opacity: 1; }
  80% { transform: skewX(-5deg); }
  100% { transform: translate3d(0, 0, 0); }
}

@keyframes wf-light-speed-out {
  0% { opacity: 1; }
  100% { transform: translate3d(100%, 0, 0) skewX(30deg); opacity: 0; }
}

@keyframes wf-hinge {
  0% { transform-origin: top left; animation-timing-function: ease-in-out; }
  20%, 60% { transform: rotate3d(0, 0, 1, 80deg); transform-origin: top left; animation-timing-function: ease-in-out; }
  40%, 80% { transform: rotate3d(0, 0, 1, 60deg); transform-origin: top left; animation-timing-function: ease-in-out; opacity: 1; }
  100% { transform: translate3d(0, 700px, 0); opacity: 0; }
}

@keyframes wf-jack-in-the-box {
  0% { opacity: 0; transform: scale(0.1) rotate(30deg); transform-origin: center bottom; }
  50% { transform: rotate(-10deg); }
  70% { transform: rotate(3deg); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes wf-typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes wf-blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes wf-glow {
  0%, 100% { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor; }
  50% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor; }
}

@keyframes wf-neon {
  0%, 100% { 
    text-shadow: 
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #fff,
      0 0 20px #ff00de,
      0 0 35px #ff00de,
      0 0 40px #ff00de,
      0 0 50px #ff00de,
      0 0 75px #ff00de;
  }
  50% {
    text-shadow: 
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 8px #fff,
      0 0 12px #ff00de,
      0 0 20px #ff00de,
      0 0 25px #ff00de,
      0 0 30px #ff00de,
      0 0 45px #ff00de;
  }
}

@keyframes wf-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes wf-levitate {
  0%, 100% { transform: translateY(0) rotateX(0deg); }
  25% { transform: translateY(-10px) rotateX(5deg); }
  50% { transform: translateY(-20px) rotateX(0deg); }
  75% { transform: translateY(-10px) rotateX(-5deg); }
}

@keyframes wf-morphing {
  0%, 100% { border-radius: 0; }
  25% { border-radius: 50% 0; }
  50% { border-radius: 50%; }
  75% { border-radius: 0 50%; }
}

@keyframes wf-glitch {
  0%, 100% { transform: translate(0); filter: hue-rotate(0deg); }
  10% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
  20% { transform: translate(-1px, -1px); filter: hue-rotate(180deg); }
  30% { transform: translate(2px, 1px); filter: hue-rotate(270deg); }
  40% { transform: translate(1px, -1px); filter: hue-rotate(360deg); }
  50% { transform: translate(-1px, 2px); filter: hue-rotate(45deg); }
  60% { transform: translate(-2px, 1px); filter: hue-rotate(135deg); }
  70% { transform: translate(2px, 1px); filter: hue-rotate(225deg); }
  80% { transform: translate(-1px, -1px); filter: hue-rotate(315deg); }
  90% { transform: translate(1px, 2px); filter: hue-rotate(405deg); }
}

@keyframes wf-matrix {
  0% { transform: translateY(-100%) scaleY(0); }
  50% { transform: translateY(0) scaleY(1); }
  100% { transform: translateY(100%) scaleY(0); }
}

@keyframes wf-loading-dots {
  0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

@keyframes wf-loading-bars {
  0%, 40%, 100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
}

@keyframes wf-loading-spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes wf-loading-pulse-ring {
  0% { transform: scale(0.1); opacity: 1; }
  100% { transform: scale(1.2); opacity: 0; }
}

@keyframes wf-morph {
  0%, 100% { 
    border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
    transform: rotate(0deg);
  }
  25% { 
    border-radius: 60% 40% 40% 60% / 40% 60% 30% 70%;
    transform: rotate(90deg);
  }
  50% { 
    border-radius: 40% 60% 60% 40% / 70% 40% 60% 30%;
    transform: rotate(180deg);
  }
  75% { 
    border-radius: 60% 40% 40% 60% / 30% 70% 40% 60%;
    transform: rotate(270deg);
  }
}

@keyframes wf-glitch-2 {
  0%, 100% { 
    clip-path: inset(0 0 0 0);
    transform: translate(0);
  }
  5% { 
    clip-path: inset(40% 0 61% 0);
    transform: translate(-10px, 5px);
  }
  10% { 
    clip-path: inset(92% 0 1% 0);
    transform: translate(10px, -5px);
  }
  15% { 
    clip-path: inset(43% 0 1% 0);
    transform: translate(-5px, 2px);
  }
  20% { 
    clip-path: inset(25% 0 58% 0);
    transform: translate(5px, -2px);
  }
}

@keyframes wf-float-up {
  0% { 
    transform: translateY(0);
    opacity: 1;
  }
  100% { 
    transform: translateY(-100px);
    opacity: 0;
  }
}

@keyframes wf-float-down {
  0% { 
    transform: translateY(0);
    opacity: 1;
  }
  100% { 
    transform: translateY(100px);
    opacity: 0;
  }
}

@keyframes wf-shake-x {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

@keyframes wf-shake-y {
  0%, 100% { transform: translateY(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateY(-10px); }
  20%, 40%, 60%, 80% { transform: translateY(10px); }
}

@keyframes wf-ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

@keyframes wf-wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}`);

  // Animation classes
  const animations = {
    // Basic animations
    'spin': 'wf-spin 1s linear infinite',
    'ping': 'wf-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    'pulse': 'wf-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    'bounce': 'wf-bounce 1s infinite',
    
    // Fade animations
    'fade-in': 'wf-fade-in 0.5s ease-out',
    'fade-out': 'wf-fade-out 0.5s ease-out',
    
    // Slide animations
    'slide-in-right': 'wf-slide-in-right 0.5s ease-out',
    'slide-in-left': 'wf-slide-in-left 0.5s ease-out',
    'slide-in-up': 'wf-slide-in-up 0.5s ease-out',
    'slide-in-down': 'wf-slide-in-down 0.5s ease-out',
    
    // Zoom animations
    'zoom-in': 'wf-zoom-in 0.3s ease-out',
    'zoom-out': 'wf-zoom-out 0.3s ease-out',
    
    // Interactive animations
    'shake': 'wf-shake 0.5s ease-in-out',
    'wiggle': 'wf-wiggle 1s ease-in-out infinite',
    'flip': 'wf-flip 0.6s ease-in-out',
    'heartbeat': 'wf-heartbeat 1.5s ease-in-out infinite',
    
    // Advanced attention seekers
    'rubber-band': 'wf-rubber-band 1s ease-out',
    'jello': 'wf-jello 1s ease-out',
    'swing': 'wf-swing 1s ease-out',
    'tada': 'wf-tada 1s ease-out',
    'wobble': 'wf-wobble 1s ease-out',
    
    // Advanced entrances
    'roll-in': 'wf-roll-in 1s ease-out',
    'light-speed-in': 'wf-light-speed-in 1s ease-out',
    'jack-in-the-box': 'wf-jack-in-the-box 1s ease-out',
    
    // Advanced exits
    'roll-out': 'wf-roll-out 1s ease-out',
    'light-speed-out': 'wf-light-speed-out 1s ease-out',
    'hinge': 'wf-hinge 2s ease-out',
    
    // Text effects
    'typewriter': 'wf-typewriter 2s steps(40, end)',
    'blink': 'wf-blink 1s step-end infinite',
    'glow': 'wf-glow 2s ease-in-out infinite',
    'neon': 'wf-neon 1.5s ease-in-out infinite alternate',
    
    // Floating effects
    'float': 'wf-float 3s ease-in-out infinite',
    'levitate': 'wf-levitate 4s ease-in-out infinite',
    
    // Modern effects
    'morphing': 'wf-morphing 2s ease-in-out infinite',
    'glitch': 'wf-glitch 2s linear infinite',
    'matrix': 'wf-matrix 1s ease-in-out',
    
    // Loading animations
    'loading-dots': 'wf-loading-dots 1.4s ease-in-out infinite',
    'loading-bars': 'wf-loading-bars 1.2s ease-in-out infinite',
    'loading-spinner': 'wf-loading-spinner 1s linear infinite',
    'loading-pulse-ring': 'wf-loading-pulse-ring 1s ease-out infinite',
    
    // New animations
    'morph': 'wf-morph 8s ease-in-out infinite',
    'glitch-2': 'wf-glitch-2 3s linear infinite',
    'float-up': 'wf-float-up 2s ease-out',
    'float-down': 'wf-float-down 2s ease-out',
    'shake-x': 'wf-shake-x 0.5s ease-in-out',
    'shake-y': 'wf-shake-y 0.5s ease-in-out',
    'ripple': 'wf-ripple 0.6s ease-out',
    'wave': 'wf-wave 2s ease-in-out infinite'
  };

  Object.entries(animations).forEach(([name, value]) => {
    output.push(`.animate-${name} { animation: ${value}; }`);
  });

  // Animation utilities
  output.push('.animate-none { animation: none; }');
  
  // Animation duration
  const durations = {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
    '700': '700ms',
    '1000': '1000ms'
  };
  
  Object.entries(durations).forEach(([key, value]) => {
    output.push(`.duration-${key} { animation-duration: ${value}; }`);
  });

  // Animation delay
  Object.entries(durations).forEach(([key, value]) => {
    output.push(`.delay-${key} { animation-delay: ${value}; }`);
  });

  // Animation iteration
  output.push('.animate-once { animation-iteration-count: 1; }');
  output.push('.animate-twice { animation-iteration-count: 2; }');
  output.push('.animate-infinite { animation-iteration-count: infinite; }');

  // Animation direction
  output.push('.animate-normal { animation-direction: normal; }');
  output.push('.animate-reverse { animation-direction: reverse; }');
  output.push('.animate-alternate { animation-direction: alternate; }');
  output.push('.animate-alternate-reverse { animation-direction: alternate-reverse; }');

  // Animation fill mode
  output.push('.animate-fill-none { animation-fill-mode: none; }');
  output.push('.animate-fill-forwards { animation-fill-mode: forwards; }');
  output.push('.animate-fill-backwards { animation-fill-mode: backwards; }');
  output.push('.animate-fill-both { animation-fill-mode: both; }');

  // Animation play state
  output.push('.animate-play { animation-play-state: running; }');
  output.push('.animate-pause { animation-play-state: paused; }');

  // Hover animations
  Object.entries(animations).forEach(([name, value]) => {
    output.push(`.hover\\:animate-${name}:hover { animation: ${value}; }`);
  });

  // Loading components and effects
  output.push(`/* Loading Components */
.loading-dots {
  display: inline-flex;
  gap: 0.25rem;
}

.loading-dots > div {
  width: 0.5rem;
  height: 0.5rem;
  background-color: currentColor;
  border-radius: 50%;
  animation: wf-loading-dots 1.4s ease-in-out infinite;
}

.loading-dots > div:nth-child(1) { animation-delay: -0.32s; }
.loading-dots > div:nth-child(2) { animation-delay: -0.16s; }

.loading-bars {
  display: inline-flex;
  gap: 0.125rem;
  align-items: center;
}

.loading-bars > div {
  width: 0.25rem;
  height: 1rem;
  background-color: currentColor;
  animation: wf-loading-bars 1.2s ease-in-out infinite;
}

.loading-bars > div:nth-child(1) { animation-delay: -1.1s; }
.loading-bars > div:nth-child(2) { animation-delay: -1.0s; }
.loading-bars > div:nth-child(3) { animation-delay: -0.9s; }
.loading-bars > div:nth-child(4) { animation-delay: -0.8s; }
.loading-bars > div:nth-child(5) { animation-delay: -0.7s; }

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 0.25rem solid #f3f3f3;
  border-top: 0.25rem solid currentColor;
  border-radius: 50%;
  animation: wf-loading-spinner 1s linear infinite;
}

.loading-pulse-ring {
  width: 2rem;
  height: 2rem;
  border: 0.125rem solid currentColor;
  border-radius: 50%;
  animation: wf-loading-pulse-ring 1s ease-out infinite;
}

/* Button hover effects */
.btn-hover-lift {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-hover-glow {
  transition: box-shadow 0.3s ease;
}

.btn-hover-glow:hover {
  box-shadow: 0 0 20px currentColor;
}

.btn-hover-scale {
  transition: transform 0.2s ease;
}

.btn-hover-scale:hover {
  transform: scale(1.05);
}

/* Text effects utilities */
.text-glitch {
  position: relative;
}

.text-glitch::before,
.text-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text-glitch::before {
  animation: wf-glitch 2s linear infinite;
  color: #ff0000;
  z-index: -1;
}

.text-glitch::after {
  animation: wf-glitch 2s linear infinite reverse;
  color: #00ffff;
  z-index: -2;
}

.text-typewriter {
  overflow: hidden;
  border-right: 2px solid currentColor;
  white-space: nowrap;
  animation: wf-typewriter 3s steps(40, end), wf-blink 0.75s step-end infinite;
}

/* Card hover effects */
.card-hover-float {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover-float:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.card-hover-tilt {
  transition: transform 0.3s ease;
}

.card-hover-tilt:hover {
  transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
}

/* Scroll animations */
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.parallax {
  transform: translateZ(0);
  transition: transform 0.1s ease-out;
}`);

  // Easing functions
  output.push(`/* Custom Easing Functions */
.ease-elastic { animation-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6); }
.ease-back { animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.ease-bounce { animation-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6); }
.ease-expo { animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035); }
.ease-circ { animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335); }
.ease-sine { animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715); }
.ease-quad { animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53); }
.ease-cubic { animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
.ease-quart { animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22); }
.ease-quint { animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06); }`);

  return output.join('\n\n');
};