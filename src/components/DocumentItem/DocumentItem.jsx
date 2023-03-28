import React from 'react'

import './DocumentItem.css'
import { useDocumentItem } from './hooks'

export const DocumentItem = ({ document }) => {
  const { handleDocumentClick } = useDocumentItem()

  return (
    <div
      className="document-item"
      key={document.id}
      onClick={() => {
        handleDocumentClick(document.id)
      }}>
      <p>Type: {document?.document_type}</p>
      <p>Category: {document?.category}</p>
      <img src={document?.img_url} alt="not found"/>
    </div>
  )
}