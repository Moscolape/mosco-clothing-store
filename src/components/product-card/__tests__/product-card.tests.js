import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';

import ProductCard from '../product-card.component';


describe('product card tests', () => {
    it('should add the product item when product button is clicked', async () => {
        const mockProduct = {
            id: 1,
            imageURL: 'test',
            name: 'Item A',
            price: 10
        }

        const {store} = renderWithProviders(<ProductCard product={mockProduct} />, {
          preloadedState: {
            cart: {
              cartItems: []
            },
          },
        });

        await fireEvent.click(screen.getByText(/add to cart/i));

        expect(store.getState().cart.cartItems.length).toBe(1)
    })
});