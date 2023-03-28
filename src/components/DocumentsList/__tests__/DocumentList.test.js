import { render, screen, waitFor } from '@testing-library/react'

import { DocumentsList } from 'components/DocumentsList/DocumentsList'

const mockResponse = {
  documents: [{
    id: 1,
    document_type: 'test_type',
    category: 'test_category',
    img_url: 'test_url'
  }, {
      id: 2,
      document_type: 'test_type2',
      category: 'test_category2',
      img_url: 'test_url2'
  }]
}

jest.mock('components/DocumentItem/DocumentItem', () => ({
  DocumentItem: () => <div data-testid="document-item"/>,
}));

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  })
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('<DocumentsList />', () => {
  it('should render the list of documents from API', async () => {
    render(<DocumentsList/>);

    await waitFor(() => {
      expect(screen.getAllByTestId('document-item').length).toBe(mockResponse.documents.length)
    });
  })
})