import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
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
  ProductTitle
} from './menu'
import { fetchProduct } from '../../redux/product/products.slice'
import { actions } from '../../redux/product/basket.slice'
import { fetchFullMenu } from '../../redux/product/fullMenu.slice'

const Menu = () => {
  const btnsProducts = ['burgers', 'sides', 'drinks']

  const dispatch = useDispatch()
  const [active, setActive] = useState(0)

  useEffect(() => {
    dispatch(fetchProduct(btnsProducts[0]))
  }, [])
  const { products, loading } = useSelector((s) => s.product)

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
          {btnsProducts.map((elm, index) => {
            return index === active ? (
              <MenuBtn key={index} color="white" background="black">
                {elm}
              </MenuBtn>
            ) : (
              <MenuBtn
                key={index}
                onClick={() => {
                  dispatch(fetchProduct(elm))
                  setActive(index)
                }}
                color="black"
              >
                {elm}
              </MenuBtn>
            )
          })}
        </MenuBtnBlock>
        <MenuItem>
          {loading ? (
            <MenuFirstTitle>Loading...</MenuFirstTitle>
          ) : (
            products?.data.map((elem) => {
              console.log(elem.quantity)
              return (
                <MenuItemProduct key={elem.id}>
                  <ProductImg>
                    <img src={elem.url} alt={elem.title} />
                  </ProductImg>
                  <ProductInfo>
                    <ProductInfoItem>
                      <ProductTitle>{elem.title}</ProductTitle>
                      <ProductParagraph>{elem.price}$</ProductParagraph>
                    </ProductInfoItem>
                    <ProductParagraph>{elem.text}</ProductParagraph>
                    <BuyProduct>
                      <MenuBtn
                        onClick={() => {
                          dispatch(actions.pushCardToBasket(elem))
                        }}
                      >
                        Add to cart
                      </MenuBtn>
                    </BuyProduct>
                  </ProductInfo>
                </MenuItemProduct>
              )
            })
          )}
        </MenuItem>
      </MenuSecondBlock>
      <NavLink to="/fullMenu">
        <FullMenu>
          <MenuBtn onClick={() => dispatch(fetchFullMenu())}>
            See Full Menu
          </MenuBtn>
        </FullMenu>
      </NavLink>
    </MenuWrapper>
  )
}

export default Menu
