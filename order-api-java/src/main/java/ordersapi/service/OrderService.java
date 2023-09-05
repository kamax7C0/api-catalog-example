package ordersapi.service;

import ordersapi.model.ProductOrder;
import ordersapi.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<ProductOrder> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<ProductOrder> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public ProductOrder createOrder(ProductOrder productOrder) {
        return orderRepository.save(productOrder);
    }

    public ProductOrder updateOrder(Long id, ProductOrder productOrder) {
        if (orderRepository.existsById(id)) {
            return orderRepository.save(productOrder);
        }
        return null;
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
