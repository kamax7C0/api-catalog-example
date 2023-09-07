import { Route, Get, Post, Put, Delete, Body, Query, Path, SuccessResponse, Response, Tags, Controller } from 'tsoa';
import { StockSample, StockItem, Error } from '../models/stockModels';

@Tags('Stock Management')
@Route('/items')
export class StockController extends Controller{

  /**
   * Get all stock items or search for stock items
   * @summary A concise summary of this method
   * @param query A search query to find stock items
   */
  @Get()
  @SuccessResponse("200", "Success") // Custom success response
  @Response<Error>('500', 'Server Error')
  public async getStockItems(@Query() query: string): Promise<StockSample[]> {
    console.log(query);
    // Implement the logic to fetch items based on query
    return [];
  }

  /**
   * Add a new stock item
   * @summary This is going to add a new item
   * @param requestBody Details of the stock item to be added
   */
  @Post()
  @SuccessResponse('201', 'Created')
  @Response<StockItem>('201', 'Success')
  @Response<Error>('400', 'Bad Request')
  @Response<Error>('500', 'Server Error')
  public async addStockItem(@Body() requestBody: StockItem): Promise<StockItem> {
    // Implement the logic to add a new stock item
    return requestBody;
  }

  /**
   * Get the stock for a specific item
   * @summary Get the stock for a specific item
   * @param itemId The ID of the stock item
   */
  @Get('{itemId}')
  @Response<StockItem>('200', 'Success')
  @Response<Error>('404', 'Not Found')
  @Response<Error>('500', 'Server Error')
  public async getSpecificStockItem(@Path() itemId: string): Promise<StockItem> {
    // Implement the logic to fetch a specific stock item
    return { itemId, quantity: 0 };
  }

  /**
   * Update the stock for an item
   * @summary Update the stock for an item
   * @param itemId The ID of the stock item
   * @param requestBody Updated details of the stock item
   */
  @Put('{itemId}')
  @Response<StockItem>('200', 'Success')
  @Response<Error>('400', 'Bad Request')
  @Response<Error>('404', 'Not Found')
  @Response<Error>('500', 'Server Error')
  public async updateStockItem(@Path() itemId: string, @Body() requestBody: StockItem): Promise<StockItem> {
    console.log(itemId);
    // Implement the logic to update a stock item
    return requestBody;
  }

  /**
   * Delete a stock item
   * @summary Delete a stock item
   * @param itemId The ID of the stock item
   */
  @Delete('{itemId}')
  @SuccessResponse('204', 'Deleted')
  @Response<Error>('404', 'Not Found')
  @Response<Error>('500', 'Server Error')
  public async deleteStockItem(@Path() itemId: string): Promise<void> {
    console.log(itemId);
    // Implement the logic to delete a stock item
  }
}