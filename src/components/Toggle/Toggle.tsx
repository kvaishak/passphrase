import * as React from "react";
import './Toggle.scss';

type ToggleProps = {
    Name: string,
    checked: boolean,
    onChanged: Function
  }


export const ToggleSwitch = (props: ToggleProps) => {
    return (
        <div className="toggle-switch small-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            name={props.Name}
            id={props.Name}
            checked={props.checked}
            onChange={e => props.onChanged(e.target.checked)}
          />
          <label className="toggle-switch-label" htmlFor={props.Name}>
            <span className="toggle-switch-inner" data-yes="Yes" data-no="No" />
            <span className="toggle-switch-switch" />
          </label>
        </div>
      );
}
