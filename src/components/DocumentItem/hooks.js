import { useHistory } from 'react-router-dom';

export const useDocumentItem = () => {
  const history = useHistory();

  const handleDocumentClick = (documentId) => {
    history.push(`/documents-list/${documentId}`)
  }

  return {
    handleDocumentClick
  }
}