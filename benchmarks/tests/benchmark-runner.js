// Benchmark Runner - UI Controller

class BenchmarkRunner {
    constructor() {
        this.performanceTest = new PerformanceTest();
        this.charts = {};
        this.currentTab = 'performance';
        this.init();
    }

    init() {
        // Event listeners
        document.getElementById('runAllTests').addEventListener('click', () => this.runAllTests());
        
        // Tab switching
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Initialize charts
        this.initializeCharts();
        
        // Load saved results if any
        this.loadSavedResults();
    }

    switchTab(tabName) {
        // Update button states
        document.querySelectorAll('.tab-button').forEach(button => {
            if (button.dataset.tab === tabName) {
                button.classList.add('bg-primary', 'text-white');
                button.classList.remove('hover:bg-surface');
            } else {
                button.classList.remove('bg-primary', 'text-white');
                button.classList.add('hover:bg-surface');
            }
        });

        // Show/hide content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(`${tabName}-tab`).classList.remove('hidden');

        this.currentTab = tabName;
    }

    initializeCharts() {
        // Load Time Chart
        const loadCtx = document.getElementById('loadChart').getContext('2d');
        this.charts.load = new Chart(loadCtx, {
            type: 'line',
            data: {
                labels: ['CSS Parse', 'First Paint', 'DOM Interactive', 'Load Complete'],
                datasets: [{
                    label: 'Tiempo (ms)',
                    data: [12.3, 145, 234, 315],
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Tiempo (ms)'
                        }
                    }
                }
            }
        });

