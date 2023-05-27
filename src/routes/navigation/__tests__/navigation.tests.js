// import * as reactRedux from 'react-redux';
// import { screen, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';
import Navigation from '../navigation.component';
import { renderWithProviders } from '../../../utils/test-utils';

// import { signOutStart } from '../../../store/user/user.action';

describe('Navigation tests', () => {
  test('It should render a Sign In link if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    expect(screen.getByText('LOGIN')).toBeInTheDocument();
    expect(screen.queryByText('LOGOUT')).toBeNull();
  });


  test('It should render a Sign Out link if there is a currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    expect(screen.getByText('LOGOUT')).toBeInTheDocument();
    expect(screen.queryByText('LOGIN')).toBeNull();
  });

  test('It should render cart dropdown if isCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  test('It should not render a cart dropdown if isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    expect(screen.queryByText('Your cart is empty')).toBeNull();
  });


//   test('It should dispatch signOutStart action when clicking on the Sign Out link', async () => {
//     const mockDispatch = jest.fn();
//     jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

//     renderWithProviders(<Navigation />, {
//       preloadedState: {
//         user: {
//           currentUser: {},
//         },
//       },
//     });

//     expect(screen.getByText('LOGOUT')).toBeInTheDocument();

//     await fireEvent.click(screen.getByText('LOGOUT'));

//     expect(mockDispatch).toHaveBeenCalled();
//     expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

//     mockDispatch.mockClear();
//   });
});