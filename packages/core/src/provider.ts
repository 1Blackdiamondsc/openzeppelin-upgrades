export interface EthereumProvider {
  send(method: 'eth_chainId', params?: []): Promise<string>;
  send(method: 'eth_getCode', params: [string, string?]): Promise<string>;
  send(method: 'eth_getStorageAt', params: [string, string, string?]): Promise<string>;
  send(method: string, params?: unknown[]): Promise<unknown>;
}

export async function getChainId(provider: EthereumProvider): Promise<string> {
  return provider.send('eth_chainId');
}

export async function getStorageAt(
  provider: EthereumProvider,
  address: string,
  position: string,
  block?: string,
): Promise<string> {
  return provider.send('eth_getStorageAt', [address, position, block]);
}

export async function getCode(provider: EthereumProvider, address: string, block?: string): Promise<string> {
  return provider.send('eth_getCode', [address, block]);
}
