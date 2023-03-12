import { screen } from '@testing-library/react';
import { renderTheme } from '../../templates/App/App.test';
import { TextComponent } from '.'

describe('<TextComponent />', () => {
    it('should render a text', () => {
        renderTheme(<TextComponent>Children</TextComponent>);
        expect(screen.getByText('Children')).toBeInTheDocument();
    });

    it('should render text', () => {
        const { container } = renderTheme(<TextComponent>Children</TextComponent>);
        expect(container).toMatchSnapshot();
    });
});
