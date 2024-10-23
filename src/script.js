/*******************GLOBAL********************/
const d = document;
const $ = el => d.querySelector(el);
const $body = d.body;
const $line = $('.line');
let currentViewInformation = 0;
let deltaIsNegative = null;

const GROW_HEIGHT = 30;
let currentHeight = 500;
let actualHeight = 0;

const GROW_BOTTOM = 50;
let currentBottom = 0;
let actualBottom = 0;

const GROW_BG = 1;
let currentBg = 20;
let actualBg = 0;

let currentImage = 0;

const arrayImages = [
  'fotos-cloudinary/n1-520x520.avif',
  'fotos-cloudinary/n2-540x540.avif',
  'fotos-cloudinary/n3-560x560.avif',
  'fotos-cloudinary/n4-580x580.avif',
  'fotos-cloudinary/n5-600x600.avif',
  'fotos-cloudinary/n6-620x620.avif',
  'fotos-cloudinary/n7-640x640.avif',
  'fotos-cloudinary/n8-660x660.avif',
  'fotos-cloudinary/n9-680x680.avif',
  'fotos-cloudinary/n10-700x700.avif',
  'fotos-cloudinary/n11-720x720.avif',
  'fotos-cloudinary/n12-740x740.avif',
  'fotos-cloudinary/n13-760x760.avif',
  'fotos-cloudinary/n14-780x780.avif',
  'fotos-cloudinary/n15-800x800.avif',
  'fotos-cloudinary/n16-820x820.avif',
  'fotos-cloudinary/n17-840x840.avif',
  'fotos-cloudinary/n18-860x860.avif',
  'fotos-cloudinary/n19-880x880.avif',
  'fotos-cloudinary/n20-900x900.avif',
  'fotos-cloudinary/n21-920x920.avif',
  'fotos-cloudinary/n22-940x940.avif',
  'fotos-cloudinary/n23-960x960.avif',
  'fotos-cloudinary/n24-980x980.avif',
  'fotos-cloudinary/n25-1000x1000.avif',
  'fotos-cloudinary/n26-1020x1020.avif',
  'fotos-cloudinary/n27-1040x1040.avif',
  'fotos-cloudinary/n28-1060x1060.avif',
  'fotos-cloudinary/n29-1080x1080.avif',
  'fotos-cloudinary/n30-1100x1100.avif',
  'fotos-cloudinary/n31-1120x1120.avif',
  'fotos-cloudinary/n32-1140x1140.avif',
  'fotos-cloudinary/n33-1160x1160.avif',
  'fotos-cloudinary/n34-1180x1180.avif',
  'fotos-cloudinary/n35-1200x1200.avif',
  'fotos-cloudinary/n36-1220x1220.avif',
  'fotos-cloudinary/n37-1240x1240.avif',
  'fotos-cloudinary/n38-1260x1260.avif',
  'fotos-cloudinary/n39-1280x1280.avif',
  'fotos-cloudinary/n40-1300x1300.avif',
  'fotos-cloudinary/n41-1320x1320.avif',
  'fotos-cloudinary/n42-1340x1340.avif',
  'fotos-cloudinary/n43-1360x1360.avif',
  'fotos-cloudinary/n44-1380x1380.avif',
  'fotos-cloudinary/n45-1400x1400.avif',
  'fotos-cloudinary/n46-1420x1420.avif',
  'fotos-cloudinary/n47-1440x1440.avif',
  'fotos-cloudinary/n48-1460x1460.avif',
  'fotos-cloudinary/n49-1480x1480.avif',
  'fotos-cloudinary/n50-1500x1500.avif',
  'fotos-cloudinary/n51-1520x1520.avif',
  'fotos-cloudinary/n52-1540x1540.avif',
  'fotos-cloudinary/n53-1560x1560.avif',
  'fotos-cloudinary/n54-1580x1580.avif',
  'fotos-cloudinary/n55-1600x1600.avif',
  'fotos-cloudinary/n56-1620x1620.avif',
  'fotos-cloudinary/n57-1640x1640.avif',
  'fotos-cloudinary/n58-1660x1660.avif',
  'fotos-cloudinary/n59-1680x1680.avif',
  'fotos-cloudinary/n60-1700x1700.avif',
  'fotos-cloudinary/n61-1720x1720.avif',
  'fotos-cloudinary/n62-1740x1740.avif',
  'fotos-cloudinary/n63-1760x1760.avif',
  'fotos-cloudinary/n64-1780x1780.avif',
  'fotos-cloudinary/n65-1800x1800.avif',
  'fotos-cloudinary/n66-1820x1820.avif',
  'fotos-cloudinary/n67-1840x1840.avif',
  'fotos-cloudinary/n68-1860x1860.avif',
  'fotos-cloudinary/n69-1880x1880.avif',
  'fotos-cloudinary/n70-1900x1900.avif',
  'fotos-cloudinary/n71-1920x1920.avif',
  'fotos-cloudinary/n72-1940x1940.avif',
  'fotos-cloudinary/n73-1960x1960.avif',
  'fotos-cloudinary/n74-1980x1980.avif',
  'fotos-cloudinary/n75-2000x2000.avif',
  'fotos-cloudinary/n76-2020x2020.avif',
  'fotos-cloudinary/n77-2040x2040.avif',
  'fotos-cloudinary/n78-2060x2060.avif',
  'fotos-cloudinary/n79-2080x2080.avif',
  'fotos-cloudinary/n80-2100x2100.avif',
  'fotos-cloudinary/n81-2120x2120.avif',
  'fotos-cloudinary/n82-2140x2140.avif',
  'fotos-cloudinary/n83-2160x2160.avif',
  'fotos-cloudinary/n84-2180x2180.avif',
  'fotos-cloudinary/n85-2200x2200.avif',
  'fotos-cloudinary/n86-2220x2220.avif',
  'fotos-cloudinary/n87-2240x2240.avif',
  'fotos-cloudinary/n88-2260x2260.avif',
  'fotos-cloudinary/n89-2280x2280.avif',
  'fotos-cloudinary/n90-2300x2300.avif',
  'fotos-cloudinary/n91-2320x2320.avif',
  'fotos-cloudinary/n92-2340x2340.avif',
  'fotos-cloudinary/n93-2360x2360.avif',
  'fotos-cloudinary/n94-2380x2380.avif',
  'fotos-cloudinary/n95-2400x2400.avif',
  'fotos-cloudinary/n96-2420x2420.avif',
  'fotos-cloudinary/n97-2440x2440.avif',
  'fotos-cloudinary/n98-2460x2460.avif',
  'fotos-cloudinary/n99-2480x2480.avif',
  'fotos-cloudinary/n100-2500x2500.avif',
  'fotos-cloudinary/n101-2520x2520.avif'
];

