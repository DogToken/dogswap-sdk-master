import { ChainId, WETH, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0xB580f1dbA1c17882Fca8f6DDadA8428c9cB177fC') // WMINT
    expect(token.decimals).toEqual(12)
  })

  it('Token:CACHE', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x1628160C66e0330090248a163A34Ba5B5A82D4f7') // DOG
    expect(token.decimals).toEqual(12)
  })

  it('Pair', async () => {
    const token = new Token(ChainId.TESTNET, '0xB580f1dbA1c17882Fca8f6DDadA8428c9cB177fC', 12) // XTR
    const pair = await Fetcher.fetchPairData(WETH[ChainId.TESTNET], token)
    expect(pair.liquidityToken.address).toEqual('0xc6b7ED9A5a62Ffa488C8fa393abef821C0a5b3eA')
  })
})
