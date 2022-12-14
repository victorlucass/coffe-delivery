import { createContext, ReactNode, useEffect, useState } from 'react'
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
  removeCartItem: (cartItemId: number) => void
  cleanCart: () => void
  totalItemPrice: number
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItem = localStorage.getItem('coffeeDelivery:cartItems')
    if (storedCartItem) {
      return JSON.parse(storedCartItem)
    } else {
      return []
    }
  })
  const cartQuantity = cartItems.length
  const totalItemPrice = cartItems.reduce((total, cartItem) => {
    total += cartItem.quantity * cartItem.price
    return total
  }, 0)

  useEffect(() => {
    localStorage.setItem('coffeeDelivery:cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyToCart = cartItems.findIndex(
      (item) => item.id === coffee.id,
    )
    const newCoffee = produce(cartItems, (draft) => {
      if (coffeeAlreadyToCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyToCart].quantity += coffee.quantity
      }
    })
    setCartItems(newCoffee)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (item) => item.id === cartItemId,
      )
      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })
    setCartItems(newCart)
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

  function cleanCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        totalItemPrice,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
