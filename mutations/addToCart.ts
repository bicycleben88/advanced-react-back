import { KeystoneContext } from "@keystone-next/types";
import { CartItemCreateInput } from "../.keystone/schema-types";
import { Session } from "../types";

export default async function addToCart(
  root: any,
  {
    productId,
  }: {
    productId: string;
  },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  const session = context.session as Session;
  if (!session.itemId) {
    throw new Error("You Must be Logged in to do this");
  }
  const allCartItems = await context.lists.CartItem.findMany({
    where: {
      user: {
        id: session.itemId,
      },
      product: {
        id: productId,
      },
    },
  });
  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    console.log(`There are ${existingCartItem.quantity}. Add one`);
  }
  return await context.lists.CartItem.updateOne({
    id: existingCartItem.id,
    data: { quantity: existingCartItem.quantity + 1 },
  });
}
