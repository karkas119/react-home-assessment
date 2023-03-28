import { useHistory } from 'react-router-dom'

export const useMainPage = () => {
  const history = useHistory();

  const onDocsCheckBtnClick = () => {
    history.push('/documents-list')
  }

  return {
    onDocsCheckBtnClick
  }
}