import {render, RenderResult} from '@testing-library/angular';
import {IncrementorComponent} from './incrementor.component';

const doRender = async (): Promise<RenderResult<IncrementorComponent>> => {
  return await render(IncrementorComponent);
};

describe('Incrementor', () => {

  it('can render with a default value', async () => {
    const t = await doRender();
    const output = t.getByTestId('output');

    expect(output.textContent).toContain('Value: 0')
  });
  describe('after increment', () => {
    it('shows a new value', async () => {
      const t = await doRender();
      const incBtn = t.getByTestId('increment');

      t.click(incBtn);

      expect(t.getByTestId('output').textContent).toContain('Value: 1')
    });
  });
});
