import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({newProducts}) {
 
  return (
    <div>
      <Header />
      <Featured />
      <NewProducts products = {newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    }
  }
}