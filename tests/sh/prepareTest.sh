#!/bin/sh
TARGET_FILE="./tests/target.ts"

# Initialize test target
rm $TARGET_FILE

# Concatenate test target files
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
    ./src/p5tCube.ts > $TARGET_FILE
while [ ! -e $TARGET_FILE ]
do
  sleep 1
done

# copy and generate execute folder
rm -rf ./tests/execute
mkdir ./tests/execute
mkdir ./tests/execute/common

# Generate test file for common
cat $TARGET_FILE ./tests/common/util.test.ts > ./tests/execute/common/util.test.ts

