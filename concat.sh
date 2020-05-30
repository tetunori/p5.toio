#!/bin/sh
TARGET_FILE="./dist/p5.toio.js"
TMP_FILE="temp.js"

# Initialize test target
rm $TARGET_FILE

# Concatenate test target files
cat ./out/common/util.js\
    ./out/id/position/mat.js\
    ./out/id/position/TileMat.js\
    ./out/id/position/colorTileMat.js\
    ./out/id/position/devMat.js\
    ./out/id/position/ringMat.js\
    ./out/id/position/simpleTileMat.js\
    ./out/id/standard/standardId.js\
    ./out/id/standard/alphabet.js\
    ./out/id/standard/card.js\
    ./out/id/standard/gameMark.js\
    ./out/id/standard/number.js\
    ./out/id/standard/skunk.js\
    ./out/id/standard/sticker.js\
    ./out/id/standard/symbol.js\
    ./out/id/id.js\
    ./out/p5tId.js\
    ./out/cube/char/char.js\
    ./out/cube/char/batteryChar.js\
    ./out/cube/char/buttonChar.js\
    ./out/cube/char/idChar.js\
    ./out/cube/char/lightChar.js\
    ./out/cube/char/motorChar.js\
    ./out/cube/char/sensorChar.js\
    ./out/cube/char/soundChar.js\
    ./out/cube/cubeBase.js\
    ./out/cube/cube.js\
    ./out/cube/scanner.js\
    ./out/cube/connector.js\
    ./out/p5tCube.js > $TMP_FILE

sed -e '/import/d' $TMP_FILE | sed -e "s/export //" > $TARGET_FILE
rm $TMP_FILE