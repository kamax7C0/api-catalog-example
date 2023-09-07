export interface StockSample {
  itemId: string;
  quantity: number;
}

export interface Error {
  code: string;
  message: string;
}

/**
 * Stock Items are nice to buy
 * @example {
 *  "itemId": "52907745-7672-470e-a803-a2f8feb52944",
 *  "quantity": 4
 * }
 */
export interface StockItem {
  /**
   * System reference of the Stock Item
   */
  itemId: string;
  quantity: number;
}
