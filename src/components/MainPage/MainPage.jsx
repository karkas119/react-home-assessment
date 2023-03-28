import React from 'react'

import './MainPage.css'
import { useMainPage } from './hooks'

import { SideBar } from 'components/SideBar/SideBar'

export const MainPage = () => {
  const { onDocsCheckBtnClick } = useMainPage()

  return (
    <div className="main-page-wrapper">
      <SideBar/>
      <div data-testid="main-page-content" className="main-page-content">
        <div className="content-wrapper">
          <h1>Hello to Veryfi App</h1>
          <button className="docs-button" onClick={onDocsCheckBtnClick}>Check available documents</button>
        </div>
      </div>
    </div>
  )
}