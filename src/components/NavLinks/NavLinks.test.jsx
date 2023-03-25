import { screen } from '@testing-library/react';
import { renderTheme } from '../../templates/App/App.test';
import { NavLinks } from '.'

describe('<NavLinks />', () => {
    it('should render', () => {
        renderTheme(<NavLinks>Children</NavLinks>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});
