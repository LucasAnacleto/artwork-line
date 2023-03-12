import { screen } from '@testing-library/react';
import { renderTheme } from '../../templates/App/App.test';
import { Dummy } from '.'

describe('<Dummy />', () => {
    it('should render', () => {
        renderTheme(<Dummy>Children</Dummy>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});

