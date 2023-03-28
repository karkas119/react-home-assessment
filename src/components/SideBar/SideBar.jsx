import React from 'react';

import './SideBar.css';
import {useSideBar} from './hooks';

import { routes } from 'routes'

export const SideBar = () => {
  const { currentPage, handleItemClick } = useSideBar();
  const logoSrc = 'https://hub.veryfi.com/static/img/new-veryfi-logo.png'

  return (
    <div className="side-bar-wrapper">
      <div className="veryfi-logo-wrapper">
        <img className="veryfi-logo" src={logoSrc} alt="logo not found"/>
      </div>
      {routes.map(({ name, path, isShownInMenu }, index) => isShownInMenu &&
        <div className={`side-bar-item ${currentPage === path ? 'selected' : ''}`}
             key={`${name}-${index}`}
             onClick={() => {
               handleItemClick(path)
             }}>{`> ${name}`}</div>)}
    </div>
  )
}