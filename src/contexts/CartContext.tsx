import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeCard'
import { produce } from 'immer'
export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyToCart = cartItems.findIndex(
      (item) => item.id === coffee.id,
    )
    const newCoffee = produce(cartItems, (state) => {
      if (coffeeAlreadyToCart < 0) {
        state.push(coffee)
      } else {
        state[coffeeAlreadyToCart].quantity += coffee.quantity
      }
    })
    setCartItems(newCoffee)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
