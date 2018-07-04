export const coinsListApi = 'https://min-api.cryptocompare.com/data/all/coinlist';
export const bitcoinPriceApi = coinsNames => `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=${coinsNames}`;
