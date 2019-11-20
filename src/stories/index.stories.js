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
  .add('add props', () => {
    const num = number('increment value', 5);
    const qual = number('increment value', 4);
    return `<composited-card protoId="${num}" quality="${qual} />`;
  });
