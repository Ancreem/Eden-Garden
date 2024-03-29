package jadineria.jardineraDelEden.domain.repository;

import jadineria.jardineraDelEden.persistence.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    // 15 Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
    @Query("SELECT p FROM Product p WHERE p.gamaProduct.gama = 'Ornamentales' AND p.amountInStock > 100 ORDER BY p.salePrice DESC")
    List<Product> findOrnamentalProductsInStock();
    // @Query("")
    // public List<> get();

    // Productos que nunca han aparecido en un pedido.
    @Query("SELECT p FROM Product p LEFT JOIN OrderDetail o ON p.productCode = o.product.productCode WHERE o.product.productCode IS NULL")
    public List<Product> getProductsAreNotInAnyOrder();

    // Productos que nunca han aparecido en un pedido. El resultado debe mostrar el
    // nombre, la descripción y la imagen del producto.
    @Query("SELECT p.name, p.description, g.image FROM Product p LEFT JOIN OrderDetail o ON p.productCode = o.product.productCode JOIN p.gamaProduct g WHERE o.product.productCode IS NULL")
    public List<Object[]> getProductsAreNotInAnyOrderNDI();

    // Precio de venta del producto más caro y más barato en una misma consulta.
    @Query("SELECT MAX(p.salePrice), MIN(p.salePrice) FROM Product p")
    public List<Object[]> findMaxAndMinPrice();

}
