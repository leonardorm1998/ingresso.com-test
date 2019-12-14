import React, { useState, SetStateAction, Dispatch } from 'react';

import CheckBox from './components/CheckBox';

import { IType, ISelectedType } from '../../shared/interface';

interface IProps {
  availableTypes: IType[]
  onSetSelectedTypes: Dispatch<SetStateAction<ISelectedType[]>>;
}

const ListType = (props: IProps) => {
  const [selectedTypes] = useState<ISelectedType[] | null>([])

  const updateSelectedTypes = (item: ISelectedType) => {
    if (selectedTypes.some(type => type.name === item.name)) {
      selectedTypes.map((type, index) => type.key === item.key && selectedTypes.splice(index, 1))
      props.onSetSelectedTypes([ ...selectedTypes ])
    } else {
      selectedTypes.push(item);
      props.onSetSelectedTypes([...selectedTypes]);
    }
  }

  return (
    <>
      {props.availableTypes.map((item, key) =>
        <CheckBox
          key={key} label={item.alias}
          onClick={() => updateSelectedTypes({...item, key: key})}
        />
      )}
    </>
  )
}

export default ListType;