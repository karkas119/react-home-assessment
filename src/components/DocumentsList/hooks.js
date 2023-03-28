import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { fetchDocsApi } from 'api/documents'

export const useDocumentsList = () => {
  const history = useHistory()
  const [documents, setDocuments] = useState([]);
  const [isDocumentsLoading, setIsDocumentsLoading] = useState(true);

  useEffect(() => {
    fetchDocsApi()
      .then(data => {
        setDocuments(data.documents);
        setIsDocumentsLoading(false);
      })
      .catch(err => {
        throw err;
      })

  }, []);

  const handleAddDocsClick = () => {
    history.push('/documents/add')
  }

  return {
    isDocumentsLoading,
    documents,
    handleAddDocsClick
  }
}