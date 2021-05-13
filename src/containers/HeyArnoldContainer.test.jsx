import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeyArnoldContainer from './HeyArnoldContainer';


describe('hey arnold container', () => {
    it('returns a list of cartoons', async () => {
        render(<HeyArnoldContainer />);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', {name: 'cartoons'});
        expect(ul).not.toBeEmptyDOMElement();

        const input = await screen.findByLabelText('Cartoon Name');
        userEvent.type(input, 'Mitzi');

        const button = await screen.findByRole('button', {name: 'search'});
        userEvent.click(button);

        return waitFor(() => {
            const cartoons = screen.getByText('Mitzi', {exact: false});
            expect(cartoons).not.toBeEmptyDOMElement();
        })

    });
});