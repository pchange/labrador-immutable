/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-18
 * @author Li <li@maichong.it>
 */
import { Component } from 'labrador';
import immutable from 'seamless-immutable';
export default class ImmutableComponent extends Component {
  _ImmutableComponent_props = immutable({});
  _ImmutableComponent_state = immutable({});

  constructor(props) {
    super(props);
    this._ImmutableComponent_props = immutable(props);
  }

  get state() {
    console.log('return state');
    return this._ImmutableComponent_state;
  }

  set state(value) {
    console.log('value:',value);
    this._ImmutableComponent_state = immutable(value);
  }


  get props() {
    return this._ImmutableComponent_props;
  }

  set props(value) {
    this._ImmutableComponent_props = immutable(value);
  }

  onUnLoad() {
    super.onUnLoad();
    this._ImmutableComponent_props = null;
    this._ImmutableComponent_props = null;
  }
}
