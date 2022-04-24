import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    changeTabItem(tabId)
  }

  const activeClassName = isActive ? 'active-tab-item' : ''

  return (
    <li className={`tab-item-text ${activeClassName}`} onClick={onClickTabItem}>
      {displayText}
    </li>
  )
}

export default TabItem
