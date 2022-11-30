import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeCard'
import { produce } from 'immer'
export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

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

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