/*******************CURRENT FUNCTIONS********************/

const generateDinosaurio = PIXEL_ART => {
  const boxShadow = PIXEL_ART.map((pixel, index) => {
    const x = 0.3 * (index % 24);
    const y = 0.3 * ~~(index / 24);
    return `${x}vw ${y}vw ${COLORS[pixel]}`;
  }).join(',\n');

  $container.style.setProperty('--shadow', boxShadow);
};

const deleteCartel = () => {
  d.body.removeChild($('.information'));
};

let firstConditionExecuted = false;
function updateDataTable() {
  const $tableWithin = selector => $('.statistics').querySelector(selector);
  let _width = arrayImages[currentImage]
    .match(/-[0-9]{1,5}/gi)
    .join('')
    .slice(1, 5);
  $tableWithin('.current-photo-width').innerHTML = `${_width}x${_width}`;
}

updateDataTable();

window.deleteWorn = function () {
  document.body.removeChild($('.message'));
  document.body.removeChild($('.container-floor'));
  document.body.removeChild($('.container-letro-map'));
  $('.ground').classList.remove('hidden-ground');
  sessionStorage.setItem('cloudinary-introduction', 'saw');
};

/*******************SPIDER MOVE********************/

let isPaused = true;
let inactiviyTimeOut;
let INACTIVITY_TIME = 400;

const movilQuery = window.matchMedia('(max-width: 1000px)');

movilQuery.addEventListener('change', e => {
  if (e.matches) {
    INACTIVITY_TIME = 1300;
  }
});

function pauseAnimation() {
  if (!isPaused) {
    $('.spider-sprite').classList.remove('spider-moving');
    isPaused = true;
  }
}

const runSpider = () => {
  clearTimeout(inactiviyTimeOut);
  if (isPaused) {
    $('.spider-sprite').classList.add('spider-moving');
    isPaused = false;
  }
  inactiviyTimeOut = setTimeout(pauseAnimation, INACTIVITY_TIME);
};

/*******************DINOSAUR********************/

const COLORS = {
  0: 'transparent',
  1: '#535353',
  2: '#fff'
};
const $container = document.querySelector('.container-dinousario');

