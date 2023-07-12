import { useDispatch, useSelector } from 'react-redux'
import {
  BuyProduct,
  MenuBtn,
  MenuItemProduct,
  ProductImg,
  ProductInfo,
  ProductInfoItem,
  ProductParagraph,
  ProductTitle,
  ProductTotal
} from '../page/menu/menu'
import { useEffect } from 'react'
import { fetchFullMenu } from '../redux/product/fullMenu.slice'
import { actions } from '../redux/product/basket.slice'

function FullMenu() {
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => state.fullMenu)

  useEffect(() => {
    if (data?.data === undefined) {
      dispatch(fetchFullMenu())
    }
  }, [])

  return (
    <div className="d-flex flex-wrap justify-content-around gap-5">
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        data?.data.map((elem, id) => {
          return (
            <MenuItemProduct key={elem.id}>
              <ProductImg>
                <img src={elem.url} alt={elem.title} />
              </ProductImg>
              <ProductInfo>
                <ProductInfoItem>
                  <ProductTitle>{elem.title}</ProductTitle>
                  <ProductParagraph>{elem.price}</ProductParagraph>
                </ProductInfoItem>
                <ProductParagraph>{elem.text}</ProductParagraph>
                <BuyProduct>
                  <ProductTotal>1</ProductTotal>
                  <MenuBtn
                    onClick={() => dispatch(actions.pushCardToBasket(elem))}
                  >
                    Add to cart
                  </MenuBtn>
                </BuyProduct>
              </ProductInfo>
            </MenuItemProduct>
          )
        })
      )}
    </div>
  )
}

export default FullMenu
