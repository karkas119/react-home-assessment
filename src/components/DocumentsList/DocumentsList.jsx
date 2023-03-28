import React from 'react'

import './DocumentsList.css';
import { useDocumentsList } from './hooks';

import { DocumentItem } from 'components/DocumentItem/DocumentItem';
import { SideBar } from 'components/SideBar/SideBar';
import { Spinner } from 'components/shared/Spinner';

export const DocumentsList = () => {
  const {
    isDocumentsLoading,
    documents,
    handleAddDocsClick
  } = useDocumentsList()

  return (
    <div className="main-wrapper">
      <SideBar/>
      <div className="content-wrapper">
        {isDocumentsLoading ?
          <div data-testid='spinner-test-id' className="spinner-wrapper">
            <Spinner size="large"/>
          </div>
          :
          <>
            <div className="documents-wrapper">
              {documents.length > 0 ?
                documents.map(document => <DocumentItem document={document} key={document?.id}/>) :
                <div className="empty-documents-wrappers">
                  <p>Currently you don't have any documents</p>
                </div>
              }
            </div>
            <div className="add-docs-btn-wrapper">
              <button
                className="add-docs-btn"
                onClick={handleAddDocsClick}>
                Add new document
              </button>
            </div>
          </>
        }
      </div>
    </div>
  )
}