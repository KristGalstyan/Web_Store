import styled from 'styled-components'

export const MenuWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  background: #f5fbfc;
`
export const SignBtn = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: black;
  text-shadow: none;
  background: transparent;
  box-shadow: transparent;
  border: 1px solid black;
  transition: 0.5s ease;
  user-select: none;

  &:before,
  &:hover {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff,
      0 0 100px #008cff;
  }
`

export const MenuFirstBlock = styled.div`
  max-width: 670px;
  margin: 0 auto;
  text-align: center;
`

export const MenuFirstTitle = styled.div`
  color: #35b8be;
  font-weight: 400;
  font-size: 50px;
`
export const MenuFirstsubTitle = styled.div`
  font-size: 16px;
`
export const MenuFirstSpan = styled.span`
  color: #35b8be;
`
export const FullMenu = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const MenuSecondBlock = styled.div``

export const MenuBtnBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 35px auto;
  max-width: 490px;
`
export const MenuBtn = styled.button`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  background: ${(props) => props.background || '#fff'};
  text-transform: uppercase;
  font-size: 1rem;
  color: ${(props) => props.color || '#000'};
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
`

export const MenuItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;
`

export const MenuItemProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(60, 95, 520, 0.3);
  padding: 30px;
  width: 650px;
  min-height: 200px;
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`
export const ProductImg = styled.div`
  max-width: 100px;
  min-height: 130px;
  margin-right: 35px;
  img {
    height: 100px;
    object-fit: cover;
  }
`

export const ProductInfoItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
  width: 100%;
  justify-content: space-between;
`
export const ProductInfo = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 420px;
  min-height: 140px;
`
export const ProductTitle = styled.p`
  font-size: 18px;
  font-weight: 900;
  color: #08090a;
`

export const BuyProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

export const ProductParagraph = styled.p`
  display: flex;
  flex-wrap: wrap;
  color: black;
`
