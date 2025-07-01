// Performance Test Suite for WindFlow CSS

class PerformanceTest {
    constructor() {
        this.results = {
            loadTime: [],
            fps: [],
            memory: [],
            paintTime: [],
            layoutShift: []
        };
        this.isRunning = false;
    }

    // Medir tiempo de carga del CSS
    async measureLoadTime() {
        const startTime = performance.now();
        
        // Crear link element para cargar CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../dist/windflow.css?t=' + Date.now(); // Cache bust
        
        return new Promise((resolve) => {
            link.onload = () => {
                const loadTime = performance.now() - startTime;
                this.results.loadTime.push(loadTime);
                link.remove();
                resolve(loadTime);
            };
            
            link.onerror = () => {
                resolve(-1);
            };
            
            document.head.appendChild(link);
        });
    }

    // Medir FPS durante animaciones
    measureFPS(duration = 5000) {
        return new Promise((resolve) => {
            const frames = [];
            let lastTime = performance.now();
            let animationId;
            
            const measureFrame = (currentTime) => {
                const delta = currentTime - lastTime;
                if (delta > 0) {
                    frames.push(1000 / delta);
                }
                lastTime = currentTime;
                
                if (currentTime - frames[0] < duration) {
                    animationId = requestAnimationFrame(measureFrame);
                } else {
                    cancelAnimationFrame(animationId);
                    const avgFPS = frames.reduce((a, b) => a + b, 0) / frames.length;
                    this.results.fps.push(avgFPS);
                    resolve(avgFPS);
                }
            };
            
            requestAnimationFrame(measureFrame);
        });
    }

    // Medir uso de memoria
    async measureMemory() {
        if (performance.memory) {
            const memoryInfo = {
                usedJSHeapSize: performance.memory.usedJSHeapSize / 1048576, // Convert to MB
                totalJSHeapSize: performance.memory.totalJSHeapSize / 1048576,
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit / 1048576
            };
            
            this.results.memory.push(memoryInfo.usedJSHeapSize);
            return memoryInfo;
        }
        return null;
    }

