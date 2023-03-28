import { useHistory } from 'react-router-dom';

export const useSideBar = () => {
  const history = useHistory();
  const currentPage = history?.location?.pathname

  const handleItemClick = (path) => {
    history.push(path)
  }

  return {
    handleItemClick,
    currentPage
  }
}