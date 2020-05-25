rm ./tests/target.ts
cat ./global.d.ts\
    ./src/common/util.ts\
    ./src/id/position/mat.ts\
    ./src/id/position/TileMat.ts\
    ./src/id/position/colorTileMat.ts\
    ./src/id/position/devMat.ts\
    ./src/id/position/ringMat.ts\
    ./src/id/position/simpleTileMat.ts\
    ./src/id/standard/standardId.ts\
    ./src/id/standard/alphabet.ts\
    ./src/id/standard/card.ts\
    ./src/id/standard/gameMark.ts\
    ./src/id/standard/number.ts\
    ./src/id/standard/skunk.ts\
    ./src/id/standard/sticker.ts\
    ./src/id/standard/symbol.ts\
    ./src/id/id.ts\
    ./src/p5tId.ts\
    ./src/cube/char/char.ts\
    ./src/cube/char/batteryChar.ts\
    ./src/cube/char/buttonChar.ts\
    ./src/cube/char/idChar.ts\
    ./src/cube/char/lightChar.ts\
    ./src/cube/char/motorChar.ts\
    ./src/cube/char/sensorChar.ts\
    ./src/cube/char/soundChar.ts\
    ./src/cube/cubeBase.ts\
    ./src/cube/cube.ts\
    ./src/cube/scanner.ts\
    ./src/cube/connector.ts\
    ./src/p5tCube.ts > ./tests/target.ts
