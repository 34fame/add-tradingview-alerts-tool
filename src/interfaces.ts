export interface ISingleAlertSettings {
    condition: {
        primaryLeft?: string,
        primaryRight?: string,
        secondary?: string,
        tertiaryLeft?: string | number,
        tertiaryRight?: string | number,
        quaternaryLeft?: string | number,
        quaternaryRight?: string | number,
    }
    // option
    option?: string,

    //expiration:
    actions?: {
        notifyOnApp?: boolean
        showPopup?: boolean
        sendEmail?: boolean
        webhook?: {
            enabled: boolean
            url: string
        }
    }

    name?: string,
    message?: string
}

export enum Classification {SPOT = "SPOT" , LEVERAGED_TOKEN = 'LEVERAGED_TOKEN' , FUTURES_PERPETUAL = 'FUTURES_PERPETUAL' , FUTURES_DATED = 'FUTURES_DATED'}

export type ClassificationType = keyof typeof Classification;


// mostly following pine script docs for this
export interface IBaseSymbol {
    source: string,     // BINANCEFUTURES   or      FTX
    id: string,         // BINANCE:BTCUSDT  or      FTX:BTC0325   // tradingview symbol
    prefix: string,     // BINANCE          or      FTX
    ticker: string,     // BTCUSDT          or      BTC0325
    quoteAsset: string, // USDT             or      USD
    instrument: string,  // BTC              or      BTC0325
    classification: ClassificationType
}
