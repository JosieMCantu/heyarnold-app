import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldContainer from './HeyArnoldContainer';

describe('hey arnold container', () => {
    it('returns a list of cartoons', async () => {
        render(<HeyArnoldContainer />);
        screen.getByText('Loading...');
    });
});