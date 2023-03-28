import React from 'react';

import './UploadDocument.css';
import { useHandleUploadDocument } from './hooks';

import { SideBar } from 'components/SideBar/SideBar';
import { Spinner } from 'components/shared/Spinner';

export const UploadDocument = () => {
  const {
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
  } = useHandleUploadDocument()

  return (
    <div className="upload-page-main">
      <SideBar/>
      <div className="upload-page-wrapper">
        {isUploadLoading ?
          <div className="spinner-wrapper">
            <Spinner size="large"/>
          </div>
          :
          <>
            <input
              ref={inputRef}
              type="file" accept="image/png, image/jpeg" className="input-file-upload"
              onChange={handleChange}
            />
            {(file && preview) ? <img className="img-preview" src={preview} alt="no preview"/> :
              <form className="form-file-upload" onDragEnter={handleDrag}>
                <label
                  htmlFor="input-file-upload"
                  className={`label-file-upload ${isDragActive ? 'drag-active' : ''}`}>
                  <div>
                    {file ? <p>{file.name}</p> : <p>Drag and drop your file here or</p>}
                  </div>
                </label>
                {isDragActive &&
                  <div
                    className="drag-file-element"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}>
                  </div>
                }
              </form>
            }
            <div className="buttons-wrapper">
              <button
                className="select-button"
                onClick={onSelectButtonClick}>{file ? 'Select another file' : 'Select file'}
              </button>
              {file &&
                <button
                  className="upload-button"
                  onClick={onUploadButtonClick}>Upload
                </button>}
            </div>
          </>
        }
      </div>
    </div>
  )
}