import { IStackItemProps } from './StackItem.types';
import { compose } from '@uifabricshared/foundation-compose';
import { stackItemTokenProcessor } from './StackItem.tokens';

export const StackItem = compose<IStackItemProps>({
  displayName: 'StackItem',
  settings: ['RNFStackItem'],
  slots: {
    root: {
      slotType: 'div',
      styleFactories: [stackItemTokenProcessor]
    }
  }
});

export default StackItem;