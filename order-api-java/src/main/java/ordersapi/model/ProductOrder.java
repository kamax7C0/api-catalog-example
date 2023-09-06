package ordersapi.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;

@Entity
public class ProductOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "ID of the Product", example = "123456789")
    private Long id;
    @Schema(description = "Name of the Product", example = "Spring Boots XXL")
    private String product;
    @Schema(description = "Number of Product Items", example = "5")
    private int quantity;
}
