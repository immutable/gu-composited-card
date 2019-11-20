// TODO: add demo stories
import { storiesOf } from '@storybook/polymer';
import { withKnobs, number } from '@storybook/addon-knobs';
import '../composited-card';

storiesOf('composited-card', module).add(
  'default',
  () => `<composited-card protoId="3" quality="3" />`,
);

storiesOf('composited-card', module)
  .addDecorator(withKnobs)
  .add('interactive demo', () => {
    const proto = number('proto', Math.floor(Math.random() * 99 + 1));
    const qual = number('quality', Math.floor(Math.random() * 4 + 1));
    return `<composited-card protoId="${proto}" quality="${qual}" />`;
  });
