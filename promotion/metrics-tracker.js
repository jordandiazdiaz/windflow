#!/usr/bin/env node

const fs = require('fs');
const https = require('https');

// Función para hacer requests HTTPS
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

async function trackMetrics() {
  console.log('📊 Recopilando métricas de WindFlow CSS...\n');
  
  const metrics = {
    timestamp: new Date().toISOString(),
    npm: {},
    github: {},
    general: {}
  };

  try {
    // Métricas de npm
    console.log('📦 Obteniendo métricas de npm...');
    const npmData = await makeRequest('https://api.npmjs.org/downloads/point/last-week/windflow-css');
    metrics.npm.weeklyDownloads = npmData.downloads || 0;
    
    const packageData = await makeRequest('https://registry.npmjs.org/windflow-css');
    metrics.npm.latestVersion = packageData['dist-tags']?.latest || 'unknown';
    metrics.npm.description = packageData.description || '';
    
    console.log(`✅ Descargas semanales: ${metrics.npm.weeklyDownloads}`);
    console.log(`✅ Versión actual: ${metrics.npm.latestVersion}`);

  } catch (error) {
    console.log('⚠️  Error obteniendo métricas de npm:', error.message);
  }

  try {
    // Métricas de GitHub (públicas)
    console.log('\n🐙 Obteniendo métricas de GitHub...');
    const githubData = await makeRequest('https://api.github.com/repos/jordandiazdiaz/windflow');
    
    metrics.github.stars = githubData.stargazers_count || 0;
    metrics.github.forks = githubData.forks_count || 0;
    metrics.github.watchers = githubData.watchers_count || 0;
    metrics.github.openIssues = githubData.open_issues_count || 0;
    metrics.github.language = githubData.language || 'JavaScript';
    metrics.github.size = githubData.size || 0;
    
    console.log(`✅ Stars: ${metrics.github.stars}`);
    console.log(`✅ Forks: ${metrics.github.forks}`);
    console.log(`✅ Watchers: ${metrics.github.watchers}`);
    console.log(`✅ Issues abiertas: ${metrics.github.openIssues}`);

  } catch (error) {
    console.log('⚠️  Error obteniendo métricas de GitHub:', error.message);
  }

  // Métricas generales
  metrics.general.totalFiles = fs.readdirSync('.').length;
  
  if (fs.existsSync('./dist/windflow.css')) {
    const cssStats = fs.statSync('./dist/windflow.css');
    metrics.general.cssSize = `${(cssStats.size / 1024).toFixed(2)} KB`;
  }

  // Guardar métricas
  const metricsFile = './promotion/metrics.json';
  let historicalMetrics = [];
  
  if (fs.existsSync(metricsFile)) {
    try {
      historicalMetrics = JSON.parse(fs.readFileSync(metricsFile, 'utf8'));
    } catch (e) {
      historicalMetrics = [];
    }
  }
  
  historicalMetrics.push(metrics);
  fs.writeFileSync(metricsFile, JSON.stringify(historicalMetrics, null, 2));

  // Generar reporte
  const report = `# 📊 Reporte de Métricas WindFlow CSS

**Fecha**: ${new Date().toLocaleDateString()}

## 📦 NPM
- **Descargas semanales**: ${metrics.npm.weeklyDownloads}
- **Versión actual**: ${metrics.npm.latestVersion}

## 🐙 GitHub
- **Stars**: ${metrics.github.stars}
- **Forks**: ${metrics.github.forks}
- **Watchers**: ${metrics.github.watchers}
- **Issues abiertas**: ${metrics.github.openIssues}

## 📁 General
- **Tamaño CSS**: ${metrics.general.cssSize || 'N/A'}
- **Archivos totales**: ${metrics.general.totalFiles}

## 🎯 Objetivos vs Actual
- [ ] **1,000 downloads/semana** (Actual: ${metrics.npm.weeklyDownloads})
- [ ] **100 GitHub stars** (Actual: ${metrics.github.stars})
- [ ] **50 forks** (Actual: ${metrics.github.forks})
- [ ] **10 contributors** (Actual: investigar)

## 📈 Próximas Acciones
${metrics.npm.weeklyDownloads < 100 ? '- 🚨 Aumentar promoción en redes sociales\n' : '- ✅ Downloads en buen camino\n'}${metrics.github.stars < 50 ? '- 🚨 Mejorar presencia en GitHub\n' : '- ✅ Stars creciendo bien\n'}${metrics.github.openIssues > 5 ? '- 🚨 Revisar y responder issues\n' : '- ✅ Issues bajo control\n'}

---
*Generado automáticamente el ${new Date().toLocaleString()}*
`;

  fs.writeFileSync('./promotion/metrics-report.md', report);
  
  console.log('\n✅ Métricas guardadas en metrics.json');
  console.log('✅ Reporte generado en metrics-report.md');
  console.log('\n📊 Resumen rápido:');
  console.log(`   NPM Downloads: ${metrics.npm.weeklyDownloads}/semana`);
  console.log(`   GitHub Stars: ${metrics.github.stars}`);
  console.log(`   GitHub Forks: ${metrics.github.forks}`);
}

// Ejecutar si se llama directamente
if (require.main === module) {
  trackMetrics().catch(console.error);
}

module.exports = { trackMetrics };