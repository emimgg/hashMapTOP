const moves = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
];

function knightMove(start, goal) {
    let queue = [[start]];
    let visited = new Set();
    visited.add(start.toString());


    while (queue.length) {
        let path = queue.shift();
        let [currentX, currentY] = path[path.length - 1];

        if (currentX === goal[0] && currentY === goal[1]) {
            console.log(`Congrats! You made it in ${path.length - 1} moves!`);
            for (let step of path) {
                console.log(step);
            }
            return path;
        }

        for (let [dx, dy] of moves) {
            let nextX = currentX + dx;
            let nextY = currentY + dy;
            let nextPos = [nextX, nextY];

            if (!visited.has(nextPos.toString()) && isValidMove(nextX, nextY)) {
                visited.add(nextPos.toString());
                queue.push([...path, nextPos]);
            }
        }
    }

    return null; 

    function isValidMove(x, y) {
        return (x <= 7 && x >= 0 && y <= 7 && y >= 0)
    }
}

knightMove([2, 2], [5, 4])