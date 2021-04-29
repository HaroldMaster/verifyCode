import { moduleMetadata } from '@storybook/angular';
import { NumberInputComponent } from '../number-input/number-input.component';
import { CardComponent } from './card.component';

export default {
    title: 'Code Input Card',
    component: CardComponent,
    decorators: [
      moduleMetadata({
        imports: [
        ],
        providers: [],
        declarations: [
            NumberInputComponent
        ]
      }),
    ],
    };

export const mainCard = () => ({
      component: CardComponent,
      props: {

      },
});