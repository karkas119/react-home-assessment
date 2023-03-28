import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { uploadDocumentApi } from 'api/documents'
import { convertToBase64 } from 'utils/toBase64'

export const useHandleUploadDocument = () => {
  const history = useHistory()
  const [isDragActive, setIsDragActive] = useState(false)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [isUploadLoading, setIsUploadLoading] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!file) {
      setPreview(null)
      return;
    }

    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [file])

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const eventTypes = {
      dragenter: 'dragenter',
      dragover: 'dragover',
      dragleave: 'dragleave'
    }

    if (e.type === eventTypes.dragenter || e.type === eventTypes.dragover) {
      setIsDragActive(true)
    } else if (e.type === eventTypes.dragleave) {
      setIsDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)

    if (e?.dataTransfer?.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e?.target?.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const onSelectButtonClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    inputRef?.current?.click()
    setFile(null)
    setPreview(null)
  }

  const onUploadButtonClick = async () => {
    setIsUploadLoading(true)
    const convertedFile = await convertToBase64(file)
    const requestBody = {
      file_data: convertedFile
    }

    uploadDocumentApi(requestBody)
      .then(() => {
        setFile(null)
        setPreview(null)
        setIsUploadLoading(false)
        history.push('/documents-list')
      })
      .catch(err => {
        throw err
      })
  }

  return {
    file,
    inputRef,
    preview,
    handleDrag,
    handleDrop,
    isDragActive,
    isUploadLoading,
    handleChange,
    onSelectButtonClick,
    onUploadButtonClick
  }
}