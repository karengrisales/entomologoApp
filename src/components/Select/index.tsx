import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/theme';
import { styles } from './styles';

type TProps = {
  data: string[];
  placeholder: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
  defaultValue?: string;
  label?: string;
};

const Select = ({
  data,
  placeholder,
  onSelect,
  defaultValue,
  label,
}: TProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <SelectDropdown
          defaultButtonText={placeholder}
          renderDropdownIcon={() => (
            <Icon
              name="chevron-down-outline"
              size={28}
              color={colors.secondaryGreen}
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
    </View>
  );
};

export default Select;
