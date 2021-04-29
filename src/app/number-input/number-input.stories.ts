import { moduleMetadata } from '@storybook/angular';
import { NumberInputComponent } from './number-input.component';

export default {
    title: 'Number Input',
    component: NumberInputComponent,
    decorators: [
      moduleMetadata({
        imports: [],
        providers: [],
      }),
    ],
    };

export const codeGenerator = () => ({
    component: NumberInputComponent,
      props: {
        
      },
    });