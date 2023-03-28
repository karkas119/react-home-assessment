import { defaultHeaders } from '../configs'

export const fetchDocsApi = async () => {
  const response = await fetch(`/documents`, {
    method: 'GET',
    headers: defaultHeaders,
  })

  return response?.json()
};

export const uploadDocumentApi = async (document) => {
  const response = await fetch('/documents', {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(document)
  })

  return response.json()
};

export const fetchDocumentByIdApi = async (documentId) => {
  const response = await fetch(`/documents/${documentId}`, {
    method: 'GET',
    headers: defaultHeaders,
  })

  return response?.json()
};

export const updateDocumentByIdApi = async (documentId, data) => {
  const response = await fetch(`/documents/${documentId}`, {
    method: 'PUT',
    headers: defaultHeaders,
    body: JSON.stringify(data)
  })

  return response.json()
};

export const deleteDocumentByIdApi = async (documentId) => {
  const response = await fetch(`/documents/${documentId}`, {
    method: 'DELETE',
    headers: defaultHeaders,
  })

  return response?.json()
};