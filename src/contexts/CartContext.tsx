import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeCard'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
