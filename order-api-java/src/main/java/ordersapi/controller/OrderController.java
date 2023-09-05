package ordersapi.controller;

import ordersapi.model.ProductOrder;
import ordersapi.service.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@Tag(name = "Order API", description = "Order CRUD operations")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    @Operation(summary = "List all orders")
    public ResponseEntity<List<ProductOrder>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get an order by ID")
    public ResponseEntity<ProductOrder> getOrderById(@Parameter(description = "ID of the order to retrieve") @PathVariable Long id) {
        return orderService.getOrderById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @Operation(summary = "Create a new order")
    public ResponseEntity<ProductOrder> createOrder(@RequestBody ProductOrder productOrder) {
        return ResponseEntity.ok(orderService.createOrder(productOrder));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update an order by ID")
    public ResponseEntity<ProductOrder> updateOrder(@Parameter(description = "ID of the order to update") @PathVariable Long id, @RequestBody ProductOrder productOrder) {
        ProductOrder updatedProductOrder = orderService.updateOrder(id, productOrder);
        if (updatedProductOrder != null) {
            return ResponseEntity.ok(updatedProductOrder);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete an order by ID")
    public ResponseEntity<Void> deleteOrder(@Parameter(description = "ID of the order to delete") @PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
}
