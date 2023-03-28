import { MainPage } from 'components/MainPage/MainPage';
import { DocumentsList } from 'components/DocumentsList/DocumentsList';
import { UploadDocument } from 'components/UploadDocument/UploadDocument';
import { SelectedDocument } from 'components/SelectedDocument/SelectedDocument';


export const routes = [
  {
    path: '/',
    name: 'Main',
    Component: () => <MainPage />,
    isShownInMenu: true
  },
  {
    path: '/documents-list',
    name: 'Documents',
    Component: () => <DocumentsList />,
    isShownInMenu: true
  },
  {
    path: '/documents-list/:documentId',
    name: 'Selected Documents',
    Component: () => <SelectedDocument />,
    isShownInMenu: false
  },
  {
    path: '/documents/add',
    name: 'Add Document',
    Component: () => <UploadDocument />,
    isShownInMenu: true
  },
]