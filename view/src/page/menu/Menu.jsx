import React, { useState } from 'react'
import {
  BuyProduct,
  FullMenu,
  MenuBtn,
  MenuBtnBlock,
  MenuFirstBlock,
  MenuFirstSpan,
  MenuFirstTitle,
  MenuFirstsubTitle,
  MenuItem,
  MenuItemProduct,
  MenuSecondBlock,
  MenuWrapper,
  ProductImg,
  ProductInfo,
  ProductInfoItem,
  ProductParagraph,
  ProductTitle,
  ProductTotal
} from './menu'

const Menu = () => {
  const [active, setActive] = useState(0)

  return (
    <MenuWrapper>
      <MenuFirstBlock>
        <MenuFirstTitle>Browse our menu</MenuFirstTitle>
        <MenuFirstsubTitle>
          Use our menu to place an order online, or
          <MenuFirstSpan> phone</MenuFirstSpan> our store to place a pickup
          order. Fast and fresh food.
        </MenuFirstsubTitle>
      </MenuFirstBlock>
      <MenuSecondBlock>
        {product.map((elem, index) => {
          return (
            <>
              <MenuBtnBlock key={elem.id}>
                <MenuBtn>Burgers</MenuBtn>
                <MenuBtn>Sides</MenuBtn>
                <MenuBtn>Drinks</MenuBtn>
              </MenuBtnBlock>
              <MenuItem>
                <MenuItemProduct>
                  <ProductImg>
                    <img src={elem.url} alt={elem.title} />
                  </ProductImg>
                  <ProductInfo>
                    <ProductInfoItem>
                      <ProductTitle>{elem.title}</ProductTitle>
                      <ProductParagraph>$ 9.20$</ProductParagraph>
                    </ProductInfoItem>
                    <ProductParagraph>{elem.text}</ProductParagraph>
                    <BuyProduct>
                      <ProductTotal>1</ProductTotal>
                      <MenuBtn>Add to cart</MenuBtn>
                    </BuyProduct>
                  </ProductInfo>
                </MenuItemProduct>
              </MenuItem>
            </>
          )
        })}
      </MenuSecondBlock>
      <FullMenu>
        <MenuBtn>See Full Menu</MenuBtn>
      </FullMenu>
    </MenuWrapper>
  )
}

export default Menu
