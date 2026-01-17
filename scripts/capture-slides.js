const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Helper function to wait
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function captureSlides() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport to 16:9 ratio (1920x1080)
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1
  });

  // Load the HTML file
  const htmlPath = path.join(__dirname, 'public', 'slides.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await sleep(2000);

  const outputDir = path.join(__dirname, 'public', 'slide-html');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Get total number of slides
  const totalSlides = await page.evaluate(() => {
    return document.querySelectorAll('.slide').length;
  });

  console.log(`Capturing ${totalSlides} slides...`);

  for (let i = 0; i < totalSlides; i++) {
    // Navigate to slide
    await page.evaluate((index) => {
      const slides = document.querySelectorAll('.slide');
      slides.forEach((slide, j) => {
        slide.classList.remove('active');
        if (j === index) {
          slide.classList.add('active');
        }
      });
    }, i);

    // Wait for animations
    await sleep(800);

    // Capture screenshot
    const slideNum = String(i + 1).padStart(3, '0');
    const outputPath = path.join(outputDir, `slide.${slideNum}.png`);

    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: false
    });

    console.log(`Captured slide ${i + 1}/${totalSlides}: ${outputPath}`);
  }

  await browser.close();
  console.log('Done! All slides captured.');
}

captureSlides().catch(console.error);
