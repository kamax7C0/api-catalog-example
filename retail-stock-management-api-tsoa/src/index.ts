import express from 'express';
import { RegisterRoutes } from '../build/routes';

/**
 * @swagger
 * 
 * definitions:
 *   StockSample:
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - itemId
 *         - quantity
 *       properties:
 *         itemId:
 *           type: string
 *         quantity:
 *           type: number
 *   Error:
 *     type: object
 *     required:
 *       - code
 *       - message
 *     properties:
 *       code:
 *         type: string
 *       message:
 *         type: string
 *   StockItem:
 *     type: object
 *     required:
 *       - itemId
 *       - quantity
 *     properties:
 *       itemId:
 *         type: string
 *         description: The unique identifier for the stock item.
 *       quantity:
 *         type: number
 *         description: The current quantity of the stock item.
 */
const app = express();
const port = 3000;

app.use(express.json());
RegisterRoutes(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
