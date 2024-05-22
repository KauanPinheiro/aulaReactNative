import React, {useState,useEffect} from "react";
import { Pressable, Text, View} from 'react-native';

import produtos from "../data/produtos";
import { ListItem } from "@rneui/base";

export default props => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
        const newTotal = cart.reduce((accumalator, currentValue) => accumalator + currentValue.price * currentValue.quatity, 0);
        setTotal(newTotal);
    }, [cart]);

    const handleAddToCart = (item, quantity) => {
        const newCart = [...cart];
        const existingItemIndex = newCart.findIndex(i => i.id === item.id);
    
        if (existingItemIndex === -1) {
          setCart([...newCart, { ...item, quantity }]);
        } else {
          newCart[existingItemIndex].quantity += quantity;
          setCart(newCart);
        }
      };

      const handleRemoveFromCart = index => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
      };

    return(
        <View>
            <Text>Carrinho de compras</Text>
            {cart.map((item, index) => (
                <ListItem key={item.id}>
                    <Pressable>{item.emoji}</Pressable>
                </ListItem>
            )
            
            )
        }
        </View>
    )
}