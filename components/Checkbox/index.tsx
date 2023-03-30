import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { CheckBoxTaks } from './styles';
import { useState } from 'react';

export function CheckboxTask({check, id, handleChangeChecked}){

  function changeChecked(props: boolean) {
    handleChangeChecked(id, props);
  }

  return (
    <CheckBoxTaks>
      <Checkbox.Root className="CheckboxRoot" defaultChecked={check} onCheckedChange={changeChecked}>
        <Checkbox.Indicator className="CheckboxIndicator" >
          <CheckIcon width={20} height={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </CheckBoxTaks>
  )
};
