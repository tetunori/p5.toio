
const gCubes = [];

function setup() {
  initCanvas();
}

async function asyncCubeControl() {

  // Check toio Collection tile color
  // if( gCubes[0]?.x && gCubes[0]?.y ){
  //   console.log(P5tId.ColorTileMat.getTileColor(gCubes[0].x, gCubes[0].y));
  //   background(P5tId.ColorTileMat.getTileColor(gCubes[0].x, gCubes[0].y));
  // }

  // Inside circle or not
  // if( gCubes[0]?.x && gCubes[0]?.y ){
  //   console.log(P5tId.RingMat.isInsideCircle(gCubes[0].x, gCubes[0].y));
  // }

  // In front of blue/green line
  // if( gCubes[0]?.x && gCubes[0]?.y ){
  //   console.log( 'blue: ' + P5tId.RingMat.isInFrontOfBlueLine(gCubes[0].y), 'green: ' + P5tId.RingMat.isInFrontOfGreenLine(gCubes[0].y));
  // }

  // Gaze at mouse
  // for( const cube of gCubes ){
  //   cube.turnToXY( Math.floor(mouseX * 300 / windowWidth + 200) , 144, 115 );
  // }

  // Gaze at the othre Cube
  // gCubes[0]?.setFrameRate(15);
  // gCubes[1]?.setFrameRate(15);
  // gCubes[0]?.turnToCube( gCubes[1], 115 );

  // Chase
  // gCubes[0]?.moveToCube( gCubes[1], 80, P5tCube.moveTypeId.withoutBack );

}

function draw() {
  asyncCubeControl();
  ellipse( mouseX, mouseY, 20, 20 );
}

function windowResized() {
  initCanvas();
}

function mouseClicked() {

  P5tCube.connectNewP5tCube().then( cube => {
    gCubes.push( cube );
    cube.turnLightOn( 'white' );
    
  } );

  // let fs = fullscreen();
  // fullscreen(!fs);
  // initCanvas();

}

