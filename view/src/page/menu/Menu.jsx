import React from 'react'
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
        <MenuBtnBlock>
          <MenuBtn>Burgers</MenuBtn>
          <MenuBtn>Sides</MenuBtn>
          <MenuBtn>Drinks</MenuBtn>
        </MenuBtnBlock>
        <MenuItem>
          <MenuItemProduct>
            <ProductImg>
              <img src="/img/products/burger.png" alt="burger" />
            </ProductImg>
            <ProductInfo>
              <ProductInfoItem>
                <ProductTitle>Burger Dreams</ProductTitle>
                <ProductParagraph>$ 9.20$</ProductParagraph>
              </ProductInfoItem>
              <ProductParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </ProductParagraph>
              <BuyProduct>
                <ProductTotal>1</ProductTotal>
                <MenuBtn>Add to cart</MenuBtn>
              </BuyProduct>
            </ProductInfo>
          </MenuItemProduct>
          <MenuItemProduct>
            <ProductImg>
              <img src="/img/products/burger.png" alt="burger" />
            </ProductImg>
            <ProductInfo>
              <ProductInfoItem>
                <ProductTitle>Burger Dreams</ProductTitle>
                <ProductParagraph>$ 9.20$</ProductParagraph>
              </ProductInfoItem>
              <ProductParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </ProductParagraph>
              <BuyProduct>
                <ProductTotal>1</ProductTotal>
                <MenuBtn>Add to cart</MenuBtn>
              </BuyProduct>
            </ProductInfo>
          </MenuItemProduct>
          <MenuItemProduct>
            <ProductImg>
              <img src="/img/products/burger.png" alt="burger" />
            </ProductImg>
            <ProductInfo>
              <ProductInfoItem>
                <ProductTitle>Burger Dreams</ProductTitle>
                <ProductParagraph>$ 9.20$</ProductParagraph>
              </ProductInfoItem>
              <ProductParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </ProductParagraph>
              <BuyProduct>
                <ProductTotal>1</ProductTotal>
                <MenuBtn>Add to cart</MenuBtn>
              </BuyProduct>
            </ProductInfo>
          </MenuItemProduct>
          <MenuItemProduct>
            <ProductImg>
              <img src="/img/products/burger.png" alt="burger" />
            </ProductImg>
            <ProductInfo>
              <ProductInfoItem>
                <ProductTitle>Burger Dreams</ProductTitle>
                <ProductParagraph>$ 9.20$</ProductParagraph>
              </ProductInfoItem>
              <ProductParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </ProductParagraph>
              <BuyProduct>
                <ProductTotal>1</ProductTotal>
                <MenuBtn>Add to cart</MenuBtn>
              </BuyProduct>
            </ProductInfo>
          </MenuItemProduct>
        </MenuItem>
      </MenuSecondBlock>
      <FullMenu>
        <MenuBtn>See Full Menu</MenuBtn>
      </FullMenu>
    </MenuWrapper>
  )
}

export default Menu