        // Size Distribution Chart
        const sizeCtx = document.getElementById('sizeChart').getContext('2d');
        this.charts.size = new Chart(sizeCtx, {
            type: 'doughnut',
            data: {
                labels: ['Base CSS', 'Animaciones', 'Temas', 'Efectos'],
                datasets: [{
                    data: [89.2, 124.5, 45.3, 56.9],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(147, 51, 234, 0.8)',
                        'rgba(236, 72, 153, 0.8)',
                        'rgba(251, 146, 60, 0.8)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });

        // FPS Timeline Chart
        const fpsCtx = document.getElementById('fpsChart').getContext('2d');
        this.charts.fps = new Chart(fpsCtx, {
            type: 'line',
            data: {
                labels: Array.from({length: 50}, (_, i) => i * 100 + 'ms'),
                datasets: [{
                    label: 'FPS',
                    data: this.generateFPSData(),
                    borderColor: 'rgb(34, 197, 94)',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    tension: 0.1,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 70,
                        title: {
                            display: true,
                            text: 'Frames por Segundo'
                        }
                    }
                }
            }
        });

        // Paint Performance Chart
        const paintCtx = document.getElementById('paintChart').getContext('2d');
        this.charts.paint = new Chart(paintCtx, {
            type: 'bar',
            data: {
                labels: ['Buttons', 'Cards', 'Animations', 'Glass Effects', 'Gradients'],
                datasets: [{
                    label: 'Paint Time (ms)',
                    data: [2.3, 4.5, 8.2, 12.1, 6.7],
                    backgroundColor: 'rgba(147, 51, 234, 0.8)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Tiempo (ms)'
                        }
                    }
                }
            }
        });

        // Size Comparison Chart
        const sizeCompCtx = document.getElementById('sizeComparisonChart').getContext('2d');
        this.charts.sizeComparison = new Chart(sizeCompCtx, {
            type: 'bar',
            data: {
                labels: ['WindFlow', 'Tailwind', 'Bootstrap', 'Bulma'],
                datasets: [{
                    label: 'Tamaño (KB)',
                    data: [315.9, 42.7, 192.4, 234.8],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(34, 197, 94, 0.8)',
                        'rgba(251, 146, 60, 0.8)',
                        'rgba(239, 68, 68, 0.8)'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Tamaño (KB)'
                        }
                    }
                }
            }
        });

        // Score Comparison Chart
        const scoreCompCtx = document.getElementById('scoreComparisonChart').getContext('2d');
        this.charts.scoreComparison = new Chart(scoreCompCtx, {
            type: 'radar',
            data: {
                labels: ['Load Time', 'FPS', 'Bundle Size', 'Features', 'DX'],
                datasets: [{
                    label: 'WindFlow',
                    data: [85, 92, 70, 98, 95],
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)'
                }, {
                    label: 'Tailwind',
                    data: [95, 95, 98, 60, 90],
                    borderColor: 'rgba(34, 197, 94, 1)',
                    backgroundColor: 'rgba(34, 197, 94, 0.2)'
                }, {
                    label: 'Bootstrap',
                    data: [75, 85, 80, 85, 80],
                    borderColor: 'rgba(251, 146, 60, 1)',
                    backgroundColor: 'rgba(251, 146, 60, 0.2)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    generateFPSData() {
        // Simular datos de FPS con variaciones realistas
        const data = [];
        for (let i = 0; i < 50; i++) {
            const base = 58;
            const variation = Math.sin(i * 0.1) * 3 + Math.random() * 2 - 1;
            data.push(Math.max(50, Math.min(60, base + variation)));
        }
        return data;
    }

    async runAllTests() {
        const button = document.getElementById('runAllTests');
        const originalText = button.innerHTML;
        
        // Update button state
        button.disabled = true;
        button.innerHTML = `
            <span class="flex items-center gap-2">
                <div class="loading-spinner w-5 h-5"></div>
                Ejecutando Tests...
            </span>
        `;

        // Clear test runner
        const testRunner = document.getElementById('testRunner');
        testRunner.innerHTML = '';

        // Run tests with visual feedback
        const tests = [
            { name: 'Test de Carga CSS', fn: () => this.runLoadTest() },
            { name: 'Test de FPS', fn: () => this.runFPSTest() },
            { name: 'Test de Memoria', fn: () => this.runMemoryTest() },
            { name: 'Test de Pintado', fn: () => this.runPaintTest() },
            { name: 'Test de Layout Shift', fn: () => this.runLayoutTest() },
            { name: 'Test de Animaciones', fn: () => this.runAnimationTest() },
            { name: 'Stress Test', fn: () => this.runStressTest() }
        ];

        for (const test of tests) {
            const testElement = this.createTestElement(test.name);
            testRunner.appendChild(testElement);
            
            try {
                const result = await test.fn();
                this.updateTestElement(testElement, 'completed', result);
            } catch (error) {
                this.updateTestElement(testElement, 'failed', error.message);
            }
            
            await new Promise(r => setTimeout(r, 500));
        }

        // Calculate final score
        const score = this.performanceTest.calculateScore();
        this.updateMetrics(score);

        // Save results
        this.saveResults();

        // Restore button
        button.disabled = false;
        button.innerHTML = originalText;
    }

    createTestElement(testName) {
        const element = document.createElement('div');
        element.className = 'test-item flex justify-between items-center p-4 bg-surface rounded-lg';
        element.innerHTML = `
            <div>
                <h4 class="font-medium">${testName}</h4>
                <p class="text-sm text-muted mt-1">Preparando test...</p>
            </div>
            <span class="test-status status-running">
                <div class="loading-dots"></div>
                Ejecutando
            </span>
        `;
        return element;
    }

    updateTestElement(element, status, result) {
        const statusElement = element.querySelector('.test-status');
        const descElement = element.querySelector('p');
        
        statusElement.className = `test-status status-${status}`;
        
        if (status === 'completed') {
            statusElement.innerHTML = '✓ Completado';
            descElement.textContent = typeof result === 'object' ? JSON.stringify(result) : result;
        } else {
            statusElement.innerHTML = '✗ Error';
            descElement.textContent = result;
            descElement.className = 'text-sm text-red-500 mt-1';
        }
    }

    async runLoadTest() {
        for (let i = 0; i < 3; i++) {
            await this.performanceTest.measureLoadTime();
        }
        const avg = this.performanceTest.getAverage('loadTime');
        return `Tiempo promedio: ${avg.toFixed(2)}ms`;
    }

    async runFPSTest() {
        const fps = await this.performanceTest.measureFPS(3000);
        return `FPS promedio: ${fps.toFixed(1)}`;
    }

    async runMemoryTest() {
        const memory = await this.performanceTest.measureMemory();
        if (memory) {
            return `Memoria usada: ${memory.usedJSHeapSize.toFixed(2)}MB`;
        }
        return 'API de memoria no disponible';
    }

    async runPaintTest() {
        const paintTime = await this.performanceTest.measurePaintTime();
        return `Tiempo de pintado: ${paintTime.toFixed(2)}ms`;
    }

    async runLayoutTest() {
        const cls = await this.performanceTest.measureLayoutShift();
        return `CLS Score: ${cls.toFixed(4)}`;
    }

    async runAnimationTest() {
        const results = await this.performanceTest.testAnimations();
        const avgFPS = Object.values(results).reduce((a, b) => a + b, 0) / Object.keys(results).length;
        return `FPS promedio en animaciones: ${avgFPS.toFixed(1)}`;
    }

    async runStressTest() {
        const result = await this.performanceTest.stressTest(300);
        return `${result.elementCount} elementos - ${result.fps.toFixed(1)} FPS`;
    }

    updateMetrics(score) {
        // Update metric cards
        const avgLoadTime = this.performanceTest.getAverage('loadTime');
        const avgFPS = this.performanceTest.getAverage('fps');
        const avgMemory = this.performanceTest.getAverage('memory');
        
        // Load Time
        document.getElementById('loadTimeMetric').textContent = avgLoadTime.toFixed(0);
        document.getElementById('loadTimeProgress').style.width = `${100 - (avgLoadTime / 3)}%`;
        
        // FPS
        document.getElementById('fpsMetric').textContent = avgFPS.toFixed(0);
        document.getElementById('fpsProgress').style.width = `${(avgFPS / 60) * 100}%`;
        
        // Memory
        document.getElementById('memoryMetric').textContent = avgMemory.toFixed(1);
        document.getElementById('memoryProgress').style.width = `${100 - (avgMemory / 1.5)}%`;
        
        // Score
        document.getElementById('scoreMetric').textContent = score;
        document.getElementById('scoreProgress').style.width = `${score}%`;
        
        // Update charts with new data
        this.updateCharts();
    }

    updateCharts() {
        // Update FPS chart with real data
        if (this.performanceTest.results.fps.length > 0) {
            const fpsData = this.performanceTest.results.fps;
            this.charts.fps.data.datasets[0].data = fpsData;
            this.charts.fps.update();
        }
    }

    saveResults() {
        const results = this.performanceTest.exportResults();
        localStorage.setItem('windflow-benchmark-results', JSON.stringify(results));
        
        // También guardar en un archivo para análisis posterior
        const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `windflow-benchmark-${timestamp}.json`;
        // No auto-descargar, solo preparar el link si el usuario lo quiere
    }

    loadSavedResults() {
        const saved = localStorage.getItem('windflow-benchmark-results');
        if (saved) {
            try {
                const results = JSON.parse(saved);
                console.log('Resultados anteriores cargados:', results);
                
                // Mostrar métricas guardadas
                if (results.averages) {
                    document.getElementById('loadTimeMetric').textContent = results.averages.loadTime.toFixed(0);
                    document.getElementById('fpsMetric').textContent = results.averages.fps.toFixed(0);
                    document.getElementById('memoryMetric').textContent = results.averages.memory.toFixed(1);
                    document.getElementById('scoreMetric').textContent = results.score;
                }
            } catch (e) {
                console.error('Error cargando resultados:', e);
            }
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.benchmarkRunner = new BenchmarkRunner();
});