import { ProductType } from "../../../type"
import Container from "../Container"
import ProductsCard from "./ProductsCard"

interface productsType {
  products: ProductType[]
}
export default function ProductList({ products }: productsType) {
  return (
    <div>
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products?.map((item: ProductType) => (
          <ProductsCard key={item?.id} products={item} />
        ))}
      </Container>
    </div>
  )
}
