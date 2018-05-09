import { getRandomInt } from './customUtils'

const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]] // top right bottom left

const getEmptyBlock = ({ grid, width, height, size }) => {
    console.log(height - size[0] - 1)

    if (!Array.isArray(size)) {
        size = [size, size]
    }
    const emptyBlocks = []

    for (let i = 0; i < height - size[0]; i++) {
        for (let j = 0; j < width - size[1]; j++) {
            if (!grid[i][j].ship) {
                let checkFlag = true

                for (let k = 0; k < size[0]; k++) {
                    if (checkFlag) {
                        for (let l = 0; l < size[1]; l++) {
                            console.log(i, j, `grid[${i + k}][${j + l}]`, grid[i + k][j + l])

                            if (grid[i + k][j + l].ship) {
                                console.log('break!', grid[i + k][j + l])
                                checkFlag = false
                                break
                            }
                        }
                    } else {
                        break
                    }
                }

                if (checkFlag) {
                    emptyBlocks.push([[i, j], [i + size[0] - 1, j + size[1] - 1]])
                }
            }
        }
    }

    console.log('emptyBlocks', emptyBlocks)

    if (emptyBlocks.length === 0) {
        throw 'empty blocks not found'
    }

    return emptyBlocks[getRandomInt(0, emptyBlocks.length - 1)]
}

const getIBlock = ({ grid, width, height }) => {
    const iFirstPoint = [getRandomInt(0, 5), getRandomInt(0, 5)]
    const iDirection = getRandomInt(0, 100) > 50 ? directions[1] : directions[2]
    const area = []

    for (let i = 0; i < 4; i++) {
        const point = [iFirstPoint[0] + iDirection[0] * i, iFirstPoint[1] + iDirection[1] * i]

        for (let k = -1; k < 2; k++) {
            for (let l = -1; l < 2; l++) {
                if (grid[point[0] + k]) {
                    area.push([point[0] + k, point[1] + l])
                }
            }
        }

        grid[point[0]][point[1]] = {
            ...grid[point[0]][point[1]],
            ship: 'I',
        }
    }

    return { grid, area }
}

const getLBlock = ({ grid, width, height }) => {
    console.group('getLBlock')
    const direction = getRandomInt(0, 100) > 50 ? 0 : 1 // 0 -- ver, 1 -- hor
    const size = direction ? [4, 5] : [5, 4]
    const emptyBlock = getEmptyBlock({ grid, width, height, size })
    const dx = getRandomInt(1, 2)
    const startPoint = []
    const endPoint = []
    const area = []

    if (direction) {
        startPoint.push(emptyBlock[0][0] + dx, emptyBlock[0][1] + 1)
        endPoint.push(emptyBlock[0][0] + 3 - dx, emptyBlock[0][1] + 1)
    } else {
        startPoint.push(emptyBlock[0][0] + 1, emptyBlock[0][1] + dx)
        endPoint.push(emptyBlock[0][0] + 1, emptyBlock[0][1] + 3 - dx)
    }

    for (let i = 0; i < 3; i++) {
        let dx = direction ? 0 : i
        let dy = direction ? i : 0

        for (let k = -1; k < 2; k++) {
            for (let l = -1; l < 2; l++) {
                if (grid[startPoint[0] + dx + k]) {
                    area.push([startPoint[0] + dx + k, startPoint[1] + dy + l])
                }
            }
        }

        grid[startPoint[0] + dx][startPoint[1] + dy] = {
            ...grid[startPoint[0] + dx][startPoint[1] + dy],
            ship: 'L',
        }
    }

    for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
            if (grid[endPoint[0] + k]) {
                area.push([endPoint[0] + k, endPoint[1] + l])
            }
        }
    }

    grid[endPoint[0]][endPoint[1]] = {
        ...grid[endPoint[0]][endPoint[1]],
        ship: 'L',
    }

    console.groupEnd()

    return { grid, area }
}

const getDotBlock = ({ grid, width, height, ship }) => {
    const emptyBlock = getEmptyBlock({ grid, width, height, size: 3 })
    const area = []
    const point = [emptyBlock[0][0] + 1, emptyBlock[0][1] + 1]

    for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
            if (grid[point[0] + k]) {
                area.push([point[0] + k, point[1] + l])
            }
        }
    }

    grid[point[0]][point[1]] = {
        ...grid[point[0]][point[1]],
        ship,
    }

    return { grid, area }
}

const getShips = ({ grid, width, height }) => {
    const IBlock = getIBlock({ grid, width, height })
    const LBlock = getLBlock({ grid, width, height })
    const Dot1Block = getDotBlock({ grid, width, height, ship: 'Dot1' })
    const Dot2Block = getDotBlock({ grid, width, height, ship: 'Dot2' })

    return {
        grid,
        I: {
            area: IBlock.area,
            alive: true,
        },
        L: {
            area: LBlock.area,
            alive: true,
        },
        Dot1: {
            area: Dot1Block.area,
            alive: true,
        },
        Dot2: {
            area: Dot2Block.area,
            alive: true,
        },
    }
}

export {
    getShips,
}