function keyPressed() {
  console.log( keyCode );

  switch( keyCode ){
    case 49: /* 1 */
      const cube = gCubes.pop();
      if( cube ){ cube.disconnect(); }
      break;
    case 32: /* Space key */
      connectCube();
      break;
  }

  let type = '';
  for( const cube of gCubes ){
    if( cube ){
      switch( keyCode ){
        case 50: /* 2 */
          cube.playSE( P5tCube.seId.selected );
          break;
        case 51:
          cube.playSingleNote( freqToMidi(440) );
          break;
        case 52:
          cube.playMelody( [ 
            { note: 0x3C, duration: 0x1E }, 
            { note: 0x3E, duration: 0x1E }, 
            { note: 0x40, duration: 0x1E } 
          ] );
          break;
        case 53:
          cube.turnLightOn( color( 0, 255, 255 ), 1000 );
          break;
        case 54:
          cube.turnLightOff();
          break;
        case 55:
          cube.turnLightOnRGB( 255, 128, 128 );
          break;
        case 56:
          cube.turnLightOnRGBA( 0, 255, 255, 30, 1500 );
          break;
        case 57:
          cube.move(50, 50, 255);
          break;
        case 48:
          cube.stop();
          break;
        case 189:
          cube.rotate(80, 0);
          break;
        case 187:
          cube.moveTo( { x: 351, y: 344 }, 80/* maxSpeed */, undefined, P5tCube.easeTypeId.decel );
          // cube.moveTo(
          //   {
          //     x: 351, 
          //     y: 344, 
          //     angle: 0, 
          //     angleType: P5tCube.angleTypeId.sameAsCurrent
          //   },
          //   80, 
          //   P5tCube.moveTypeId.withoutBack, 
          //   P5tCube.easeTypeId.decel);
          break;
        case 220:
          cube.moveToMulti( 
            [
              { x: 429, y: 391 },
              { x: 271, y: 391 },
              // { x: 350, y: 272 },
            ], 100, P5tCube.moveTypeId.rotate1st,
          );
          break;
        case 192:
          // cube.turnTo( 0, 60 );
          // cube.turnTo( 0, 30, P5tCube.rotateTypeId.clockwise );
          // cube.turnTo( 0, 115, P5tCube.rotateTypeId.counterClockwise );
          cube.turnTo( Math.PI / 2, 115 );
          // angleMode(DEGREES);
          // cube.turnTo( 180, 115 );
          break;
        case 65: // 'a'
          console.log(cube.buttonPressed);
          break;
        case 83:
          console.log(cube.batteryLevel);
          console.log(cube.flat);
          console.log(cube.posture);
          console.log(cube.shakeLevel);
          console.log(cube.magnet);
          break;
        case 68:
          console.log(cube.bleProtocolVersion);
          break;
        case 70:
          break;
        case 71:
          console.log(cube.x, cube.y, cube.angle, cube.sensorX, cube.sensorY);
          break;
        case 72:
          console.log(cube.standardId, cube.angle);
          break;
        case 74:
          break;
        case 75:
          break;
        case 81: // 'q'
          type = 'buttonpress';
          cube.addEventListener(type, ()=>{console.log(type);});
          break;
        case 87:
          type = 'buttonrelease';
          cube.addEventListener(type, ()=>{console.log(type)});
          break;
        case 69:
          type = 'batterylevelchange';
          cube.addEventListener(type, (level)=>{console.log(type, level)});
          break;
        case 82:
          type = 'sensorflat';
          cube.addEventListener(type, (isFlat)=>{console.log(type, isFlat)});
          break;
        case 84:
          type = 'sensorcollision';
          cube.addEventListener(type, ()=>{console.log(type)});
          break;
        case 89:
          type = 'sensordoubletap';
          cube.addEventListener(type, ()=>{console.log(type)});
          break;
        case 85:
          type = 'sensorposturechange';
          cube.addEventListener(type, (posture)=>{console.log(type, posture)});
          break;
        case 73:
          type = 'positionid';
          cube.addEventListener(type, (idInfo)=>{console.log(type, idInfo)});
          break;
        case 79:
          type = 'standardid';
          cube.addEventListener(type, (idInfo)=>{console.log(type, idInfo)});
          break;
        case 80:
          type = 'sensorshakelevelchange';
          cube.addEventListener(type, (shakeLevel)=>{console.log(type, shakeLevel)});
          break;
        case 219:
          type = 'sensormagnetchange';
          cube.addEventListener(type, (magnet)=>{console.log(type, magnet)});
          break;
        case 90: // z
          cube.turnToXY( 351, 344, 50 );
          break;
        case 88:
          console.log(P5tId.ColorTileMat.getTileColor(cube?.x, cube?.y));
          break;
        case 67:
          console.log(P5tId.ColorTileMat.getTileMatrixIndex(cube?.x, cube?.y));
          break;
        case 86:
          console.log(P5tId.ColorTileMat.isOnMat(cube?.x, cube?.y));
          break;
        case 66:
          if( cube.x && cube.y ){
            const xRand = Math.floor( Math.random() * P5tId.ColorTileMat.matrixColumns);
            const yRand = Math.floor( Math.random() * P5tId.ColorTileMat.matrixRows);
            cube.moveTo(P5tId.ColorTileMat.getTileCenter(xRand, yRand), 80);
          }
          break;
        case 78:
          if( cube.x && cube.y ){
            cube.moveTo({x: P5tId.RingMat.startPointGreenSideX, 
                         y: P5tId.RingMat.startPointGreenSideY, 
                         angle: -Math.PI/2, angleType: 0 }, 80);
          }
          break;
        case 77:
          if( cube.x && cube.y ){
            const targetColorTiles = P5tId.ColorTileMat.whiteTiles;
            const idTile = Math.floor( Math.random() * targetColorTiles.length);
            const tileElement = targetColorTiles[idTile];
            cube.moveTo(P5tId.ColorTileMat.getTileCenter(tileElement.row, tileElement.column), 80);
          }
          break;
        case 188:
          if( cube.x && cube.y ){
            console.log( P5tId.RingMat.isOnMat(cube.x, cube.y ) );
          }
          break;
        case 32: /* Space key */
          connectCube();
          break;
      }
    }

  }

}

const connectCube = () => {
    P5tCube.connectNewP5tCube().then( cube => {

      gCubes.push( cube );
      cube.turnLightOn( color( 255, 255, 255, 255 ) );
      // cube.lightChar.turnLightOnRGBA( 255, 255, 255, 255 );
    } );

}

const initCanvas = () => {

  resizeCanvas( windowWidth, windowHeight );

  const COLOR_SMOKEWHITE = 245;
	background( COLOR_SMOKEWHITE );

}

// const cubeButtonPressed = () => {
//   console.log('O: cubeButtonPressed!');
// }

// const cubeButtonReleased = () => {
//   console.log('O: cubeButtonReleased!');
// }

// const cubeBatteryLevelChanged = ( level) => {
//   console.log('O: cubeBatteryLevelChanged!', level);
// }

// const cubeFlatChanged = (isFlat) => {
//   console.log('O: cubeFlatChanged!', isFlat);
// }

// const cubeCollisionOccurred = () => {
//   console.log('O: cubeCollisionOccurred!');
// }

// const cubeDoubleTapped = () => {
//   console.log('O: cubeDoubleTapped!');
// }

// const cubePostureChanged = (posture) => {
//   console.log('O: cubePostureChanged!', posture);
// }

// const cubeShakeLevelChanged = (shakeLevel) => {
//   console.log('O: cubeShakeLevelChanged!', shakeLevel);
// }

// const cubeMagnetChanged = (magnet) => {
//   console.log('O: cubeMagnetChanged!', magnet);
// }

// const cubePositionIdChanged = (info) => {
//   console.log('O: cubePositionIdChanged!', info);
// }

// const cubeStandardIdChanged = (info) => {
//   console.log('O: cubeStandardIdChanged!', info);
// }