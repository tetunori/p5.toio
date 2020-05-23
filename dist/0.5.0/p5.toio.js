"use strict";
class CubeUtil {
    static clipNumberUInt8(num) {
        if (num < 0) {
            return 0;
        }
        if (num > 255) {
            return 255;
        }
        return Math.floor(num);
    }
    static clipNumberUInt16(num) {
        if (num < 0) {
            return 0;
        }
        if (num > 65535) {
            return 65535;
        }
        return Math.floor(num);
    }
}
class Mat {
    static isOnMat(x, y) {
        if (x === undefined || y === undefined) {
            return false;
        }
        if (x < this.minX || x > this.maxX) {
            return false;
        }
        if (y < this.minY || y > this.maxY) {
            return false;
        }
        return true;
    }
}
class TileMat extends Mat {
    static getTileCenter(row, column) {
        if (row === undefined || column === undefined) {
            return undefined;
        }
        if (!this.isValidRow(row) || !this.isValidColumn(column)) {
            return undefined;
        }
        const xUnit = (this.matrixMaxX - this.matrixMinX) / this.matrixColumns;
        const xOffset = this.matrixMinX + xUnit / 2;
        const yUnit = (this.matrixMaxY - this.matrixMinY) / this.matrixRows;
        const yOffset = this.matrixMinY + yUnit / 2;
        const x = xOffset + xUnit * column;
        const y = yOffset + yUnit * row;
        return { x: x, y: y };
    }
    static getTileMatrixIndex(x, y) {
        if (x === undefined || y === undefined) {
            return undefined;
        }
        const row = this.getTileRow(y);
        const column = this.getTileColumn(x);
        if (row === undefined || column === undefined) {
            return undefined;
        }
        if (!this.isValidRow(row) || !this.isValidColumn(column)) {
            return undefined;
        }
        return { row: row, column: column };
    }
    static getTileRow(y) {
        if (y === undefined) {
            return undefined;
        }
        const row = Math.floor(((y - this.matrixMinY) / (this.matrixMaxY - this.matrixMinY)) * this.matrixRows);
        if (this.isValidRow(row)) {
            return row;
        }
        else {
            return undefined;
        }
    }
    static getTileColumn(x) {
        if (x === undefined) {
            return undefined;
        }
        const column = Math.floor(((x - this.matrixMinX) / (this.matrixMaxX - this.matrixMinX)) * this.matrixColumns);
        if (this.isValidColumn(column)) {
            return column;
        }
        else {
            return undefined;
        }
    }
    static isValidRow(row) {
        if (row < 0 || row > this.matrixRows - 1) {
            return false;
        }
        else {
            return true;
        }
    }
    static isValidColumn(column) {
        if (column < 0 || column > this.matrixColumns - 1) {
            return false;
        }
        else {
            return true;
        }
    }
}
class ColorTileMat extends TileMat {
    static getTileColor(x, y) {
        const row = this.getTileRow(y);
        const column = this.getTileColumn(x);
        if (row !== undefined && column !== undefined) {
            return this.tileColorMatrix[row][column];
        }
        else {
            return undefined;
        }
    }
}
ColorTileMat.minX = 545;
ColorTileMat.minY = 45;
ColorTileMat.maxX = 955;
ColorTileMat.maxY = 455;
ColorTileMat.centerX = 750;
ColorTileMat.centerY = 250;
ColorTileMat.matrixMinX = 555;
ColorTileMat.matrixMinY = 53;
ColorTileMat.matrixMaxX = 947;
ColorTileMat.matrixMaxY = 446;
ColorTileMat.matrixRows = 9;
ColorTileMat.matrixColumns = 9;
ColorTileMat.tileColor = {
    white: '#FFFFFF',
    red: '#e85654',
    blue: '#00aeca',
    green: '#95ba25',
    yellow: '#f0ac00',
};
ColorTileMat.cW = ColorTileMat.tileColor.white;
ColorTileMat.cR = ColorTileMat.tileColor.red;
ColorTileMat.cB = ColorTileMat.tileColor.blue;
ColorTileMat.cG = ColorTileMat.tileColor.green;
ColorTileMat.cY = ColorTileMat.tileColor.yellow;
ColorTileMat.tileColorMatrix = [
    [
        ColorTileMat.cW,
        ColorTileMat.cB,
        ColorTileMat.cW,
        ColorTileMat.cY,
        ColorTileMat.cW,
        ColorTileMat.cR,
        ColorTileMat.cW,
        ColorTileMat.cR,
        ColorTileMat.cW,
    ],
    [
        ColorTileMat.cG,
        ColorTileMat.cW,
        ColorTileMat.cR,
        ColorTileMat.cW,
        ColorTileMat.cB,
        ColorTileMat.cW,
        ColorTileMat.cB,
        ColorTileMat.cW,
        ColorTileMat.cY,
    ],
    [
        ColorTileMat.cW,
        ColorTileMat.cY,
        ColorTileMat.cW,
        ColorTileMat.cY,
        ColorTileMat.cW,
        ColorTileMat.cG,
        ColorTileMat.cW,
        ColorTileMat.cG,
        ColorTileMat.cW,
    ],
    [
        ColorTileMat.cB,
        ColorTileMat.cW,
        ColorTileMat.cG,
        ColorTileMat.cW,
        ColorTileMat.cR,
        ColorTileMat.cW,
        ColorTileMat.cB,
        ColorTileMat.cW,
        ColorTileMat.cR,
    ],
    [
        ColorTileMat.cW,
        ColorTileMat.cR,
        ColorTileMat.cW,
        ColorTileMat.cY,
        ColorTileMat.cW,
        ColorTileMat.cG,
        ColorTileMat.cW,
        ColorTileMat.cG,
        ColorTileMat.cW,
    ],
    [
        ColorTileMat.cY,
        ColorTileMat.cW,
        ColorTileMat.cB,
        ColorTileMat.cW,
        ColorTileMat.cB,
        ColorTileMat.cW,
        ColorTileMat.cY,
        ColorTileMat.cW,
        ColorTileMat.cR,
    ],
    [
        ColorTileMat.cW,
        ColorTileMat.cG,
        ColorTileMat.cW,
        ColorTileMat.cR,
        ColorTileMat.cW,
        ColorTileMat.cG,
        ColorTileMat.cW,
        ColorTileMat.cB,
        ColorTileMat.cW,
    ],
    [
        ColorTileMat.cB,
        ColorTileMat.cW,
        ColorTileMat.cY,
        ColorTileMat.cW,
        ColorTileMat.cB,
        ColorTileMat.cW,
        ColorTileMat.cR,
        ColorTileMat.cW,
        ColorTileMat.cY,
    ],
    [
        ColorTileMat.cW,
        ColorTileMat.cR,
        ColorTileMat.cW,
        ColorTileMat.cG,
        ColorTileMat.cW,
        ColorTileMat.cY,
        ColorTileMat.cW,
        ColorTileMat.cG,
        ColorTileMat.cW,
    ],
];
ColorTileMat.redTiles = [
    { row: 0, column: 5 },
    { row: 0, column: 7 },
    { row: 1, column: 2 },
    { row: 3, column: 4 },
    { row: 3, column: 8 },
    { row: 4, column: 1 },
    { row: 5, column: 8 },
    { row: 6, column: 3 },
    { row: 7, column: 6 },
    { row: 8, column: 1 },
];
ColorTileMat.blueTiles = [
    { row: 0, column: 1 },
    { row: 1, column: 4 },
    { row: 1, column: 6 },
    { row: 3, column: 0 },
    { row: 3, column: 6 },
    { row: 5, column: 2 },
    { row: 5, column: 4 },
    { row: 6, column: 7 },
    { row: 7, column: 0 },
    { row: 7, column: 4 },
];
ColorTileMat.greenTiles = [
    { row: 1, column: 0 },
    { row: 2, column: 5 },
    { row: 2, column: 7 },
    { row: 3, column: 2 },
    { row: 4, column: 5 },
    { row: 4, column: 7 },
    { row: 6, column: 1 },
    { row: 6, column: 5 },
    { row: 8, column: 3 },
    { row: 8, column: 7 },
];
ColorTileMat.yellowTiles = [
    { row: 0, column: 3 },
    { row: 1, column: 8 },
    { row: 2, column: 1 },
    { row: 2, column: 3 },
    { row: 4, column: 3 },
    { row: 5, column: 0 },
    { row: 5, column: 6 },
    { row: 7, column: 2 },
    { row: 7, column: 8 },
    { row: 8, column: 5 },
];
ColorTileMat.whiteTiles = [
    { row: 0, column: 0 },
    { row: 0, column: 2 },
    { row: 0, column: 4 },
    { row: 0, column: 6 },
    { row: 0, column: 8 },
    { row: 1, column: 1 },
    { row: 1, column: 3 },
    { row: 1, column: 5 },
    { row: 1, column: 7 },
    { row: 2, column: 0 },
    { row: 2, column: 2 },
    { row: 2, column: 4 },
    { row: 2, column: 6 },
    { row: 2, column: 8 },
    { row: 3, column: 1 },
    { row: 3, column: 3 },
    { row: 3, column: 5 },
    { row: 3, column: 7 },
    { row: 4, column: 0 },
    { row: 4, column: 2 },
    { row: 4, column: 4 },
    { row: 4, column: 6 },
    { row: 4, column: 8 },
    { row: 5, column: 1 },
    { row: 5, column: 3 },
    { row: 5, column: 5 },
    { row: 5, column: 7 },
    { row: 6, column: 0 },
    { row: 6, column: 2 },
    { row: 6, column: 4 },
    { row: 6, column: 6 },
    { row: 6, column: 8 },
    { row: 7, column: 1 },
    { row: 7, column: 3 },
    { row: 7, column: 5 },
    { row: 7, column: 7 },
    { row: 8, column: 0 },
    { row: 8, column: 2 },
    { row: 8, column: 4 },
    { row: 8, column: 6 },
    { row: 8, column: 8 },
];
class DevMat01 extends Mat {
}
DevMat01.minX = 34;
DevMat01.minY = 35;
DevMat01.maxX = 339;
DevMat01.maxY = 250;
DevMat01.centerX = 187;
DevMat01.centerY = 143;
class DevMat02 extends Mat {
}
DevMat02.minX = 34;
DevMat02.minY = 251;
DevMat02.maxX = 339;
DevMat02.maxY = 466;
DevMat02.centerX = 187;
DevMat02.centerY = 359;
class DevMat03 extends Mat {
}
DevMat03.minX = 34;
DevMat03.minY = 467;
DevMat03.maxX = 339;
DevMat03.maxY = 682;
DevMat03.centerX = 187;
DevMat03.centerY = 575;
class DevMat04 extends Mat {
}
DevMat04.minX = 34;
DevMat04.minY = 683;
DevMat04.maxX = 339;
DevMat04.maxY = 898;
DevMat04.centerX = 187;
DevMat04.centerY = 791;
class DevMat05 extends Mat {
}
DevMat05.minX = 340;
DevMat05.minY = 35;
DevMat05.maxX = 644;
DevMat05.maxY = 250;
DevMat05.centerX = 492;
DevMat05.centerY = 143;
class DevMat06 extends Mat {
}
DevMat06.minX = 340;
DevMat06.minY = 251;
DevMat06.maxX = 644;
DevMat06.maxY = 466;
DevMat06.centerX = 492;
DevMat06.centerY = 359;
class DevMat07 extends Mat {
}
DevMat07.minX = 340;
DevMat07.minY = 467;
DevMat07.maxX = 644;
DevMat07.maxY = 682;
DevMat07.centerX = 492;
DevMat07.centerY = 575;
class DevMat08 extends Mat {
}
DevMat08.minX = 340;
DevMat08.minY = 683;
DevMat08.maxX = 644;
DevMat08.maxY = 898;
DevMat08.centerX = 492;
DevMat08.centerY = 791;
class DevMat09 extends Mat {
}
DevMat09.minX = 645;
DevMat09.minY = 35;
DevMat09.maxX = 949;
DevMat09.maxY = 250;
DevMat09.centerX = 797;
DevMat09.centerY = 143;
class DevMat10 extends Mat {
}
DevMat10.minX = 645;
DevMat10.minY = 251;
DevMat10.maxX = 949;
DevMat10.maxY = 466;
DevMat10.centerX = 797;
DevMat10.centerY = 359;
class DevMat11 extends Mat {
}
DevMat11.minX = 645;
DevMat11.minY = 467;
DevMat11.maxX = 949;
DevMat11.maxY = 682;
DevMat11.centerX = 797;
DevMat11.centerY = 575;
class DevMat12 extends Mat {
}
DevMat12.minX = 645;
DevMat12.minY = 683;
DevMat12.maxX = 949;
DevMat12.maxY = 898;
DevMat12.centerX = 797;
DevMat12.centerY = 791;
class RingMat extends Mat {
    static isInsideCircle(x, y) {
        const diffX = x - this.centerX;
        const diffY = y - this.centerY;
        const distanceFromCenter = Math.sqrt(diffX * diffX + diffY * diffY);
        if (distanceFromCenter < this.radius) {
            return true;
        }
        else {
            return false;
        }
    }
    static isInFrontOfBlueLine(y) {
        if (y < this.blueLineY) {
            return false;
        }
        else {
            return true;
        }
    }
    static isInFrontOfGreenLine(y) {
        if (y > this.greenLineY) {
            return false;
        }
        else {
            return true;
        }
    }
}
RingMat.minX = 45;
RingMat.minY = 45;
RingMat.maxX = 455;
RingMat.maxY = 455;
RingMat.centerX = 250;
RingMat.centerY = 250;
RingMat.radius = 190;
RingMat.blueLineY = 88;
RingMat.greenLineY = 410;
RingMat.startPointBlueSideX = 250;
RingMat.startPointBlueSideY = 198;
RingMat.startPointGreenSideX = 250;
RingMat.startPointGreenSideY = 300;
class SimpleTileMat extends TileMat {
}
SimpleTileMat.minX = 98;
SimpleTileMat.minY = 142;
SimpleTileMat.maxX = 402;
SimpleTileMat.maxY = 358;
SimpleTileMat.centerX = 250;
SimpleTileMat.centerY = 250;
SimpleTileMat.matrixMinX = 599;
SimpleTileMat.matrixMinY = 140;
SimpleTileMat.matrixMaxX = 904;
SimpleTileMat.matrixMaxY = 359;
SimpleTileMat.matrixRows = 5;
SimpleTileMat.matrixColumns = 7;
class StandardId {
    static getIdName(value) {
        for (const element of this.idTable) {
            if (element.id === value) {
                return element.name;
            }
        }
        return undefined;
    }
    static includes(idName) {
        for (const element of this.idTable) {
            if (element.name === idName) {
                return true;
            }
        }
        return false;
    }
}
class SimpleCardAlphabet extends StandardId {
}
SimpleCardAlphabet.names = {
    markA: 'markA',
    markB: 'markB',
    markC: 'markC',
    markD: 'markD',
    markE: 'markE',
    markF: 'markF',
    markG: 'markG',
    markH: 'markH',
    markI: 'markI',
    markJ: 'markJ',
    markK: 'markK',
    markL: 'markL',
    markM: 'markM',
    markN: 'markN',
    markO: 'markO',
    markP: 'markP',
    markQ: 'markQ',
    markR: 'markR',
    markS: 'markS',
    markT: 'markT',
    markU: 'markU',
    markV: 'markV',
    markW: 'markW',
    markX: 'markX',
    markY: 'markY',
    markZ: 'markZ',
};
SimpleCardAlphabet.idTable = [
    { name: SimpleCardAlphabet.names.markA, id: 3670337 },
    { name: SimpleCardAlphabet.names.markB, id: 3670338 },
    { name: SimpleCardAlphabet.names.markC, id: 3670339 },
    { name: SimpleCardAlphabet.names.markD, id: 3670340 },
    { name: SimpleCardAlphabet.names.markE, id: 3670341 },
    { name: SimpleCardAlphabet.names.markF, id: 3670342 },
    { name: SimpleCardAlphabet.names.markG, id: 3670343 },
    { name: SimpleCardAlphabet.names.markH, id: 3670344 },
    { name: SimpleCardAlphabet.names.markI, id: 3670345 },
    { name: SimpleCardAlphabet.names.markJ, id: 3670346 },
    { name: SimpleCardAlphabet.names.markK, id: 3670347 },
    { name: SimpleCardAlphabet.names.markL, id: 3670348 },
    { name: SimpleCardAlphabet.names.markM, id: 3670349 },
    { name: SimpleCardAlphabet.names.markN, id: 3670350 },
    { name: SimpleCardAlphabet.names.markO, id: 3670351 },
    { name: SimpleCardAlphabet.names.markP, id: 3670352 },
    { name: SimpleCardAlphabet.names.markQ, id: 3670353 },
    { name: SimpleCardAlphabet.names.markR, id: 3670354 },
    { name: SimpleCardAlphabet.names.markS, id: 3670355 },
    { name: SimpleCardAlphabet.names.markT, id: 3670356 },
    { name: SimpleCardAlphabet.names.markU, id: 3670357 },
    { name: SimpleCardAlphabet.names.markV, id: 3670358 },
    { name: SimpleCardAlphabet.names.markW, id: 3670359 },
    { name: SimpleCardAlphabet.names.markX, id: 3670360 },
    { name: SimpleCardAlphabet.names.markY, id: 3670361 },
    { name: SimpleCardAlphabet.names.markZ, id: 3670362 },
];
class Card extends StandardId {
}
Card.names = {
    typhoonCard: 'typhoonCard',
    rushCard: 'rushCard',
    autoTackleCard: 'autoTackleCard',
    randomCard: 'randomCard',
    pushPowerUpCard: 'pushPowerUpCard',
    haritePowerUpCard: 'haritePowerUpCard',
    sideAttackCard: 'sideAttackCard',
    easyModeCard: 'easyModeCard',
    leftCard: 'leftCard',
    rightCard: 'rightCard',
    frontCard: 'frontCard',
    backCard: 'backCard',
    goCard: 'goCard',
};
Card.idTable = [
    { name: Card.names.typhoonCard, id: 3670016 },
    { name: Card.names.rushCard, id: 3670054 },
    { name: Card.names.autoTackleCard, id: 3670018 },
    { name: Card.names.randomCard, id: 3670056 },
    { name: Card.names.pushPowerUpCard, id: 3670020 },
    { name: Card.names.haritePowerUpCard, id: 3670058 },
    { name: Card.names.sideAttackCard, id: 3670022 },
    { name: Card.names.easyModeCard, id: 3670060 },
    { name: Card.names.leftCard, id: 3670024 },
    { name: Card.names.rightCard, id: 3670062 },
    { name: Card.names.frontCard, id: 3670026 },
    { name: Card.names.backCard, id: 3670064 },
    { name: Card.names.goCard, id: 3670028 },
];
class GameMark extends StandardId {
}
GameMark.names = {
    craftFighter: 'craftFighter',
    rythmAndGo: 'rythmAndGo',
    skunkChaser: 'skunkChaser',
    fingerStrike2P: 'fingerStrike2P',
    fingerStrike1P: 'fingerStrike1P',
    freeMove: 'freeMove',
};
GameMark.idTable = [
    { name: GameMark.names.craftFighter, id: 3670048 },
    { name: GameMark.names.rythmAndGo, id: 3670052 },
    { name: GameMark.names.skunkChaser, id: 3670086 },
    { name: GameMark.names.fingerStrike2P, id: 3670050 },
    { name: GameMark.names.fingerStrike1P, id: 3670088 },
    { name: GameMark.names.freeMove, id: 3670084 },
];
class SimpleCardNumber extends StandardId {
}
SimpleCardNumber.names = {
    mark0: 'mark0',
    mark1: 'mark1',
    mark2: 'mark2',
    mark3: 'mark3',
    mark4: 'mark4',
    mark5: 'mark5',
    mark6: 'mark6',
    mark7: 'mark7',
    mark8: 'mark8',
    mark9: 'mark9',
};
SimpleCardNumber.idTable = [
    { name: SimpleCardNumber.names.mark0, id: 3670320 },
    { name: SimpleCardNumber.names.mark1, id: 3670321 },
    { name: SimpleCardNumber.names.mark2, id: 3670322 },
    { name: SimpleCardNumber.names.mark3, id: 3670323 },
    { name: SimpleCardNumber.names.mark4, id: 3670324 },
    { name: SimpleCardNumber.names.mark5, id: 3670325 },
    { name: SimpleCardNumber.names.mark6, id: 3670326 },
    { name: SimpleCardNumber.names.mark7, id: 3670327 },
    { name: SimpleCardNumber.names.mark8, id: 3670328 },
    { name: SimpleCardNumber.names.mark9, id: 3670329 },
];
class Skunk extends StandardId {
}
Skunk.names = {
    blueSkunk: 'blueSkunk',
    greenSkunk: 'greenSkunk',
    yellowSkunk: 'yellowSkunk',
    orangeSkunk: 'orangeSkunk',
    redSkunk: 'redSkunk',
    brownSkunk: 'brownSkunk',
};
Skunk.idTable = [
    { name: Skunk.names.blueSkunk, id: 3670078 },
    { name: Skunk.names.greenSkunk, id: 3670042 },
    { name: Skunk.names.yellowSkunk, id: 3670080 },
    { name: Skunk.names.orangeSkunk, id: 3670044 },
    { name: Skunk.names.redSkunk, id: 3670082 },
    { name: Skunk.names.brownSkunk, id: 3670046 },
];
class Sticker extends StandardId {
}
Sticker.names = {
    speedUpSticker: 'speedUpSticker',
    speedDownSticker: 'speedDownSticker',
    wobbleSticker: 'wobbleSticker',
    panicSticker: 'panicSticker',
    spinSticker: 'spinSticker',
    shockSticker: 'shockSticker',
};
Sticker.idTable = [
    { name: Sticker.names.speedUpSticker, id: 3670066 },
    { name: Sticker.names.speedDownSticker, id: 3670030 },
    { name: Sticker.names.wobbleSticker, id: 3670068 },
    { name: Sticker.names.panicSticker, id: 3670032 },
    { name: Sticker.names.spinSticker, id: 3670070 },
    { name: Sticker.names.shockSticker, id: 3670034 },
];
class SimpleCardSymbol extends StandardId {
}
SimpleCardSymbol.names = {
    markExclamation: 'markExclamation',
    markUp: 'markUp',
    markQuestion: 'markQuestion',
    markPlus: 'markPlus',
    markMinus: 'markMinus',
    markEqual: 'markEqual',
    markLeft: 'markLeft',
    markDown: 'markDown',
    markRight: 'markRight',
    markMultiple: 'markMultiple',
    markDivision: 'markDivision',
    markPercent: 'markPercent',
};
SimpleCardSymbol.idTable = [
    { name: SimpleCardSymbol.names.markExclamation, id: 3670305 },
    { name: SimpleCardSymbol.names.markUp, id: 3670366 },
    { name: SimpleCardSymbol.names.markQuestion, id: 3670335 },
    { name: SimpleCardSymbol.names.markPlus, id: 3670315 },
    { name: SimpleCardSymbol.names.markMinus, id: 3670317 },
    { name: SimpleCardSymbol.names.markEqual, id: 3670333 },
    { name: SimpleCardSymbol.names.markLeft, id: 3670332 },
    { name: SimpleCardSymbol.names.markDown, id: 3670367 },
    { name: SimpleCardSymbol.names.markRight, id: 3670334 },
    { name: SimpleCardSymbol.names.markMultiple, id: 3670314 },
    { name: SimpleCardSymbol.names.markDivision, id: 3670319 },
    { name: SimpleCardSymbol.names.markPercent, id: 3670309 },
];
class Id {
    static getStandardIdName(value) {
        const idClasses = [
            Card,
            Skunk,
            Sticker,
            GameMark,
            SimpleCardNumber,
            SimpleCardAlphabet,
            SimpleCardSymbol,
        ];
        for (const targetClass of idClasses) {
            const idName = targetClass.getIdName(value);
            if (idName !== undefined) {
                return idName;
            }
        }
        return value.toString();
    }
}
Id.Card = Card;
Id.GameMark = GameMark;
Id.Skunk = Skunk;
Id.Sticker = Sticker;
Id.SimpleCardNumber = SimpleCardNumber;
Id.SimpleCardAlphabet = SimpleCardAlphabet;
Id.SimpleCardSymbol = SimpleCardSymbol;
Id.ColorTileMat = ColorTileMat;
Id.RingMat = RingMat;
Id.SimpleTileMat = SimpleTileMat;
Id.DevMat01 = DevMat01;
Id.DevMat02 = DevMat02;
Id.DevMat03 = DevMat03;
Id.DevMat04 = DevMat04;
Id.DevMat05 = DevMat05;
Id.DevMat06 = DevMat06;
Id.DevMat07 = DevMat07;
Id.DevMat08 = DevMat08;
Id.DevMat09 = DevMat09;
Id.DevMat10 = DevMat10;
Id.DevMat11 = DevMat11;
Id.DevMat12 = DevMat12;
class P5tId extends Id {
}
class CubeChar {
    constructor(service) {
        this.uuid = '';
        this.characteristic = undefined;
        this.errStrInProgress = 'GATT operation already in progress.';
        this.timerID = 0;
        this.retryInterval = 30;
        this.executeTime = 0;
        this.fps = 15;
        this.maxRetryCount = 20;
        this.service = service;
    }
    prepare() {
        return new Promise((resolve, reject) => {
            if (this.service) {
                this.service
                    .getCharacteristic(this.uuid)
                    .then((characteristic) => {
                    this.characteristic = characteristic;
                    resolve('characteristic resolve');
                })
                    .catch((error) => {
                    reject(error);
                });
            }
            else {
                reject(new Error('service does not exist.'));
            }
        });
    }
    writeValue(buf) {
        const currentTime = new Date().getTime();
        if (currentTime - this.executeTime > 1000 / this.fps) {
            this.executeTime = currentTime;
            const RETRY_COUNT_FOR_1ST_TIME = 0;
            return this.writeValueCore(buf, RETRY_COUNT_FOR_1ST_TIME);
        }
        else {
            return Promise.resolve('writeValue ignored due to issuing too fast!! Please adjust framerate');
        }
    }
    writeValueCore(buf, countRetry) {
        return new Promise((resolve, reject) => {
            if (countRetry > this.maxRetryCount) {
                resolve('writeValue ignored because it reaches max retry count');
            }
            if (this.characteristic !== undefined) {
                this.characteristic
                    .writeValue(buf)
                    .then(() => {
                    resolve('writeValue resolved');
                })
                    .catch((error) => {
                    if (error.message.indexOf(this.errStrInProgress) !== -1) {
                        clearTimeout(this.timerID);
                        this.timerID = setTimeout(this.writeValueCore.bind(this, buf, countRetry + 1), this.retryInterval);
                    }
                    else {
                        reject(error);
                    }
                });
            }
            else {
                reject(new Error('characteristic does not exist.'));
            }
        });
    }
    readValue() {
        return new Promise((resolve, reject) => {
            if (this.characteristic !== undefined) {
                this.characteristic
                    .readValue()
                    .then((dataView) => {
                    resolve(dataView);
                })
                    .catch((error) => {
                    if (error.message.indexOf(this.errStrInProgress) !== -1) {
                        clearTimeout(this.timerID);
                        this.timerID = setTimeout(this.readValue.bind(this), this.retryInterval);
                    }
                    else {
                        reject(error);
                    }
                });
            }
            else {
                reject(new Error('characteristic does not exist.'));
            }
        });
    }
    setFrameRate(fps) {
        this.fps = fps;
    }
}
class CubeBatteryChar extends CubeChar {
    constructor() {
        super(...arguments);
        this.uuid = '10b20108-5b3b-4571-9508-cf3efcd7bbae';
        this.batteryLevel = 0;
        this.cbBatteryLevelChanged = [];
    }
    prepare() {
        return new Promise((resolve, reject) => {
            super
                .prepare()
                .then(() => {
                if (this.characteristic) {
                    this.characteristic.addEventListener('characteristicvaluechanged', (event) => {
                        const target = event.target;
                        if (target === null || target === void 0 ? void 0 : target.value) {
                            this.setBatteryLevel(target.value);
                        }
                    });
                    this.characteristic
                        .startNotifications()
                        .then(() => {
                        return this.readBatteryLevel();
                    })
                        .then(() => {
                        resolve('characteristic resolve');
                    })
                        .catch((error) => {
                        reject(error);
                    });
                }
                else {
                    reject(new Error('characteristic does not exist.'));
                }
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    getBatteryLevel() {
        return this.batteryLevel;
    }
    readBatteryLevel() {
        return new Promise((resolve, reject) => {
            this.readValue()
                .then((readValue) => {
                this.setBatteryLevel(readValue);
                resolve('Success');
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    setBatteryLevel(data) {
        const previousBatteryLevel = this.batteryLevel;
        const BATTERY_LEVEL_INDEX = 0;
        this.batteryLevel = data.getUint8(BATTERY_LEVEL_INDEX);
        if (previousBatteryLevel !== this.batteryLevel) {
            this.callbackBatteryLevel(this.batteryLevel);
        }
    }
    addEventListener(type, listener) {
        const TYPE_CHANGE = 'change';
        if (type === TYPE_CHANGE) {
            this.cbBatteryLevelChanged.push(listener);
        }
        this.callbackBatteryLevel(this.batteryLevel);
    }
    callbackBatteryLevel(batteryLevel) {
        for (const cb of this.cbBatteryLevelChanged) {
            cb === null || cb === void 0 ? void 0 : cb(batteryLevel);
        }
    }
}
class CubeButtonChar extends CubeChar {
    constructor() {
        super(...arguments);
        this.uuid = '10b20107-5b3b-4571-9508-cf3efcd7bbae';
        this.buttonPressed = false;
        this.cbBoth = [];
        this.cbPressed = [];
        this.cbReleased = [];
    }
    prepare() {
        return new Promise((resolve, reject) => {
            super
                .prepare()
                .then(() => {
                if (this.characteristic) {
                    this.characteristic.addEventListener('characteristicvaluechanged', (event) => {
                        const target = event.target;
                        if (target === null || target === void 0 ? void 0 : target.value) {
                            this.setButtonStatus(target.value);
                            this.callbackButtonStatus(this.buttonPressed);
                        }
                    });
                    this.characteristic
                        .startNotifications()
                        .then(() => {
                        return this.readButtonStatus();
                    })
                        .then(() => {
                        this.callbackButtonStatus(this.buttonPressed);
                        resolve('characteristic resolve');
                    })
                        .catch((error) => {
                        reject(error);
                    });
                }
                else {
                    reject(new Error('characteristic does not exist.'));
                }
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    isButtonPressed() {
        return this.buttonPressed;
    }
    readButtonStatus() {
        return new Promise((resolve, reject) => {
            this.readValue()
                .then((readValue) => {
                this.setButtonStatus(readValue);
                resolve('Success');
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    setButtonStatus(data) {
        const PRESSED_STATE_INDEX = 1;
        const PRESSED = 0x80;
        const value = data.getUint8(PRESSED_STATE_INDEX);
        if (value === PRESSED) {
            this.buttonPressed = true;
        }
        else {
            this.buttonPressed = false;
        }
    }
    addEventListener(type, listener) {
        const TYPE_PRESS = 'press';
        const TYPE_RELEASE = 'release';
        const TYPE_BOTH = 'both';
        if (type === TYPE_PRESS) {
            this.cbPressed.push(listener);
        }
        else if (type === TYPE_RELEASE) {
            this.cbReleased.push(listener);
        }
        else if (type === TYPE_BOTH) {
            this.cbBoth.push(listener);
        }
        this.callbackButtonStatus(this.buttonPressed);
    }
    callbackButtonStatus(isPressed) {
        for (const cb of this.cbBoth) {
            cb === null || cb === void 0 ? void 0 : cb(isPressed);
        }
        for (const cb of this.cbPressed) {
            if (isPressed) {
                cb === null || cb === void 0 ? void 0 : cb();
            }
        }
        for (const cb of this.cbReleased) {
            if (!isPressed) {
                cb === null || cb === void 0 ? void 0 : cb();
            }
        }
    }
}
class CubeIDChar extends CubeChar {
    constructor() {
        super(...arguments);
        this.uuid = '10b20101-5b3b-4571-9508-cf3efcd7bbae';
        this.idInfo = {
            positionId: undefined,
            standardId: undefined,
        };
        this.cbPositionId = [];
        this.cbStandardId = [];
    }
    prepare() {
        return new Promise((resolve, reject) => {
            super
                .prepare()
                .then(() => {
                if (this.characteristic) {
                    this.characteristic.addEventListener('characteristicvaluechanged', (event) => {
                        const target = event.target;
                        if (target === null || target === void 0 ? void 0 : target.value) {
                            this.setIdInfo(target.value);
                        }
                    });
                    this.characteristic
                        .startNotifications()
                        .then(() => {
                        return this.readIdInfo();
                    })
                        .then(() => {
                        resolve('characteristic resolve');
                    })
                        .catch((error) => {
                        reject(error);
                    });
                }
                else {
                    reject(new Error('characteristic does not exist.'));
                }
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    getPositionId() {
        return this.idInfo.positionId;
    }
    getStandardId() {
        return this.idInfo.standardId;
    }
    readIdInfo() {
        return new Promise((resolve, reject) => {
            this.readValue()
                .then((readValue) => {
                this.setIdInfo(readValue);
                resolve('Success');
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    setIdInfo(data) {
        const previousIdInfo = Object.assign({}, this.idInfo);
        const INFO_TYPE_INDEX = 0;
        const INFO_TYPE_POSITION_ID = 1;
        const INFO_TYPE_STANDARD_ID = 2;
        const INFO_TYPE_POSITION_ID_MISSED = 3;
        const INFO_TYPE_STANDARD_ID_MISSED = 4;
        if (data.getUint8(INFO_TYPE_INDEX) === INFO_TYPE_POSITION_ID) {
            const CENTER_X_INDEX = 1;
            const CENTER_Y_INDEX = 3;
            const ANGLE_INDEX = 5;
            const SENSOR_X_INDEX = 7;
            const SENSOR_Y_INDEX = 9;
            this.idInfo.positionId = {
                centerX: data.getUint16(CENTER_X_INDEX, true),
                centerY: data.getUint16(CENTER_Y_INDEX, true),
                angle: data.getUint16(ANGLE_INDEX, true),
                sensorX: data.getUint16(SENSOR_X_INDEX, true),
                sensorY: data.getUint16(SENSOR_Y_INDEX, true),
            };
            if (this.isPositionIdUpdated(previousIdInfo.positionId, this.idInfo.positionId)) {
                for (const cb of this.cbPositionId) {
                    cb === null || cb === void 0 ? void 0 : cb(this.idInfo.positionId);
                }
            }
        }
        else if (data.getUint8(INFO_TYPE_INDEX) === INFO_TYPE_STANDARD_ID) {
            const STANDARD_ID_INDEX = 1;
            const ANGLE_INDEX = 5;
            this.idInfo.standardId = {
                idNum: data.getUint32(STANDARD_ID_INDEX, true),
                id: Id.getStandardIdName(data.getUint32(STANDARD_ID_INDEX, true)),
                angle: data.getUint16(ANGLE_INDEX, true),
            };
            if (this.isStandardIdUpdated(previousIdInfo.standardId, this.idInfo.standardId)) {
                for (const cb of this.cbStandardId) {
                    cb === null || cb === void 0 ? void 0 : cb(this.idInfo.standardId);
                }
            }
        }
        else if (data.getUint8(INFO_TYPE_INDEX) === INFO_TYPE_POSITION_ID_MISSED) {
            this.idInfo.positionId = undefined;
            for (const cb of this.cbPositionId) {
                cb === null || cb === void 0 ? void 0 : cb(this.idInfo.positionId);
            }
        }
        else if (data.getUint8(INFO_TYPE_INDEX) === INFO_TYPE_STANDARD_ID_MISSED) {
            this.idInfo.standardId = undefined;
            for (const cb of this.cbStandardId) {
                cb === null || cb === void 0 ? void 0 : cb(this.idInfo.standardId);
            }
        }
    }
    isPositionIdUpdated(prev, current) {
        if ((prev === null || prev === void 0 ? void 0 : prev.centerX) !== (current === null || current === void 0 ? void 0 : current.centerX)) {
            return true;
        }
        if ((prev === null || prev === void 0 ? void 0 : prev.centerY) !== (current === null || current === void 0 ? void 0 : current.centerY)) {
            return true;
        }
        if ((prev === null || prev === void 0 ? void 0 : prev.angle) !== (current === null || current === void 0 ? void 0 : current.angle)) {
            return true;
        }
        if ((prev === null || prev === void 0 ? void 0 : prev.sensorX) !== (current === null || current === void 0 ? void 0 : current.sensorX)) {
            return true;
        }
        if ((prev === null || prev === void 0 ? void 0 : prev.sensorY) !== (current === null || current === void 0 ? void 0 : current.sensorY)) {
            return true;
        }
        return false;
    }
    isStandardIdUpdated(prev, current) {
        if ((prev === null || prev === void 0 ? void 0 : prev.id) !== (current === null || current === void 0 ? void 0 : current.id)) {
            return true;
        }
        if ((prev === null || prev === void 0 ? void 0 : prev.idNum) !== (current === null || current === void 0 ? void 0 : current.idNum)) {
            return true;
        }
        if ((prev === null || prev === void 0 ? void 0 : prev.angle) !== (current === null || current === void 0 ? void 0 : current.angle)) {
            return true;
        }
        return false;
    }
    callbackCurrentInfo() {
        for (const cb of this.cbPositionId) {
            cb === null || cb === void 0 ? void 0 : cb(this.idInfo.positionId);
        }
        for (const cb of this.cbStandardId) {
            cb === null || cb === void 0 ? void 0 : cb(this.idInfo.standardId);
        }
    }
    addEventListener(type, listener) {
        const TYPE_POSITION = 'positionid';
        const TYPE_STANDARD = 'standardid';
        if (type === TYPE_POSITION) {
            this.cbPositionId.push(listener);
        }
        else if (type === TYPE_STANDARD) {
            this.cbStandardId.push(listener);
        }
        this.callbackCurrentInfo();
    }
}
class CubeLightChar extends CubeChar {
    constructor() {
        super(...arguments);
        this.uuid = '10b20103-5b3b-4571-9508-cf3efcd7bbae';
        this.cmdId = {
            turnOff: 1,
            turnOn: 3,
        };
    }
    turnLightOff() {
        const buf = new Uint8Array([this.cmdId.turnOff]);
        this.writeValue(buf);
    }
    turnLightOnRGB(r, g, b, duration = 0x00) {
        this.turnLightOnRGBA(r, g, b, 255, duration);
    }
    turnLightOnRGBA(r, g, b, a, duration = 0x00) {
        const NUM_OF_LIGHT = 0x01;
        const LIGHT_ID = 0x01;
        const buf = new Uint8Array([
            this.cmdId.turnOn,
            CubeUtil.clipNumberUInt8(Math.floor(duration / 10)),
            NUM_OF_LIGHT,
            LIGHT_ID,
            CubeUtil.clipNumberUInt8(Math.floor((r * a) / 255)),
            CubeUtil.clipNumberUInt8(Math.floor((g * a) / 255)),
            CubeUtil.clipNumberUInt8(Math.floor((b * a) / 255)),
        ]);
        this.writeValue(buf);
    }
}
class CubeMotorChar extends CubeChar {
    constructor() {
        super(...arguments);
        this.uuid = '10b20102-5b3b-4571-9508-cf3efcd7bbae';
        this.cmdId = {
            motorControl: 1,
            motorControlTimeSpecified: 2,
            motorControlAimSpecified: 3,
            motorControlMultiAimSpecified: 4,
            motorControlAccelerationSpecified: 5,
        };
        this.motorId = {
            left: 1,
            right: 2,
        };
        this.dirId = {
            front: 1,
            back: 2,
        };
        this.sequenceId = 0;
    }
    prepare() {
        return new Promise((resolve, reject) => {
            super
                .prepare()
                .then(() => {
                if (this.characteristic) {
                    this.characteristic.addEventListener('characteristicvaluechanged', (event) => {
                        const target = event.target;
                        if (target === null || target === void 0 ? void 0 : target.value) {
                        }
                    });
                    this.characteristic
                        .startNotifications()
                        .then(() => {
                        resolve('characteristic resolve');
                    })
                        .catch((error) => {
                        reject(error);
                    });
                }
                else {
                    reject(new Error('characteristic does not exist.'));
                }
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    getMotorDirection(speedValue) {
        if (speedValue >= 0) {
            return this.dirId.front;
        }
        else {
            return this.dirId.back;
        }
    }
    motorControl(left, right) {
        this.motorControlTimeSpecified(left, right);
    }
    motorControlTimeSpecified(left, right, duration = 0) {
        const buf = new Uint8Array([
            this.cmdId.motorControlTimeSpecified,
            this.motorId.left,
            this.getMotorDirection(left),
            CubeUtil.clipNumberUInt8(Math.abs(left)),
            this.motorId.right,
            this.getMotorDirection(right),
            CubeUtil.clipNumberUInt8(Math.abs(right)),
            CubeUtil.clipNumberUInt8(duration),
        ]);
        this.writeValue(buf);
    }
    motorControlAimSpecified(aim, maxSpeed, moveType = CubeMotorChar.moveTypeId.efficient, easeType = CubeMotorChar.easeTypeId.constant, timeout = 5) {
        const RESERVED_VALUE = 0;
        const SEND_BUF_SIZE = 13;
        const buf = new ArrayBuffer(SEND_BUF_SIZE);
        const view = new DataView(buf);
        let offset = 0;
        view.setUint8(offset, this.cmdId.motorControlAimSpecified);
        offset += 1;
        view.setUint8(offset, this.sequenceId);
        offset += 1;
        view.setUint8(offset, CubeUtil.clipNumberUInt8(timeout));
        offset += 1;
        view.setUint8(offset, CubeUtil.clipNumberUInt8(moveType));
        offset += 1;
        view.setUint8(offset, CubeUtil.clipNumberUInt8(maxSpeed));
        offset += 1;
        view.setUint8(offset, CubeUtil.clipNumberUInt8(easeType));
        offset += 1;
        view.setUint8(offset, RESERVED_VALUE);
        offset += 1;
        view.setUint16(offset, CubeUtil.clipNumberUInt16(aim.x), true);
        offset += 2;
        view.setUint16(offset, CubeUtil.clipNumberUInt16(aim.y), true);
        offset += 2;
        const angle = aim.angle === undefined ? 0 : aim.angle;
        const angleType = aim.angleType === undefined ? CubeMotorChar.angleTypeId.noRotate : aim.angleType;
        view.setUint16(offset, CubeUtil.clipNumberUInt16(angle + (angleType << 13)), true);
        this.writeValue(buf);
        this.inclementSequenceId();
    }
    inclementSequenceId() {
        this.sequenceId += 1;
        if (this.sequenceId > 255) {
            this.sequenceId = 0;
        }
    }
    motorControlMultipleAimSpecified(aims, maxSpeed, moveType = CubeMotorChar.moveTypeId.efficient, easeType = CubeMotorChar.easeTypeId.constant, isAppend = false, timeout = 5) {
        const RESERVED_VALUE = 0;
        const SETTING_OVERWRITE = 0;
        const SETTING_APPEND = 1;
        const BUF_SIZE_COMMON = 8;
        const BUF_SIZE_AIM = 6;
        const SEND_BUF_SIZE = BUF_SIZE_COMMON + BUF_SIZE_AIM * aims.length;
        const buf = new ArrayBuffer(SEND_BUF_SIZE);
        const view = new DataView(buf);
        let offset = 0;
        view.setUint8(offset, this.cmdId.motorControlMultiAimSpecified);
        offset += 1;
        view.setUint8(offset, this.sequenceId);
        offset += 1;
        view.setUint8(offset, CubeUtil.clipNumberUInt8(timeout));
        offset += 1;
        view.setUint8(offset, CubeUtil.clipNumberUInt8(moveType));
        offset += 1;
        view.setUint8(offset, CubeUtil.clipNumberUInt8(maxSpeed));
        offset += 1;
        view.setUint8(offset, CubeUtil.clipNumberUInt8(easeType));
        offset += 1;
        view.setUint8(offset, RESERVED_VALUE);
        offset += 1;
        view.setUint8(offset, isAppend ? SETTING_APPEND : SETTING_OVERWRITE);
        offset += 1;
        for (const aim of aims) {
            view.setUint16(offset, CubeUtil.clipNumberUInt16(aim.x), true);
            offset += 2;
            view.setUint16(offset, CubeUtil.clipNumberUInt16(aim.y), true);
            offset += 2;
            const angle = aim.angle === undefined ? 0 : aim.angle;
            const angleType = aim.angleType === undefined ? CubeMotorChar.angleTypeId.noRotate : aim.angleType;
            view.setUint16(offset, CubeUtil.clipNumberUInt16(angle + (angleType << 13)), true);
            offset += 2;
        }
        this.writeValue(new Uint8Array(buf));
        this.inclementSequenceId();
    }
    motorControlAccelerationSpecified() {
        const buf = new Uint8Array([0x05, 0x32, 0x05, 0x0f, 0x00, 0x00, 0x00, 0x00, 0x64]);
        this.writeValue(buf);
    }
}
CubeMotorChar.moveTypeId = {
    efficient: 0,
    withoutBack: 1,
    rotate1st: 2,
};
CubeMotorChar.easeTypeId = {
    constant: 0,
    accel: 1,
    decel: 2,
    accelDecel: 3,
};
CubeMotorChar.angleTypeId = {
    absEfficient: 0,
    absPositiveDir: 1,
    absNegativeDir: 2,
    relPositiveDir: 3,
    relNegativeDir: 4,
    noRotate: 5,
    sameAsCurrent: 6,
};
class CubeSensorChar extends CubeChar {
    constructor() {
        super(...arguments);
        this.uuid = '10b20106-5b3b-4571-9508-cf3efcd7bbae';
        this.sensorInfo = {
            flat: false,
            posture: CubeSensorChar.postureId.top,
        };
        this.cbFlat = [];
        this.cbCollision = [];
        this.cbDoubleTapped = [];
        this.cbPostureChanged = [];
    }
    prepare() {
        return new Promise((resolve, reject) => {
            super
                .prepare()
                .then(() => {
                if (this.characteristic) {
                    this.characteristic.addEventListener('characteristicvaluechanged', (event) => {
                        const target = event.target;
                        if (target === null || target === void 0 ? void 0 : target.value) {
                            this.setSensorInfo(target.value);
                        }
                    });
                    this.characteristic
                        .startNotifications()
                        .then(() => {
                        return this.readSensorInfo();
                    })
                        .then(() => {
                        resolve('characteristic resolve');
                    })
                        .catch((error) => {
                        reject(error);
                    });
                }
                else {
                    reject(new Error('characteristic does not exist.'));
                }
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    isFlat() {
        return this.sensorInfo.flat;
    }
    getPosture() {
        return this.sensorInfo.posture;
    }
    readSensorInfo() {
        return new Promise((resolve, reject) => {
            this.readValue()
                .then((readValue) => {
                this.setSensorInfo(readValue);
                resolve('Success');
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    setSensorInfo(data) {
        const previousSensorInfo = Object.assign({}, this.sensorInfo);
        const INFO_TYPE_INDEX = 0;
        const INFO_TYPE_DETECTED = 1;
        if (data.getUint8(INFO_TYPE_INDEX) === INFO_TYPE_DETECTED) {
            const FLAT_INDEX = 1;
            const COLLISION_INDEX = 2;
            const DOUBLE_TAP_INDEX = 3;
            const POSTURE_INDEX = 4;
            if (data.getUint8(DOUBLE_TAP_INDEX)) {
                for (const cb of this.cbDoubleTapped) {
                    cb === null || cb === void 0 ? void 0 : cb();
                }
            }
            if (data.getUint8(COLLISION_INDEX)) {
                for (const cb of this.cbCollision) {
                    cb === null || cb === void 0 ? void 0 : cb();
                }
            }
            this.sensorInfo.flat = !!data.getUint8(FLAT_INDEX);
            if (previousSensorInfo.flat !== this.sensorInfo.flat) {
                for (const cb of this.cbFlat) {
                    cb === null || cb === void 0 ? void 0 : cb(this.sensorInfo.flat);
                }
            }
            this.sensorInfo.posture = this.convertPostureValueToId(data.getUint8(POSTURE_INDEX));
            if (previousSensorInfo.posture !== this.sensorInfo.posture) {
                for (const cb of this.cbPostureChanged) {
                    cb === null || cb === void 0 ? void 0 : cb(this.sensorInfo.posture);
                }
            }
        }
    }
    callbackCurrentInfo() {
        for (const cb of this.cbFlat) {
            cb === null || cb === void 0 ? void 0 : cb(this.sensorInfo.flat);
        }
        for (const cb of this.cbPostureChanged) {
            cb === null || cb === void 0 ? void 0 : cb(this.sensorInfo.posture);
        }
    }
    addEventListener(type, listener) {
        const TYPE_FLAT = 'flat';
        const TYPE_COLLISION = 'collision';
        const TYPE_DOUBLE_TAP = 'doubletap';
        const TYPE_POSTURE = 'posture';
        if (type === TYPE_FLAT) {
            this.cbFlat.push(listener);
        }
        else if (type === TYPE_COLLISION) {
            this.cbCollision.push(listener);
        }
        else if (type === TYPE_DOUBLE_TAP) {
            this.cbDoubleTapped.push(listener);
        }
        else if (type === TYPE_POSTURE) {
            this.cbPostureChanged.push(listener);
        }
        this.callbackCurrentInfo();
    }
    convertPostureValueToId(value) {
        const POSTURE_VALUE_MIN = 0x01;
        const POSTURE_VALUE_MAX = 0x06;
        if (value < POSTURE_VALUE_MIN || value > POSTURE_VALUE_MAX) {
            return 'invalid';
        }
        const matrix = [
            CubeSensorChar.postureId.top,
            CubeSensorChar.postureId.bottom,
            CubeSensorChar.postureId.back,
            CubeSensorChar.postureId.front,
            CubeSensorChar.postureId.right,
            CubeSensorChar.postureId.left,
        ];
        return matrix[value - 1];
    }
}
CubeSensorChar.postureId = {
    top: 'top',
    bottom: 'bottom',
    back: 'back',
    front: 'front',
    right: 'right',
    left: 'left',
};
class CubeSoundChar extends CubeChar {
    constructor() {
        super(...arguments);
        this.uuid = '10b20104-5b3b-4571-9508-cf3efcd7bbae';
        this.cmdId = {
            soundEffect: 2,
            playNote: 3,
        };
    }
    playSE(idSE) {
        const VOLUME_MAX = 0xff;
        const buf = new Uint8Array([
            this.cmdId.soundEffect,
            CubeUtil.clipNumberUInt8(idSE),
            VOLUME_MAX,
        ]);
        this.writeValue(buf);
    }
    playSingleNote(note, duration = 0x1e) {
        const REPEAT_COUNT = 0x01;
        const OPERATION_COUNT = 0x01;
        const VOLUME_MAX = 0xff;
        let adjustedNote = note;
        if (adjustedNote > 128) {
            adjustedNote = 128;
        }
        const buf = new Uint8Array([
            this.cmdId.playNote,
            REPEAT_COUNT,
            OPERATION_COUNT,
            CubeUtil.clipNumberUInt8(duration),
            CubeUtil.clipNumberUInt8(adjustedNote),
            VOLUME_MAX,
        ]);
        this.writeValue(buf);
    }
    playMelody(melody) {
        const buf = [];
        const REPEAT_COUNT = 0x01;
        const OPERATION_COUNT = melody.length;
        buf.push(this.cmdId.playNote, REPEAT_COUNT, OPERATION_COUNT);
        const VOLUME_MAX = 0xff;
        for (const element of melody) {
            if (element.note > 128) {
                element.note = 128;
            }
            buf.push(CubeUtil.clipNumberUInt8(element.duration), CubeUtil.clipNumberUInt8(element.note), VOLUME_MAX);
        }
        this.writeValue(new Uint8Array(buf));
    }
}
CubeSoundChar.seId = {
    enter: 0,
    selected: 1,
    cancel: 2,
    cursor: 3,
    matIn: 4,
    matOut: 5,
    get1: 6,
    get2: 7,
    get3: 8,
    effect1: 9,
    effect2: 10,
};
class CubeBase {
    constructor(device) {
        this.idChar = undefined;
        this.motorChar = undefined;
        this.lightChar = undefined;
        this.sensorChar = undefined;
        this.batteryChar = undefined;
        this.soundChar = undefined;
        this.buttonChar = undefined;
        this.device = undefined;
        this.charStatusArray = [false, false, false, false, false, false, false];
        this.isConnected = false;
        this.device = device;
    }
    connect() {
        return new Promise((resolve, reject) => {
            const { device } = this;
            if (device) {
                const { gatt } = device;
                if (gatt) {
                    gatt === null || gatt === void 0 ? void 0 : gatt.connect().then((server) => {
                        this.isConnected = true;
                        const CORE_CUBE_SERVICE_UUID = '10b20100-5b3b-4571-9508-cf3efcd7bbae';
                        return server.getPrimaryService(CORE_CUBE_SERVICE_UUID);
                    }).then((service) => {
                        const charArray = [];
                        charArray.push((this.idChar = new CubeIDChar(service)));
                        charArray.push((this.motorChar = new CubeMotorChar(service)));
                        charArray.push((this.lightChar = new CubeLightChar(service)));
                        charArray.push((this.sensorChar = new CubeSensorChar(service)));
                        charArray.push((this.batteryChar = new CubeBatteryChar(service)));
                        charArray.push((this.soundChar = new CubeSoundChar(service)));
                        charArray.push((this.buttonChar = new CubeButtonChar(service)));
                        for (let index = 0; index < charArray.length; index++) {
                            const characteristic = charArray[index];
                            characteristic === null || characteristic === void 0 ? void 0 : characteristic.prepare().then(() => {
                                if (this.updateCharState(index, true)) {
                                    resolve(this);
                                }
                            }).catch((error) => {
                                reject(error);
                            });
                        }
                    }).catch((error) => {
                        reject(error);
                    });
                }
                else {
                    reject(new Error('device.gatt does not exist.'));
                }
            }
            else {
                reject(new Error('device: BluetoothDevice does not exist.'));
            }
        });
    }
    disconnect() {
        const { device } = this;
        if (device && this.isConnected) {
            const { gatt } = device;
            if (gatt) {
                this.isConnected = false;
                gatt.disconnect();
                this.initDeviceInfo();
            }
        }
    }
    initDeviceInfo() {
        this.idChar = undefined;
        this.motorChar = undefined;
        this.lightChar = undefined;
        this.sensorChar = undefined;
        this.batteryChar = undefined;
        this.soundChar = undefined;
        this.buttonChar = undefined;
        this.device = undefined;
    }
    updateCharState(charIndex, isReady) {
        this.charStatusArray[charIndex] = isReady;
        for (const status of this.charStatusArray) {
            if (!status) {
                return false;
            }
        }
        return true;
    }
    setFrameRate(fps) {
        var _a, _b, _c, _d, _e, _f, _g;
        (_a = this.idChar) === null || _a === void 0 ? void 0 : _a.setFrameRate(fps);
        (_b = this.motorChar) === null || _b === void 0 ? void 0 : _b.setFrameRate(fps);
        (_c = this.lightChar) === null || _c === void 0 ? void 0 : _c.setFrameRate(fps);
        (_d = this.sensorChar) === null || _d === void 0 ? void 0 : _d.setFrameRate(fps);
        (_e = this.batteryChar) === null || _e === void 0 ? void 0 : _e.setFrameRate(fps);
        (_f = this.soundChar) === null || _f === void 0 ? void 0 : _f.setFrameRate(fps);
        (_g = this.buttonChar) === null || _g === void 0 ? void 0 : _g.setFrameRate(fps);
    }
}
class Cube {
    constructor(cube) {
        this.x = undefined;
        this.y = undefined;
        this.sensorX = undefined;
        this.sensorY = undefined;
        this.angle = undefined;
        this.standardId = undefined;
        this.flat = undefined;
        this.posture = undefined;
        this.buttonPressed = undefined;
        this.batteryLevel = undefined;
        this.cube = undefined;
        this.cube = cube;
        this.registCallback();
    }
    connect() {
        return new Promise((resolve, reject) => {
            const { cube } = this;
            if (cube) {
                cube
                    .connect()
                    .then(() => {
                    resolve(this);
                })
                    .catch((error) => {
                    reject(error);
                });
            }
            else {
                reject(new Error('cube does not exist.'));
            }
        });
    }
    disconnect() {
        const { cube } = this;
        cube === null || cube === void 0 ? void 0 : cube.disconnect();
    }
    addEventListener(type, listener) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const TYPE_BT_PRESS = 'buttonpress';
        const TYPE_BT_RELEASE = 'buttonrelease';
        const TYPE_BATT_LEVEL = 'batterylevelchange';
        const TYPE_SENSOR_FLAT = 'sensorflat';
        const TYPE_SENSOR_COLLISION = 'sensorcollision';
        const TYPE_SENSOR_DTAP = 'sensordoubletap';
        const TYPE_SENSOR_POSTURE = 'sensorposturechange';
        const TYPE_ID_POSITION = 'positionid';
        const TYPE_ID_STANDARD = 'standardid';
        switch (type) {
            case TYPE_BT_PRESS:
                (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.buttonChar) === null || _b === void 0 ? void 0 : _b.addEventListener('press', listener);
                break;
            case TYPE_BT_RELEASE:
                (_d = (_c = this.cube) === null || _c === void 0 ? void 0 : _c.buttonChar) === null || _d === void 0 ? void 0 : _d.addEventListener('release', listener);
                break;
            case TYPE_BATT_LEVEL:
                (_f = (_e = this.cube) === null || _e === void 0 ? void 0 : _e.batteryChar) === null || _f === void 0 ? void 0 : _f.addEventListener('change', listener);
                break;
            case TYPE_SENSOR_FLAT:
                (_h = (_g = this.cube) === null || _g === void 0 ? void 0 : _g.sensorChar) === null || _h === void 0 ? void 0 : _h.addEventListener('flat', listener);
                break;
            case TYPE_SENSOR_COLLISION:
                (_k = (_j = this.cube) === null || _j === void 0 ? void 0 : _j.sensorChar) === null || _k === void 0 ? void 0 : _k.addEventListener('collision', listener);
                break;
            case TYPE_SENSOR_DTAP:
                (_m = (_l = this.cube) === null || _l === void 0 ? void 0 : _l.sensorChar) === null || _m === void 0 ? void 0 : _m.addEventListener('doubletap', listener);
                break;
            case TYPE_SENSOR_POSTURE:
                (_p = (_o = this.cube) === null || _o === void 0 ? void 0 : _o.sensorChar) === null || _p === void 0 ? void 0 : _p.addEventListener('posture', listener);
                break;
            case TYPE_ID_POSITION:
                (_r = (_q = this.cube) === null || _q === void 0 ? void 0 : _q.idChar) === null || _r === void 0 ? void 0 : _r.addEventListener('positionid', listener);
                break;
            case TYPE_ID_STANDARD:
                (_t = (_s = this.cube) === null || _s === void 0 ? void 0 : _s.idChar) === null || _t === void 0 ? void 0 : _t.addEventListener('standardid', listener);
                break;
        }
    }
    registCallback() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.buttonChar) === null || _b === void 0 ? void 0 : _b.addEventListener('press', this.onButtonPressed.bind(this));
        (_d = (_c = this.cube) === null || _c === void 0 ? void 0 : _c.buttonChar) === null || _d === void 0 ? void 0 : _d.addEventListener('release', this.onButtonReleased.bind(this));
        (_f = (_e = this.cube) === null || _e === void 0 ? void 0 : _e.batteryChar) === null || _f === void 0 ? void 0 : _f.addEventListener('change', this.onBatteryLevelChanged.bind(this));
        (_h = (_g = this.cube) === null || _g === void 0 ? void 0 : _g.sensorChar) === null || _h === void 0 ? void 0 : _h.addEventListener('flat', this.onFlatChanged.bind(this));
        (_k = (_j = this.cube) === null || _j === void 0 ? void 0 : _j.sensorChar) === null || _k === void 0 ? void 0 : _k.addEventListener('collision', this.onCollisionOccurred.bind(this));
        (_m = (_l = this.cube) === null || _l === void 0 ? void 0 : _l.sensorChar) === null || _m === void 0 ? void 0 : _m.addEventListener('doubletap', this.onDoubleTapped.bind(this));
        (_p = (_o = this.cube) === null || _o === void 0 ? void 0 : _o.sensorChar) === null || _p === void 0 ? void 0 : _p.addEventListener('posture', this.onPostureChanged.bind(this));
        (_r = (_q = this.cube) === null || _q === void 0 ? void 0 : _q.idChar) === null || _r === void 0 ? void 0 : _r.addEventListener('positionid', this.onPositionIdChanged.bind(this));
        (_t = (_s = this.cube) === null || _s === void 0 ? void 0 : _s.idChar) === null || _t === void 0 ? void 0 : _t.addEventListener('standardid', this.onStandardIdChanged.bind(this));
    }
    onButtonPressed() {
        this.buttonPressed = true;
        if (typeof cubeButtonPressed === 'function') {
            cubeButtonPressed();
        }
    }
    onButtonReleased() {
        this.buttonPressed = false;
        if (typeof cubeButtonReleased === 'function') {
            cubeButtonReleased();
        }
    }
    onBatteryLevelChanged(batteryLevel) {
        this.batteryLevel = batteryLevel;
        if (typeof cubeBatteryLevelChanged === 'function') {
            cubeBatteryLevelChanged(batteryLevel);
        }
    }
    onFlatChanged(flat) {
        this.flat = flat;
        if (typeof cubeFlatChanged === 'function') {
            cubeFlatChanged(flat);
        }
    }
    onCollisionOccurred() {
        if (typeof cubeCollisionOccurred === 'function') {
            cubeCollisionOccurred();
        }
    }
    onDoubleTapped() {
        if (typeof cubeDoubleTapped === 'function') {
            cubeDoubleTapped();
        }
    }
    onPostureChanged(posture) {
        this.posture = posture;
        if (typeof cubePostureChanged === 'function') {
            cubePostureChanged(posture);
        }
    }
    onPositionIdChanged(info) {
        this.x = info === null || info === void 0 ? void 0 : info.centerX;
        this.y = info === null || info === void 0 ? void 0 : info.centerY;
        this.sensorX = info === null || info === void 0 ? void 0 : info.sensorX;
        this.sensorY = info === null || info === void 0 ? void 0 : info.sensorY;
        this.angle = info === null || info === void 0 ? void 0 : info.angle;
        if (this.angle !== undefined) {
            this.angle = this.radians(this.angle);
        }
        if (typeof cubePositionIdChanged === 'function') {
            cubePositionIdChanged(info);
        }
    }
    onStandardIdChanged(info) {
        this.standardId = info === null || info === void 0 ? void 0 : info.id;
        this.angle = info === null || info === void 0 ? void 0 : info.angle;
        if (this.angle !== undefined) {
            this.angle = this.radians(this.angle);
        }
        if (typeof cubeStandardIdChanged === 'function') {
            cubeStandardIdChanged(info);
        }
    }
    setFrameRate(fps) {
        var _a;
        (_a = this.cube) === null || _a === void 0 ? void 0 : _a.setFrameRate(fps);
    }
    turnLightOff() {
        var _a, _b;
        (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.lightChar) === null || _b === void 0 ? void 0 : _b.turnLightOff();
    }
    turnLightOnRGB(r, g, b, duration = 0x00) {
        var _a, _b;
        (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.lightChar) === null || _b === void 0 ? void 0 : _b.turnLightOnRGB(r, g, b, duration);
    }
    turnLightOnRGBA(r, g, b, a, duration = 0x00) {
        var _a, _b;
        (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.lightChar) === null || _b === void 0 ? void 0 : _b.turnLightOnRGBA(r, g, b, a, duration);
    }
    playSE(idSE) {
        var _a, _b;
        (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.soundChar) === null || _b === void 0 ? void 0 : _b.playSE(idSE);
    }
    playSingleNote(note, duration = 0x1e) {
        var _a, _b;
        (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.soundChar) === null || _b === void 0 ? void 0 : _b.playSingleNote(note, duration);
    }
    playMelody(melody) {
        var _a, _b;
        (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.soundChar) === null || _b === void 0 ? void 0 : _b.playMelody(melody);
    }
    stop() {
        var _a, _b;
        return (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.motorChar) === null || _b === void 0 ? void 0 : _b.motorControl(0, 0);
    }
    move(left, right, duration = 0) {
        var _a, _b;
        return (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.motorChar) === null || _b === void 0 ? void 0 : _b.motorControlTimeSpecified(left, right, duration);
    }
    moveTo(aim, maxSpeed, moveType = CubeMotorChar.moveTypeId.efficient, easeType = CubeMotorChar.easeTypeId.constant, timeout = 5) {
        var _a, _b;
        if (aim === null || aim === void 0 ? void 0 : aim.angle) {
            aim.angle = this.degrees(aim.angle);
        }
        return (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.motorChar) === null || _b === void 0 ? void 0 : _b.motorControlAimSpecified(aim, maxSpeed, moveType, easeType, timeout);
    }
    moveToMulti(aims, maxSpeed, moveType = CubeMotorChar.moveTypeId.efficient, easeType = CubeMotorChar.easeTypeId.constant, isAppend = false, timeout = 5) {
        var _a, _b;
        for (const aim of aims) {
            if (aim === null || aim === void 0 ? void 0 : aim.angle) {
                aim.angle = this.degrees(aim.angle);
            }
        }
        return (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.motorChar) === null || _b === void 0 ? void 0 : _b.motorControlMultipleAimSpecified(aims, maxSpeed, moveType, easeType, isAppend, timeout);
    }
    moveToCube(cube, maxSpeed, moveType = CubeMotorChar.moveTypeId.efficient, easeType = CubeMotorChar.easeTypeId.constant, timeout = 5) {
        const STOP_DISTANCE_THRESHOLD = 30;
        if ((cube === null || cube === void 0 ? void 0 : cube.x) && (cube === null || cube === void 0 ? void 0 : cube.y)) {
            if (this.distanceToCube(cube) > STOP_DISTANCE_THRESHOLD) {
                this.moveTo({ x: cube.x, y: cube.y }, maxSpeed, moveType, easeType, timeout);
            }
            else {
                this.stop();
            }
        }
    }
    rotate(speed, duration = 0) {
        var _a, _b;
        let left = speed;
        let right = -speed;
        if (speed < 0) {
            left = -speed;
            right = speed;
        }
        return (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.motorChar) === null || _b === void 0 ? void 0 : _b.motorControlTimeSpecified(left, right, duration);
    }
    turnTo(angle, speed, rotateType = Cube.rotateTypeId.efficient, timeout = 5) {
        var _a, _b;
        let angleType;
        switch (rotateType) {
            case Cube.rotateTypeId.clockwise:
                angleType = Cube.angleTypeId.absPositiveDir;
                break;
            case Cube.rotateTypeId.counterClockwise:
                angleType = Cube.angleTypeId.absNegativeDir;
                break;
            default:
            case Cube.rotateTypeId.efficient:
                angleType = Cube.angleTypeId.absEfficient;
                break;
        }
        if (this.x && this.y) {
            const aim = {
                x: this.x,
                y: this.y,
                angle: this.degrees(angle),
                angleType: angleType,
            };
            return (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.motorChar) === null || _b === void 0 ? void 0 : _b.motorControlAimSpecified(aim, speed, undefined, undefined, timeout);
        }
    }
    turnToXY(x, y, speed, rotateType = Cube.rotateTypeId.efficient, timeout = 5) {
        const convertedAngle = this.relativeAngleToXY(x, y);
        let speedOverride = speed;
        if (this.angle !== undefined) {
            if (Math.abs(convertedAngle - this.angle) < Math.PI / 6) {
                speedOverride = 10;
            }
        }
        this.turnTo(convertedAngle, speedOverride, rotateType, timeout);
    }
    turnToCube(cube, speed, rotateType = Cube.rotateTypeId.efficient, timeout = 5) {
        if ((cube === null || cube === void 0 ? void 0 : cube.x) && (cube === null || cube === void 0 ? void 0 : cube.y)) {
            this.turnToXY(cube.x, cube.y, speed, rotateType, timeout);
        }
    }
    distanceToXY(x, y) {
        if (this.x && this.y) {
            const diffX = this.x - x;
            const diffY = this.y - y;
            return Math.sqrt(diffX * diffX + diffY * diffY);
        }
        else {
            return 0;
        }
    }
    distanceToCube(cube) {
        if ((cube === null || cube === void 0 ? void 0 : cube.x) && (cube === null || cube === void 0 ? void 0 : cube.y)) {
            return this.distanceToXY(cube.x, cube.y);
        }
        else {
            return 0;
        }
    }
    relativeAngleToXY(x, y) {
        if (this.x && this.y) {
            const diffX = x - this.x;
            const diffY = y - this.y;
            return this.normalizeAngleRadian(Math.atan2(diffY, diffX));
        }
        else {
            return 0;
        }
    }
    degrees(angle) {
        const convertedAngle = (angle * 180) / Math.PI;
        return this.normalizeAngleDegrees(Math.floor(convertedAngle));
    }
    radians(angle) {
        const convertedAngle = (angle * Math.PI) / 180;
        return this.normalizeAngleRadian(convertedAngle);
    }
    normalizeAngleDegrees(angle) {
        let normalizedAngle = 0;
        normalizedAngle = angle % 360;
        if (angle < 0) {
            normalizedAngle += 360;
        }
        return normalizedAngle;
    }
    normalizeAngleRadian(angle) {
        let normalizedAngle = angle;
        while (normalizedAngle > Math.PI || normalizedAngle < -Math.PI) {
            if (normalizedAngle < -Math.PI) {
                normalizedAngle += 2 * Math.PI;
            }
            else if (normalizedAngle > Math.PI) {
                normalizedAngle -= 2 * Math.PI;
            }
        }
        return normalizedAngle;
    }
}
Cube.seId = CubeSoundChar.seId;
Cube.postureId = CubeSensorChar.postureId;
Cube.moveTypeId = CubeMotorChar.moveTypeId;
Cube.easeTypeId = CubeMotorChar.easeTypeId;
Cube.angleTypeId = CubeMotorChar.angleTypeId;
Cube.rotateTypeId = {
    efficient: 'efficient',
    clockwise: 'clockwise',
    counterClockwise: 'counterClockwise',
};
Cube.connectNewCube = () => {
    return new Promise((resolve, reject) => {
        CubeConnector.connectNewCube()
            .then((cube) => {
            resolve(new Cube(cube));
        })
            .catch((error) => {
            reject(error);
        });
    });
};
class CubeScanner {
    static scanNewCube() {
        const CORE_CUBE_SERVICE_UUID = '10b20100-5b3b-4571-9508-cf3efcd7bbae';
        const options = {
            filters: [{ services: [CORE_CUBE_SERVICE_UUID] }],
        };
        return new Promise((resolve, reject) => {
            const navigatorObj = window.navigator;
            if (navigatorObj === null || navigatorObj === void 0 ? void 0 : navigatorObj.bluetooth) {
                navigatorObj.bluetooth.requestDevice(options).then((device) => {
                    const cube = new CubeBase(device);
                    resolve(cube);
                });
            }
            else {
                reject(new Error('navigatorObj.bluetooth does not exist.'));
            }
        });
    }
}
class CubeConnector {
}
CubeConnector.connectNewCube = () => {
    return new Promise((resolve, reject) => {
        CubeScanner.scanNewCube()
            .then((cube) => {
            return cube.connect();
        })
            .then((cube) => {
            resolve(cube);
        })
            .catch((error) => {
            reject(error);
        });
    });
};
class P5tCube extends Cube {
    connectP5tCube() {
        return new Promise((resolve, reject) => {
            super
                .connect()
                .then(() => {
                resolve(this);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    onPositionIdChanged(info) {
        if (info === null || info === void 0 ? void 0 : info.angle) {
            info.angle = this.convertAngleFromRadians(info.angle);
        }
        super.onPositionIdChanged(info);
    }
    onStandardIdChanged(info) {
        if (info === null || info === void 0 ? void 0 : info.angle) {
            info.angle = this.convertAngleFromRadians(info.angle);
        }
        super.onStandardIdChanged(info);
    }
    turnLightOn(color, duration = 0x00) {
        var _a, _b;
        (_b = (_a = this.cube) === null || _a === void 0 ? void 0 : _a.lightChar) === null || _b === void 0 ? void 0 : _b.turnLightOnRGBA(red(color), green(color), blue(color), alpha(color), duration);
    }
    moveTo(aim, maxSpeed, moveType = CubeMotorChar.moveTypeId.efficient, easeType = CubeMotorChar.easeTypeId.constant, timeout = 5) {
        if (aim === null || aim === void 0 ? void 0 : aim.angle) {
            aim.angle = this.convertAngleToRadians(aim.angle);
        }
        super.moveTo(aim, maxSpeed, moveType, easeType, timeout);
    }
    moveToMulti(aims, maxSpeed, moveType = CubeMotorChar.moveTypeId.efficient, easeType = CubeMotorChar.easeTypeId.constant, isAppend = false, timeout = 5) {
        for (const aim of aims) {
            if (aim === null || aim === void 0 ? void 0 : aim.angle) {
                aim.angle = this.convertAngleToRadians(aim.angle);
            }
        }
        super.moveToMulti(aims, maxSpeed, moveType, easeType, isAppend, timeout);
    }
    turnTo(angle, speed, rotateType = P5tCube.rotateTypeId.efficient, timeout = 5) {
        const convertedAngle = this.convertAngleToRadians(angle);
        super.turnTo(convertedAngle, speed, rotateType, timeout);
    }
    turnToXY(x, y, speed, rotateType = P5tCube.rotateTypeId.efficient, timeout = 5) {
        let convertedAngle = this.relativeAngleToXY(x, y);
        let speedOverride = speed;
        if (this.angle !== undefined) {
            if (Math.abs(convertedAngle - this.angle) < Math.PI / 6) {
                speedOverride = 10;
            }
        }
        if (!this.isAngleModeRadians()) {
            convertedAngle = Math.floor(degrees(convertedAngle));
            convertedAngle = this.normalizeAngleDegrees(convertedAngle);
        }
        this.turnTo(convertedAngle, speedOverride, rotateType, timeout);
    }
    convertAngleToRadians(angle) {
        let convertedAngle;
        if (!this.isAngleModeRadians()) {
            convertedAngle = radians(angle);
        }
        else {
            convertedAngle = angle;
        }
        return this.normalizeAngleRadian(convertedAngle);
    }
    convertAngleFromRadians(angle) {
        let convertedAngle;
        if (!this.isAngleModeRadians()) {
            convertedAngle = degrees(angle);
        }
        else {
            convertedAngle = angle;
        }
        return this.normalizeAngleDegrees(convertedAngle);
    }
    isAngleModeRadians() {
        return sin(Math.PI / 2) === 1;
    }
}
P5tCube.connectNewP5tCube = () => {
    return new Promise((resolve, reject) => {
        CubeConnector.connectNewCube()
            .then((cube) => {
            resolve(new P5tCube(cube));
        })
            .catch((error) => {
            reject(error);
        });
    });
};