    // Medir tiempo de pintado
    measurePaintTime() {
        return new Promise((resolve) => {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const paintTimes = entries
                    .filter(entry => entry.name.includes('paint'))
                    .map(entry => entry.startTime);
                
                if (paintTimes.length > 0) {
                    const avgPaintTime = paintTimes.reduce((a, b) => a + b, 0) / paintTimes.length;
                    this.results.paintTime.push(avgPaintTime);
                    observer.disconnect();
                    resolve(avgPaintTime);
                }
            });
            
            observer.observe({ entryTypes: ['paint'] });
            
            // Trigger repaint
            const testElement = document.createElement('div');
            testElement.className = 'w-full h-screen bg-gradient-aurora animate-gradient';
            document.body.appendChild(testElement);
            
            setTimeout(() => {
                testElement.remove();
                observer.disconnect();
                resolve(this.results.paintTime[this.results.paintTime.length - 1] || 0);
            }, 1000);
        });
    }

    // Medir Cumulative Layout Shift
    measureLayoutShift() {
        return new Promise((resolve) => {
            let cls = 0;
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        cls += entry.value;
                    }
                }
            });
            
            observer.observe({ entryTypes: ['layout-shift'] });
            
            // Crear elementos que causen layout shift
            setTimeout(() => {
                const container = document.createElement('div');
                container.className = 'container mx-auto p-8';
                
                for (let i = 0; i < 10; i++) {
                    const card = document.createElement('div');
                    card.className = 'card glass-light p-6 mb-4 animate-fade-in';
                    card.style.animationDelay = `${i * 100}ms`;
                    card.innerHTML = `<h3 class="text-xl font-bold">Test Card ${i}</h3>`;
                    container.appendChild(card);
                }
                
                document.body.appendChild(container);
                
                setTimeout(() => {
                    container.remove();
                    observer.disconnect();
                    this.results.layoutShift.push(cls);
                    resolve(cls);
                }, 2000);
            }, 100);
        });
    }

    // Test de animaciones específicas
    async testAnimations() {
        const animations = [
            'fade-in', 'slide-up', 'slide-down', 'slide-left', 'slide-right',
            'zoom-in', 'zoom-out', 'rotate-in', 'flip-x', 'flip-y',
            'bounce', 'shake', 'pulse', 'ping', 'spin',
            'rubber-band', 'jello', 'swing', 'wobble', 'glitch'
        ];
        
        const results = {};
        
        for (const animation of animations) {
            const element = document.createElement('div');
            element.className = `w-32 h-32 bg-primary rounded-lg animate-${animation}`;
            element.style.position = 'fixed';
            element.style.top = '50%';
            element.style.left = '50%';
            element.style.transform = 'translate(-50%, -50%)';
            
            document.body.appendChild(element);
            
            // Medir FPS durante la animación
            const fps = await this.measureFPS(1000);
            results[animation] = fps;
            
            element.remove();
            
            // Pequeña pausa entre tests
            await new Promise(r => setTimeout(r, 100));
        }
        
        return results;
    }

    // Test de carga con múltiples elementos
    async stressTest(elementCount = 1000) {
        const container = document.createElement('div');
        container.className = 'fixed inset-0 overflow-auto';
        container.style.zIndex = '9999';
        
        const startTime = performance.now();
        
        // Crear muchos elementos con diferentes clases
        for (let i = 0; i < elementCount; i++) {
            const element = document.createElement('div');
            const classes = [
                'p-4', 'm-2', 'rounded-lg', 'shadow-md',
                'bg-surface', 'hover:shadow-xl', 'transition-all',
                'hover-lift', 'cursor-pointer'
            ];
            
            if (i % 10 === 0) classes.push('animate-fade-in');
            if (i % 15 === 0) classes.push('glass-light');
            if (i % 20 === 0) classes.push('gradient-aurora');
            
            element.className = classes.join(' ');
            element.textContent = `Element ${i}`;
            container.appendChild(element);
        }
        
        document.body.appendChild(container);
        
        // Medir tiempo de renderizado
        await new Promise(r => requestAnimationFrame(r));
        const renderTime = performance.now() - startTime;
        
        // Medir FPS con todos los elementos
        const fps = await this.measureFPS(2000);
        
        // Medir memoria
        const memory = await this.measureMemory();
        
        container.remove();
        
        return {
            elementCount,
            renderTime,
            fps,
            memory
        };
    }

    // Calcular puntuación general
    calculateScore() {
        const weights = {
            loadTime: 0.2,
            fps: 0.3,
            memory: 0.2,
            paintTime: 0.15,
            layoutShift: 0.15
        };
        
        const scores = {
            loadTime: this.normalizeScore(this.getAverage('loadTime'), 200, 50), // 50ms es excelente, 200ms es malo
            fps: this.normalizeScore(this.getAverage('fps'), 30, 60), // 60fps es excelente, 30fps es malo
            memory: this.normalizeScore(this.getAverage('memory'), 100, 20), // 20MB es excelente, 100MB es malo
            paintTime: this.normalizeScore(this.getAverage('paintTime'), 100, 10), // 10ms es excelente, 100ms es malo
            layoutShift: this.normalizeScore(this.getAverage('layoutShift'), 0.25, 0) // 0 es excelente, 0.25 es malo
        };
        
        let totalScore = 0;
        for (const [metric, weight] of Object.entries(weights)) {
            totalScore += scores[metric] * weight;
        }
        
        return Math.round(totalScore);
    }

    // Normalizar puntuación entre 0 y 100
    normalizeScore(value, worst, best) {
        if (worst > best) {
            return Math.max(0, Math.min(100, ((worst - value) / (worst - best)) * 100));
        } else {
            return Math.max(0, Math.min(100, ((value - worst) / (best - worst)) * 100));
        }
    }

    // Obtener promedio de una métrica
    getAverage(metric) {
        const values = this.results[metric];
        if (values.length === 0) return 0;
        return values.reduce((a, b) => a + b, 0) / values.length;
    }

    // Ejecutar suite completa de tests
    async runFullSuite() {
        this.isRunning = true;
        const suiteResults = {
            timestamp: new Date().toISOString(),
            tests: {}
        };
        
        // Test de carga
        console.log('🚀 Ejecutando test de carga...');
        for (let i = 0; i < 5; i++) {
            await this.measureLoadTime();
            await new Promise(r => setTimeout(r, 100));
        }
        suiteResults.tests.loadTime = this.getAverage('loadTime');
        
        // Test de FPS
        console.log('📊 Ejecutando test de FPS...');
        await this.measureFPS(5000);
        suiteResults.tests.fps = this.getAverage('fps');
        
        // Test de memoria
        console.log('💾 Ejecutando test de memoria...');
        await this.measureMemory();
        suiteResults.tests.memory = this.getAverage('memory');
        
        // Test de pintado
        console.log('🎨 Ejecutando test de pintado...');
        await this.measurePaintTime();
        suiteResults.tests.paintTime = this.getAverage('paintTime');
        
        // Test de layout shift
        console.log('📐 Ejecutando test de layout shift...');
        await this.measureLayoutShift();
        suiteResults.tests.layoutShift = this.getAverage('layoutShift');
        
        // Test de animaciones
        console.log('✨ Ejecutando test de animaciones...');
        suiteResults.tests.animations = await this.testAnimations();
        
        // Stress test
        console.log('💪 Ejecutando stress test...');
        suiteResults.tests.stressTest = await this.stressTest(500);
        
        // Calcular puntuación
        suiteResults.score = this.calculateScore();
        
        this.isRunning = false;
        return suiteResults;
    }

    // Exportar resultados
    exportResults() {
        const data = {
            timestamp: new Date().toISOString(),
            results: this.results,
            averages: {
                loadTime: this.getAverage('loadTime'),
                fps: this.getAverage('fps'),
                memory: this.getAverage('memory'),
                paintTime: this.getAverage('paintTime'),
                layoutShift: this.getAverage('layoutShift')
            },
            score: this.calculateScore()
        };
        
        return data;
    }
}

// Exportar para uso global
window.PerformanceTest = PerformanceTest;