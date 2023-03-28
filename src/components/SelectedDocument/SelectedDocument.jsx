import React from 'react'
import { useParams } from 'react-router-dom'

import { useSelectedDocument } from './hooks'
import './SelectedDocument.css'

import { Spinner } from 'components/shared/Spinner'
import { SideBar } from 'components/SideBar/SideBar'
import { currenciesList } from 'constants/currencies'

export const SelectedDocument = () => {
  const { documentId } = useParams('documentId')
  const {
    isDocumentLoading,
    isEditMode,
    document,
    handleEditBtnClick,
    handleDocEditSubmit,
    handleDocDelete
  } = useSelectedDocument(documentId)

  return (
    <div className="main-wrapper">
      <SideBar/>
      {isDocumentLoading ?
        <div className="spinner-wrapper">
          <Spinner size="large"/>
        </div> :
        <>
          <div className="selected-document-item-wrapper" key={document.id}>
            <div className="selected-document-item">
              <div className="document-image">
                <img src={document?.img_url} alt="not found"/>
              </div>
              <div className="document-info">
                {isEditMode ?
                  <form onSubmit={handleDocEditSubmit}>
                    <div className="form-item">
                      <label><span>Account Number: </span>
                        <input name="account" id="account" type="text"/>
                      </label>
                    </div>
                    <div className="form-item">
                      <label><span>Category: </span>
                        <input type="text" name="category" id="category"/>
                      </label>
                    </div>
                    <div className="form-item">
                      <label><span>Currency: </span>
                        <select name="currency" id="currency">
                          {currenciesList.map(currency => <option key={currency}>{currency}</option>)}
                        </select>
                      </label>
                    </div>
                    <div className="form-item">
                      <input type="submit" className="edit-button"/>
                    </div>
                  </form>
                  :
                  <>
                    <p><span>Account Number</span>: {document?.account_number || 'N/A'}</p>
                    <p><span>Type:</span> {document?.document_type || 'N/A'}</p>
                    <p><span>Category:</span> {document?.category || 'N/A'}</p>
                    <p><span>Currency:</span> {document?.currency_code || 'N/a'}</p>
                  </>
                }
                <div className="buttons-wrapper">
                  <button className="edit-button"
                          onClick={handleEditBtnClick}
                  >{isEditMode ? 'Cancel changes' : 'Edit document'}</button>
                  <button className="delete-button" onClick={handleDocDelete}>Delete document</button>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}