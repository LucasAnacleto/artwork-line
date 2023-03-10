import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Home from '.';

export const renderTheme = (children) => {
    return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};


test('renders learn react link', () => {
    renderTheme(<Home />);
});
