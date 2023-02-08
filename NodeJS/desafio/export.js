function getFlag(flag) {
    const posicao = process.argv.indexOf(flag) + 1;
    return process.argv[posicao];
}
module.exports = getFlag;