import Container from "@/components/Container";
import { getProducts } from "@/service";

export default async function Home() {
  const products = await getProducts();


  console.log(products)
  return (
   <main>
    <Container products={products}/>
   </main>
  );
}

