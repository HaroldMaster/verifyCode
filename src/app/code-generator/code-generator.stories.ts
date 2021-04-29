import { moduleMetadata } from '@storybook/angular';
import { CodeGeneratorComponent } from "./code-generator.component";

export default {
    title: 'Code Generator Card',
    component: CodeGeneratorComponent,
    decorators: [
      moduleMetadata({
        imports: [],
        providers: [],
      }),
    ],
    };

export const codeGenerator = () => ({
    component: CodeGeneratorComponent,
      props: {
          code: 8526,
      },
    });