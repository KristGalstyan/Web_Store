import { bindActionCreators } from '@reduxjs/toolkit'
import { actions } from '../redux/product/basket.slice'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

const rootActions = {
  ...actions
}

function useAction() {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useAction