const scheme = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
  1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const base = [
  0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const righFoot = [
  0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const leftFoot = [
  0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

const schemes = [base, leftFoot, righFoot];

const renderScheme = (a, b) => [...a, ...b];

let currentScheme = 0;
let PIXEL_ART = renderScheme(scheme, schemes[currentScheme]);
generateDinosaurio(PIXEL_ART);

setInterval(() => {
  PIXEL_ART = renderScheme(scheme, schemes[currentScheme]);
  generateDinosaurio(PIXEL_ART);
  if (currentScheme === 2) currentScheme = -1;
  currentScheme++;
}, 100);

/*******************EVENT DELEGATION DESTOP********************/
d.addEventListener('wheel', e => {
  if (currentViewInformation === 0) {
    deleteCartel();
    currentViewInformation++;
    $('.spider-sprite').classList.remove('spider-hidden');
  }

  runSpider();

  deltaIsNegative = e.deltaY < 0;

  deltaIsNegative
    ? (currentHeight += GROW_HEIGHT)
    : (currentHeight -= GROW_HEIGHT);
  if (currentHeight < 500) currentHeight = 500;
  actualHeight = Math.max(500, currentHeight);

  deltaIsNegative
    ? (currentBottom += GROW_BOTTOM)
    : (currentBottom -= GROW_BOTTOM);
  if (currentBottom < 0) currentBottom = 0;
  actualBottom = Math.max(0, currentBottom);

  deltaIsNegative ? (currentBg += GROW_BG) : (currentBg -= GROW_BG);
  if (currentBg < 20) currentBg = 20;
  actualBg = Math.max(20, currentBg);

  if (actualBg % 20 === 0 && actualBg !== 20) {
    if (!arrayImages[currentImage]) currentImage = 0;
    updateDataTable();
    $body.style.setProperty('--img', `url(${arrayImages[currentImage]})`);
    currentImage++;
  }
  if (actualBg > 100) currentBg = 20;

  $line.style.height = `${actualHeight}vh`;
  $line.style.bottom = `${actualBottom * -1}px`;
  $body.style.backgroundSize = `${actualBg}%`;
});

d.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    if (currentViewInformation === 0) {
      deleteCartel();
      currentViewInformation++;
      $('.spider-sprite').classList.remove('spider-hidden');
    }

    runSpider();
    deltaIsNegative = e.key === 'ArrowUp';

    deltaIsNegative
      ? (currentHeight += GROW_HEIGHT)
      : (currentHeight -= GROW_HEIGHT);
    if (currentHeight < 500) currentHeight = 500;
    actualHeight = Math.max(500, currentHeight);

    deltaIsNegative
      ? (currentBottom += GROW_BOTTOM)
      : (currentBottom -= GROW_BOTTOM);
    if (currentBottom < 0) currentBottom = 0;
    actualBottom = Math.max(0, currentBottom);

    deltaIsNegative ? (currentBg += GROW_BG) : (currentBg -= GROW_BG);
    if (currentBg < 20) currentBg = 20;
    actualBg = Math.max(20, currentBg);

    if (actualBg % 20 === 0 && actualBg !== 20) {
      if (!arrayImages[currentImage]) currentImage = 0;
      updateDataTable();
      $body.style.setProperty('--img', `url(${arrayImages[currentImage]})`);
      currentImage++;
    }

    if (actualBg > 100) currentBg = 20;

    $line.style.height = `${actualHeight}vh`;
    $line.style.bottom = `${actualBottom * -1}px`;
    $body.style.backgroundSize = `${actualBg}%`;
  }
});

/*******************EVENT DELEGATION MOBILE********************/

const start = e => {
  if (currentViewInformation === 0) {
    deleteCartel();
    currentViewInformation++;
    $('.spider-sprite').classList.remove('spider-hidden');
  }

  let deltaYinital = e.touches[0].clientY ?? e.pageY;

  const move = e => {
    let deltaYCurrent = e.touches[0].clientY ?? e.pageY;
    let deltaDistance = deltaYinital - deltaYCurrent;

    runSpider();

    deltaIsNegative = deltaDistance <= 0;

    deltaIsNegative
      ? (currentHeight += GROW_HEIGHT)
      : (currentHeight -= GROW_HEIGHT);
    if (currentHeight < 500) currentHeight = 500;
    actualHeight = Math.max(500, currentHeight);

    deltaIsNegative
      ? (currentBottom += GROW_BOTTOM)
      : (currentBottom -= GROW_BOTTOM);
    if (currentBottom < 0) currentBottom = 0;
    actualBottom = Math.max(0, currentBottom);

    deltaIsNegative ? (currentBg += GROW_BG) : (currentBg -= GROW_BG);
    if (currentBg < 20) currentBg = 20;
    actualBg = Math.max(20, currentBg);

    if (actualBg % 20 === 0 && actualBg !== 20) {
      if (!arrayImages[currentImage]) currentImage = 0;
      updateDataTable();
      $body.style.setProperty('--img', `url(${arrayImages[currentImage]})`);
      currentImage++;
    }

    if (actualBg > 100) currentBg = 20;

    $line.style.height = `${actualHeight}vh`;
    $line.style.bottom = `${actualBottom * -1}px`;
    $body.style.backgroundSize = `${actualBg}%`;
  };

  d.addEventListener('touchmove', move);

  const end = () => {
    d.removeEventListener('touchmove', move);
    d.removeEventListener('touchend', end);
  };

  d.addEventListener('touchend', end);
};

d.addEventListener('touchstart', start);
