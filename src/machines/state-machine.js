import { createMachine, assign } from 'xstate';

export const stateMachine = createMachine(
  {
    id: 'state',
    context: {
      currentIndex: 0
    },
    initial: 'selecting',
    states: {
      selecting: {
        on: {
          VIEW: 'viewing'
        }
      },
      viewing: {
        on: {
          RETURN: 'selecting'
        }
      }
    },
    on: {
      RIGHT: { actions: 'incrementIndex' },
      LEFT: { actions: 'decrementIndex' },
      SELECT: { actions: 'selectIndex' }
    }
  },
  {
    actions: {
      incrementIndex: assign({ currentIndex: ctx => ctx.currentIndex + 1 }),
      decrementIndex: assign({ currentIndex: ctx => ctx.currentIndex - 1 }),
      selectIndex: assign({ currentIndex: (_, event) => event.index })
    }
  }
);
