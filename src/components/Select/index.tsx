import React from 'react';
import { View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../../theme/theme';
import { styles } from './styles';

type TProps = {
  data: string[];
  placeholder: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
  defaultValue?: string;
};

const Select = ({ data, placeholder, onSelect, defaultValue }: TProps) => {
  return (
    <View style={styles.container}>
      <SelectDropdown
        defaultButtonText={placeholder}
        renderDropdownIcon={() => (
          <Icon
            name="chevron-down-outline"
            size={28}
            color={colores.primaryPurple}
          />
        )}
        data={data}
        onSelect={onSelect}
        buttonStyle={styles.button}
        buttonTextStyle={styles.textButton}
        dropdownStyle={styles.dropdown}
        rowTextStyle={styles.rowText}
        defaultValue={defaultValue}
      />
    </View>
  );
};

export default Select;
