import { NormalizedCoin, Coin } from '../types'

/**
 * generate icon link
 * @param url url of the image
 * @returns generated icon url
 */
const generateIconUrl = (url: string) => `${process.env.WEBSITE_URL}${url}`

/**
 * transform crypto coins for the view
 * @param coins crypto coins from the backend
 */
export const transformCryptocoins = (coins: Coin[]): NormalizedCoin[] =>
  coins.map(({ CoinInfo, DISPLAY, RAW }) => ({
    raw: {
      price: RAW.CLP.PRICE,
      mktCap: RAW.CLP.MKTCAP,
      changePct24Hr: RAW.CLP.CHANGEPCT24HOUR,
    },
    display: {
      id: CoinInfo.Id,
      name: CoinInfo.Name,
      fullName: CoinInfo.FullName,
      rating: CoinInfo.Rating.Weiss.Rating,
      price: DISPLAY.CLP.PRICE,
      mktCap: DISPLAY.CLP.MKTCAP,
      totalVolume24HTo: DISPLAY.CLP.TOTALVOLUME24HTO,
      totalTopTierVolume24HTo: DISPLAY.CLP.TOTALTOPTIERVOLUME24HTO,
      changePct24Hr: `${DISPLAY.CLP.CHANGEPCT24HOUR}%`,
      iconUrl: generateIconUrl(CoinInfo.ImageUrl),
    },
  }))
