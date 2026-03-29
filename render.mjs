/**
 * Render Mercury Hub Video
 * Using Revideo headless renderer
 */

import {renderVideo} from '@revideo/renderer';
import revideoPluginModule from '@revideo/vite-plugin';
const revideoPlugin = revideoPluginModule.default;
import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ensure output directory exists
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, {recursive: true});
}

function logProgress(worker, progress) {
  console.log(`[Worker ${worker}] Progress: ${(progress * 100).toFixed(1)}%`);
}

async function main() {
  console.log('Starting render...');
  console.log('Project file:', path.join(__dirname, 'project.tsx'));
  console.log('Output:', path.join(outputDir, 'mercury-hub.mp4'));

  const startTime = Date.now();

  const settings = {
    outFile: path.join(outputDir, 'mercury-hub.mp4'),
    outDir: outputDir,
    workers: 1,
    range: [1, 30],
    dimensions: [1080, 1920],
    logProgress: true,
    ffmpeg: {
      ffmpegLogLevel: 'info',
    },
    viteConfig: {
      plugins: [revideoPlugin()],
    },
    progressCallback: logProgress,
    puppeteer: {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--disable-accelerated-2d-canvas',
      ],
    },
  };

  try {
    const outputPath = await renderVideo({
      projectFile: path.join(__dirname, 'project.tsx'),
      variables: {},
      settings,
    });

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n✅ Render complete in ${elapsed}s!`);
    console.log('Output:', outputPath);
  } catch (error) {
    console.error('❌ Render failed:', error);
    process.exit(1);
  }
}

main();
