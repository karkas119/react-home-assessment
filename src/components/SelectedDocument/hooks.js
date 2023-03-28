import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { fetchDocumentByIdApi, updateDocumentByIdApi, deleteDocumentByIdApi } from 'api/documents';

export const useSelectedDocument = (documentId) => {
  const history = useHistory();
  const [document, setDocument] = useState(null);
  const [isDocumentLoading, setIsDocumentLoading] = useState(true);
  const [isEditMode, setEditMode] = useState(false);

  useEffect(() => {
    if (documentId) {
      fetchDocumentByIdApi(documentId)
        .then(document => {
          setDocument(document);
          setIsDocumentLoading(false);
        })
        .catch(err => {
          throw err;
        })
    }
  }, [documentId]);

  const handleEditBtnClick = (e) => {
    e.preventDefault();
    setEditMode(prevValue => !prevValue);
  };

  const handleDocEditSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      account_number: e.currentTarget.elements.account.value,
      category: e.currentTarget.elements.category.value,
      currency_code: e.currentTarget.elements.currency.value,
    }

    updateDocumentByIdApi(documentId, requestBody)
      .then(updatedDocument => {
        setDocument(updatedDocument)
        setEditMode(false);
      })
      .catch(err => {
        throw err;
      })
  };

  const handleDocDelete = (e) => {
    e.preventDefault();
    deleteDocumentByIdApi(documentId)
      .then(() => {
        history.push('/documents-list')
      })
      .catch(err => {
        throw err;
      })
  }

  return {
    isDocumentLoading,
    isEditMode,
    document,
    handleEditBtnClick,
    handleDocEditSubmit,
    handleDocDelete
  }
}