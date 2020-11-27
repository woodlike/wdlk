import { Dispatch } from 'react';
import { CartAction } from '..';
import * as Actions from '../actions';

interface ActionCreatorPayload {
  readonly test: string;
}

describe('Cart Action Creators', () => {
  let dispatchMock: Dispatch<CartAction>;
  let actionCreator: (payload: ActionCreatorPayload) => void;

  beforeEach(() => {
    dispatchMock = jest.fn();
    actionCreator = jest.fn();
  });

  afterEach(() => {
    dispatchMock = (undefined as unknown) as Dispatch<CartAction>;
    actionCreator = (undefined as unknown) as () => void;
  });

  it('should initialize Actions.create and return a new function', () => {
    expect(
      typeof Actions.create<CartAction>(dispatchMock) === 'function',
    ).toBeTruthy();
  });

  it('should have called the passed action creator argument', () => {
    const creator = Actions.create<CartAction>(dispatchMock);
    const action = creator<ActionCreatorPayload>(actionCreator);
    action({ test: 'test' });
    expect(actionCreator).toHaveBeenCalled();
  });

  it('should have called the action creator with the passed payload + dispatch', () => {
    const payload = { test: 'test' };
    const creator = Actions.create<CartAction>(dispatchMock);
    const action = creator<ActionCreatorPayload>(actionCreator);
    action(payload);
    action(payload);
    action(payload);
    expect(actionCreator).toHaveBeenLastCalledWith({
      ...payload,
      dispatch: dispatchMock,
    });
    expect(actionCreator).toHaveBeenCalledTimes(3);
  });
});
